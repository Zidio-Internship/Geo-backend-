import { Strategy as FacebookStrategy } from "passport-facebook";
import { signup } from "../utils/hepler";
export const facebookAuth = () => {
  return new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID as string,
      clientSecret: process.env.FACEBOOK_APP_SECRET as string,
      callbackURL:
      process.env.FB_URL as string,
      profileFields: ["id", "displayName", "photos", "email"],
      enableProof: true,
    },
   async function (accessToken, refreshToken, profile, done) {
	   if (profile){
		await signup(profile.emails[0].value,profile.displayName,0)
	   }
      console.log(profile);
      done(null, profile);
    }
  );
};
