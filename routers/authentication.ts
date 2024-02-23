import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["user_friends", "manage_pages"],
  })
);


router.get(
  "/auth/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

export default router;
