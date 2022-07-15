/// <reference types="node" />
import { WebSocket } from "ws";
import { EventEmitter } from "node:events";
import { Events } from "./GatewayTypes";
export interface WebSocketOptions {
    version: Number;
    encoding: "json" | "etf";
}
declare class DiscordEventEmitter extends EventEmitter {
    constructor();
    on: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this);
    once: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this);
    emit: (<K extends keyof Events>(event: K, ...args: Events[K]) => boolean) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, ...args: any[]) => boolean);
    off: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this);
    removeAllListeners: (<K extends keyof Events>(event?: K) => this) & (<S extends string | symbol>(event?: Exclude<S, keyof Events>) => this);
}
export declare class DiscordWebSocket extends WebSocket {
    eventEmitter: DiscordEventEmitter;
    version: Number;
    private gunzip;
    private interval;
    private sessionid;
    private gunzipJSON;
    encoding: "etf" | "json";
    discord_socket: DiscordWebSocket;
    constructor(obj: WebSocketOptions);
    connect(data: Record<string, string | Object>): void;
}
export * from "./GatewayTypes";
