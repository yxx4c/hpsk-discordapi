"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REST = exports.RESTError = void 0;
const undici_1 = require("undici");
const Routes_1 = require("./Routes");
const stream_1 = require("stream");
const buffer_1 = require("buffer");
const package_json_1 = require("../../package.json");
const APITypes_1 = require("./APITypes");
function parseHeader(header) {
    if (header === void 0) {
        return header;
    }
    else if (typeof header === "string") {
        return header;
    }
    return header.join(";");
}
function parseResponse(res) {
    const header = parseHeader(res.headers["content-type"]);
    if (header?.startsWith("application/json")) {
        return res.body.json();
    }
    return res.body.arrayBuffer();
}
const statusObject = {
    "200": "OK",
    "201": "CREATED",
    "204": "NO CONTENT",
    "304": "NOT MODIFIED",
    "400": "BAD REQUEST",
    "401": "UNAUTHORIZED",
    "403": "FORBIDDEN",
    "404": "NOT FOUND",
    "405": "METHOD NOT ALLOWED",
    "429": "TOO MANY REQUESTS",
    "502": "GATEWAY UNAVAILABLE",
    "5xx": "SERVER ERROR"
};
class RESTError extends Error {
    data;
    files;
    statusText;
    constructor(body, statusCode, files, Discord, URL) {
        super();
        this.data = body;
        this.statusText = statusObject[statusCode.toString()];
        this.files = files;
        this.message = `[DISCORD API ERROR] ${statusCode} ${this.statusText}\nmessage: ${JSON.stringify(Discord)}\nURL: ${URL}`;
        delete this.statusText;
    }
}
exports.RESTError = RESTError;
class REST extends stream_1.EventEmitter {
    route;
    cdn;
    authPrefix = "Bot";
    token;
    constructor(obj) {
        super();
        if (obj.authPrefix) {
            this.authPrefix = obj.authPrefix;
        }
        this.route = `${Routes_1.RouteBases.api}/v${obj.version ?? APITypes_1.defaults.rest}`;
        this.cdn = Routes_1.RouteBases.cdn;
    }
    setToken(token) {
        this.token = token;
        return this;
    }
    async req(route, requestBody = {}, method) {
        if (!requestBody.headers)
            requestBody.headers = {};
        requestBody.headers["User-agent"] = `DiscordBot (https://github.com/gdhpsk/hpsk-discordapi, ${package_json_1.version})`,
            requestBody.headers["content-type"] = requestBody.files?.length ? undefined : "application/json",
            requestBody.headers.authorization = `Bot ${this.token}`;
        requestBody.method = method;
        if (requestBody.files) {
            let data = new undici_1.FormData();
            for (let i = 0; i < requestBody.files.length; i++) {
                data.append("payload_json", JSON.stringify(requestBody.body));
                data.append(`files[${requestBody.files[i].key ?? i}]`, new buffer_1.Blob([requestBody.files[i].data]), requestBody.files[i].name);
            }
            requestBody.body = data;
        }
        else {
            requestBody.body = JSON.stringify(requestBody.body);
        }
        let o = await (0, undici_1.request)(this.route + route, requestBody);
        let { statusCode, body, headers } = o;
        if (statusCode == 429) {
            this.emit("rateLimited", {
                global: !!headers["x-ratelimit-global"],
                timeToReset: headers["retry-after"] * 1000,
                limit: headers["x-ratelimit-limit"],
                url: this.route + route,
                route: route,
                method: "POST"
            });
            let myFirstPromise = new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve(null);
                }, headers["retry-after"] * 1000);
            });
            await myFirstPromise;
            o = await (0, undici_1.request)(this.route + route, requestBody);
            let newo = o;
            body = newo.body;
            headers = newo.headers;
            statusCode = newo.statusCode;
        }
        if (statusCode > 399 && statusCode < 600) {
            if (statusCode > 499 && statusCode != 503) {
                throw new RESTError(requestBody.body, "5xx", requestBody.files ?? [], await body.json(), this.route + route);
            }
            else {
                throw new RESTError(requestBody.body, statusCode, requestBody.files ?? [], await body.json(), this.route + route);
            }
        }
        let response = await parseResponse(o);
        return response;
    }
    async get(route, requestBody = {}) {
        let res = await this.req(route, requestBody, "GET");
        return res;
    }
    async post(route, requestBody = {}) {
        let res = await this.req(route, requestBody, "POST");
        return res;
    }
    async patch(route, requestBody = {}) {
        let res = await this.req(route, requestBody, "PATCH");
        return res;
    }
    async delete(route, requestBody = {}) {
        let res = await this.req(route, requestBody, "DELETE");
        return res;
    }
    async put(route, requestBody = {}) {
        let res = await this.req(route, requestBody, "PUT");
        return res;
    }
}
exports.REST = REST;
