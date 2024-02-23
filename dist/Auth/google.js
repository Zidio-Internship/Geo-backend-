"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const passport_google_oauth20_1 = require("passport-google-oauth20");
const GoogleStrategy = () => {
    return new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/google/callback",
    }, function (_accessToken, _refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    });
};
exports.GoogleStrategy = GoogleStrategy;
