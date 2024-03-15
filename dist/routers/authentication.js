"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const signup_1 = require("../controllers/signup");
const router = (0, express_1.Router)();
router.get("/auth/facebook", passport_1.default.authenticate("facebook", {
    scope: "email",
}));
router.get("/auth/facebook/redirect", passport_1.default.authenticate("facebook", {
    failureRedirect: "/failed",
    successRedirect: "/home",
}));
/*
    Google Redirect */
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile"] }));
router.get("/auth/google/redirect", passport_1.default.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    res.redirect("/home");
});
router.post("/login", signup_1.loginUser);
router.post("/signup", signup_1.signupUser);
router.post("/verify", signup_1.verifyOTP);
exports.default = router;
