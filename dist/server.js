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
const passport_1 = __importDefault(require("passport"));
const authentication_1 = __importDefault(require("./routers/authentication"));
const http_status_codes_1 = require("http-status-codes");
const fb_1 = require("./Auth/fb");
const google_1 = require("./Auth/google");
const express_session_1 = __importDefault(require("express-session"));
const FB = (0, fb_1.facebookAuth)();
const google = (0, google_1.GoogleStrategy)();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use((0, express_session_1.default)({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
}));
server.use((0, morgan_1.default)("dev"));
server.use(passport_1.default.initialize());
server.use(passport_1.default.session());
passport_1.default.use('facebook', FB);
passport_1.default.use('google', google);
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
server.use("/login", authentication_1.default);
server.get("/home", (req, res) => {
    res.send("Working").status(http_status_codes_1.StatusCodes.OK);
});
server.get("/failed", (req, res) => {
    res.send("Failed").status(http_status_codes_1.StatusCodes.OK);
});
const PORT = 8080 || process.env.PORT;
(async () => {
    (0, db_1.ConnectSQL)();
    const app = server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    process.on("SIGINT", () => {
        console.log("Shutting down...");
        app.close(() => {
            console.log("Server closed.");
            process.exit(0);
        });
    });
})();
