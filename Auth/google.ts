import { Strategy as Google } from "passport-google-oauth20";

export const GoogleStrategy = () => {
  return new Google(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (
      _accessToken: any,
      _refreshToken: any,
      profile: { id: any },
      done: (arg0: any, arg1: any) => any
    ) {
        console.log(profile)
        done(null,profile)
    }
  );
};
