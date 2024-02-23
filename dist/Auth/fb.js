"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookAuth = void 0;
const passport_facebook_1 = require("passport-facebook");
const facebookAuth = () => {
    return new passport_facebook_1.Strategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/login/auth/facebook/redirect" || process.env.FB_URL,
        profileFields: ["id", "displayName", "photos", "email"],
        enableProof: true,
    }, function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    });
};
exports.facebookAuth = facebookAuth;
