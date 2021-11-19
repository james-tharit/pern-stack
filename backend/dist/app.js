"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const port = 3001;
const startServer = () => {
    try {
        server_1.default.listen(port, () => console.log("Starting server on port " + port));
    }
    catch (err) {
        console.log("server err: " + err);
    }
};
startServer();
//# sourceMappingURL=app.js.map