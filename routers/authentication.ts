import { Router, Request, Response } from "express";
import passport from "passport";
import { signupUser,loginUser,verifyOTP } from "../controllers/signup";
const router = Router()

router.get(
	"/auth/facebook",
	passport.authenticate("facebook", {
		scope: "email",
	})
);

router.get(
	"/auth/facebook/redirect",
	passport.authenticate("facebook", {
		failureRedirect: "/failed",
		successRedirect: "/home",
	})
);
/*
	Google Redirect */
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] })
);

router.get(
	"/auth/google/redirect",
	passport.authenticate("google", { failureRedirect: "/login" }),
	(req: Request, res: Response) => {
		res.redirect("/home");
	}
);


router.post("/login",loginUser)
router.post("/signup",signupUser)
router.post("/verify",verifyOTP)

export default router;
