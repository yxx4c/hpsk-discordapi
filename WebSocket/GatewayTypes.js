"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayConnection = exports.GatewayOpcodes = void 0;
var GatewayOpcodes;
(function (GatewayOpcodes) {
    GatewayOpcodes[GatewayOpcodes["Dispatch"] = 0] = "Dispatch";
    GatewayOpcodes[GatewayOpcodes["Heartbeat"] = 1] = "Heartbeat";
    GatewayOpcodes[GatewayOpcodes["Identity"] = 2] = "Identity";
    GatewayOpcodes[GatewayOpcodes["PresenceUpdate"] = 3] = "PresenceUpdate";
    GatewayOpcodes[GatewayOpcodes["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
    GatewayOpcodes[GatewayOpcodes["Resume"] = 6] = "Resume";
    GatewayOpcodes[GatewayOpcodes["Reconnect"] = 7] = "Reconnect";
    GatewayOpcodes[GatewayOpcodes["RequestGuildMembers"] = 8] = "RequestGuildMembers";
    GatewayOpcodes[GatewayOpcodes["InvalidSession"] = 9] = "InvalidSession";
    GatewayOpcodes[GatewayOpcodes["Hello"] = 10] = "Hello";
    GatewayOpcodes[GatewayOpcodes["HeartbeatACK"] = 11] = "HeartbeatACK";
})(GatewayOpcodes = exports.GatewayOpcodes || (exports.GatewayOpcodes = {}));
class GatewayConnection {
    constructor(obj) {
        return {
            op: GatewayOpcodes.Identity,
            d: obj
        };
    }
}
exports.GatewayConnection = GatewayConnection;
