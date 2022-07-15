import { DiscordWebSocket } from "../index";
export declare type Shard = {
    id: number;
    totalShards: number;
};
export declare class DiscordShards extends DiscordWebSocket {
    private rest;
    gatewayVersion: number;
    gatewayEncoding: "json" | "etf";
    data: Record<any, any>;
    readonly arrayOfSockets: Array<DiscordWebSocket>;
    constructor(data: Record<any, any>, gatewayVersion: number, gatewayEncoding: "json" | "etf");
    createShards(): Promise<void>;
}
