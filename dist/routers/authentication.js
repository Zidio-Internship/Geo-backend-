"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
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
router.get("/auth/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
    res.redirect("/");
});
exports.default = router;
