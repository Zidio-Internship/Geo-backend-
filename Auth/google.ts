import { Strategy as Google } from "passport-google-oauth20";
import { login, signup } from "../utils/hepler";
export const GoogleStrategy = () => {
  return new Google(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL:  process.env.GOOGLE_URL as string ,
    },
    async function (
      _accessToken: any,
      _refreshToken: any,
      profile: { id: any },
      done: (arg0: any, arg1: any) => any
    ) {
	await signup(profile.id,profile.displayName,0)
        console.log(profile)
        done(null,profile)
    }
  );
};
