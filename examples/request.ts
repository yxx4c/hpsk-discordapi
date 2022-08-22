import {config} from "dotenv";
import { REST, Routes } from "../index";

config({path: "../.env"})

let rest = new REST({}).setToken(process.env.discord_token as string);
(async () => {
    // without files
    await rest.post(Routes.channelMessages("xxx"), {
        body: {
            content: "Hello"
        }
    })
    // with files
    await rest.post(Routes.channelMessages("xxx"), {
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
    })
})();