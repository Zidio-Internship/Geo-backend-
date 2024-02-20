"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./db/db");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)('dev'));
const PORT = 8080 || process.env.PORT;
(async () => {
    (0, db_1.ConnectSQL)();
    const app = server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    process.on('SIGINT', () => {
        console.log('Shutting down...');
        app.close(() => {
            console.log('Server closed.');
            process.exit(0);
        });
    });
})();
