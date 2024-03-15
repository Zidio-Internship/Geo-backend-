"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const passport_google_oauth20_1 = require("passport-google-oauth20");
const hepler_1 = require("../utils/hepler");
const GoogleStrategy = () => {
    return new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_URL,
    }, async function (_accessToken, _refreshToken, profile, done) {
        await (0, hepler_1.signup)(profile.id, profile.displayName, 0);
        console.log(profile);
        done(null, profile);
    });
};
exports.GoogleStrategy = GoogleStrategy;
