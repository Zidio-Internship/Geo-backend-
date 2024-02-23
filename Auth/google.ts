import { Strategy as Google } from "passport-google-oauth20";

export const GoogleStrategy = () => {
  return new Google(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:8080/login/auth/google/redirect" || process.env.GOOGLE_URL as string ,
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
