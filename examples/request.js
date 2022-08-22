"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const index_1 = require("../index");
(0, dotenv_1.config)({ path: "../.env" });
let rest = new index_1.REST({}).setToken(process.env.discord_token);
(async () => {
    // without files
    await rest.post(index_1.Routes.channelMessages("xxx"), {
        body: {
            content: "Hello"
        }
    });
    // with files
    await rest.post(index_1.Routes.channelMessages("xxx"), {
        body: {
            content: "Hello"
        },
        files: [
            {
                name: "something.txt",
                data: Buffer.from("String"),
                key: "0"
            }
        ]
    });
})();
