"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectSQL = exports.pool = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.pool = mysql_1.default.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
});
function ConnectSQL() {
    exports.pool.getConnection((err, connection) => {
        if (err) {
            console.error("Error connecting to MySQL:", err.message);
            throw err;
        }
        console.log("Connected to MySQL");
        connection.on("error", (error) => {
            if (error.code === "PROTOCOL_CONNECTION_LOST") {
                console.error("Connection lost. Reconnecting...");
                ConnectSQL();
            }
            else {
                throw error;
            }
        });
        connection.release();
    });
}
exports.ConnectSQL = ConnectSQL;
