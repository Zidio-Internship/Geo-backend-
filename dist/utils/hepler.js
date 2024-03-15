"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = exports.login = exports.signup = exports.generateRefreshToken = exports.createVerificationToken = exports.queryAsync = void 0;
const db_1 = require("../db/db");
const crypto_1 = __importDefault(require("crypto"));
function queryAsync(sql, values) {
    return new Promise((resolve, reject) => {
        db_1.pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, values, (error, results) => {
                connection.release();
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    });
}
exports.queryAsync = queryAsync;
function createVerificationToken() {
    return crypto_1.default.randomBytes(40).toString("hex");
}
exports.createVerificationToken = createVerificationToken;
function generateRefreshToken() {
    return crypto_1.default.randomBytes(40).toString("hex");
}
exports.generateRefreshToken = generateRefreshToken;
async function signup(email, name, otp) {
    const query = `INSERT INTO User_Details (email, name,otp) VALUES (?,?, ?)`;
    try {
        const result = await queryAsync(query, [email, name, otp]);
        return result;
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
exports.signup = signup;
async function login(email) {
    const query = `SELECT * FROM User_Details WHERE email = ?`;
    try {
        const result = await queryAsync(query, [email]);
        return result;
    }
    catch (e) {
        console.log(e);
        throw new Error(e);
    }
}
exports.login = login;
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
exports.generateOTP = generateOTP;
