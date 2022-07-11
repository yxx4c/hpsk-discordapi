/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from "stream";
import { File } from "formdata-node";
interface RESTOptions {
    version: String;
    authPrefix: "Bot" | "Bearer";
}
interface Files {
    data: Buffer;
    name: String;
    key?: String;
}
interface RESTBody {
    headers: Record<string, any>;
    method: String;
    body?: any;
    files?: Files[];
}
export declare class RESTError extends Error {
    data: Record<any, any>;
    files: any;
    statusText: any;
    constructor(body: Record<any, any>, statusCode: Number | string, files: Array<File> | undefined, Discord: Record<any, any>, URL: string);
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
export declare class REST extends EventEmitter {
    protected route: string;
    cdn: string;
    private authPrefix;
    private token;
    constructor(obj: Partial<RESTOptions>);
    setToken(token: string): this;
    private req;
    get(route: String, requestBody?: Partial<RESTBody>): Promise<Record<any, any>>;
    post(route: String, requestBody?: Partial<RESTBody>): Promise<Record<any, any>>;
    patch(route: String, requestBody?: Partial<RESTBody>): Promise<Record<any, any>>;
    delete(route: String, requestBody?: Partial<RESTBody>): Promise<Record<any, any>>;
    put(route: String, requestBody?: Partial<RESTBody>): Promise<Record<any, any>>;
}
export {};
