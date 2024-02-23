import { Strategy as FacebookStrategy } from "passport-facebook";
export const facebookAuth = () => {
  return new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID as string,
      clientSecret: process.env.FACEBOOK_APP_SECRET as string,
      callbackURL:
        "http://localhost:8080/login/auth/facebook/redirect" || process.env.FB_URL as string,
      profileFields: ["id", "displayName", "photos", "email"],
      enableProof: true,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  );
};

