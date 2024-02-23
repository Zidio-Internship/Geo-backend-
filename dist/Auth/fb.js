"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookAuth = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = require("passport-facebook");
const facebookAuth = () => {
    return new passport_facebook_1.Strategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/redirect",
        profileFields: ["id", "displayName", "photos", "email"],
        enableProof: true,
    }, function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    });
};
exports.facebookAuth = facebookAuth;
exports.default = passport_1.default;
