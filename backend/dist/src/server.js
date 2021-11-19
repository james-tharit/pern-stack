"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const allowHosts = {
    origin: 'http://localhost:3000'
};
const server = express_1.default();
server.use(express_1.default.json());
server.use(cors_1.default(allowHosts));
server.get("/", (req, res) => {
    res.json({ status: "OK" });
});
exports.default = server;
//# sourceMappingURL=server.js.map