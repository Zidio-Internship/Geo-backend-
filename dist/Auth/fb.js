"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookAuth = void 0;
const passport_facebook_1 = require("passport-facebook");
const hepler_1 = require("../utils/hepler");
const facebookAuth = () => {
    return new passport_facebook_1.Strategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FB_URL,
        profileFields: ["id", "displayName", "photos", "email"],
        enableProof: true,
    }, async function (accessToken, refreshToken, profile, done) {
        if (profile) {
            await (0, hepler_1.signup)(profile.emails[0].value, profile.displayName, 0);
        }
        console.log(profile);
        done(null, profile);
    });
};
exports.facebookAuth = facebookAuth;
