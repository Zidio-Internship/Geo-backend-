"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors_1.default);
app.use((0, morgan_1.default)('dev'));
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
