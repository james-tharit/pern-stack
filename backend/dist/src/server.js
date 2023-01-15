"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const allowHosts = {
    origin: "http://localhost:3000",
};
const server = express_1.default();
server.use(express_1.default.json());
server.use(cors_1.default(allowHosts));
server.use(api_1.default);
server.get("/", (req, res) => {
    res.send("ok");
});
exports.default = server;
//# sourceMappingURL=server.js.map