import {FormData, request} from "undici"
import {RouteBases} from "./Routes"
import {EventEmitter} from "stream" 
import { Blob } from "buffer"
import { File } from "formdata-node" 
import { ResponseData } from "undici/types/dispatcher"
function parseHeader(header: any) {
  if (header === void 0) {
    return header;
  } else if (typeof header === "string") {
    return header;
  }
  return header.join(";");
}
function parseResponse(res: any) {
  const header = parseHeader(res.headers["content-type"]);
  if (header?.startsWith("application/json")) {
    return res.body.json();
  }
  return res.body.arrayBuffer();
}

interface RESTOptions {
  version: String,
  authPrefix: "Bot" | "Bearer"
}

interface Files {
  data: Buffer,
  name: String,
  key?: String
}

interface RESTBody {
  headers: Record<string, any>,
  method: String,
  body?: any,
  files?: Files[]
}

const statusObject: Record<string, string> = {
  "200": "OK",
"201": "CREATED",
"204": "NO CONTENT",
"304": "NOT MODIFIED",
"400": "BAD REQUEST",
"401": "UNAUTHORIZED",
"403": "FORBIDDEN",
"404":"NOT FOUND",
"405": "METHOD NOT ALLOWED",
"429": "TOO MANY REQUESTS",
"502": "GATEWAY UNAVAILABLE",
"5xx": "SERVER ERROR"
}

export class RESTError extends Error {
  data: Record<any, any>
  files!: any
  statusText: any
  
  constructor(body: Record<any, any>, statusCode: Number | string, files: Array<File> | undefined, Discord: Record<any, any>, URL: string) {
    super()
    this.data = body
    this.statusText = statusObject[statusCode.toString()]
    this.files = files
    this.message = `[DISCORD API ERROR] ${statusCode} ${this.statusText}\nmessage: ${JSON.stringify(Discord)}\nURL: ${URL}`
    delete this.statusText
  }
}

interface RateLimitData {
  timeToReset: number;
  limit: number;
  method: string;
  url: string;
  route: string;
  global: boolean;
}

interface RestEvents {
  rateLimited: [rateLimitInfo: RateLimitData];
}

export interface REST {
  on: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);
  once: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);
  emit: (<K extends keyof RestEvents>(event: K, ...args: RestEvents[K]) => boolean) & (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, ...args: any[]) => boolean);
  off: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);
  removeAllListeners: (<K extends keyof RestEvents>(event?: K) => this) & (<S extends string | symbol>(event?: Exclude<S, keyof RestEvents>) => this);
}

export class REST extends EventEmitter  {
  protected route: string;
  public cdn: string;
  private authPrefix: string = "Bot";
  private token!: string;

  constructor(obj: Partial<RESTOptions>) {
    super()
    if(obj.authPrefix) {
        this.authPrefix = obj.authPrefix
    }
    this.route = `${RouteBases.api}/v${obj.version}`
    this.cdn = RouteBases.cdn
  }

  public setToken(token: string): this {
    this.token = token
    return this
  }
  private async req(route: String, requestBody: Partial<RESTBody> = {}, method: String): Promise<Record<any, any>>  {
    if(!requestBody.headers) requestBody.headers = {}
    requestBody.headers["User-agent"] = "DiscordBot (https://discord.js.org, 0.5.0-dev) Node.js v16.15.1",
      requestBody.headers["content-type"] =requestBody.files?.length ? undefined : "application/json",
      requestBody.headers.authorization = `Bot ${this.token}`
    requestBody.method = method
    if(requestBody.files) { 
      let data = new FormData()
      for(let i = 0; i < requestBody.files.length; i++) {
        data.append("payload_json", JSON.stringify(requestBody.body))
        data.append(`files[${requestBody.files[i].key ?? i}]`, new Blob([requestBody.files[i].data]), requestBody.files[i].name as string)
      }
      requestBody.body =  data
    } else {
      requestBody.body = JSON.stringify(requestBody.body)
    }
    let o: ResponseData =await request(this.route + route as string,  requestBody as any)
  
    let {statusCode, body, headers} = o
    if(statusCode == 429) {
      this.emit("rateLimited", {
        global: !!headers["x-ratelimit-global"],
        timeToReset: (headers["retry-after"] as unknown as number) * 1000,
        limit: headers["x-ratelimit-limit"] as any,
        url: this.route + route,
        route: route as string,
        method: "POST"
      })
      let myFirstPromise = new Promise((resolve, reject) => {
        setTimeout( function() {
          resolve(null)
        }, headers["retry-after"]as any * 1000)
      })
      await myFirstPromise
      o = await request(this.route + route as string,  requestBody as any)
     let newo = o
     body = newo.body
     headers = newo.headers
     statusCode = newo.statusCode
    }
    if(statusCode > 399 && statusCode < 600) {
      if(statusCode > 499 && statusCode != 503) {
        throw new RESTError(requestBody.body, "5xx", requestBody.files as unknown  as Array<File> ?? [], await body.json(), this.route + route) 
           } else {
        throw new RESTError(requestBody.body, statusCode, requestBody.files as unknown  as Array<File> ?? [], await body.json(), this.route + route)
      }
  }
    let response: any = await parseResponse(o)
    return response
  }
  public async get(route: String, requestBody: Partial<RESTBody> = {}): Promise<Record<any, any>> {
    let res = await this.req(route, requestBody, "GET")
    return res
  }
  public async post(route: String, requestBody: Partial<RESTBody> = {}): Promise<Record<any, any>> {
    let res = await this.req(route, requestBody, "POST")
    return res
  }
  public async patch(route: String, requestBody: Partial<RESTBody> = {}): Promise<Record<any, any>> {
    let res = await this.req(route, requestBody, "PATCH")
    return res
  }
  public async delete(route: String, requestBody: Partial<RESTBody> = {}): Promise<Record<any, any>> {
    let res = await this.req(route, requestBody, "DELETE")
    return res
  }
  public async put(route: String, requestBody: Partial<RESTBody> = {}): Promise<Record<any, any>> {
    let res = await this.req(route, requestBody, "PUT")
    return res
  }
}