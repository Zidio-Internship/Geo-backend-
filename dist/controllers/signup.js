"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.loginUser = exports.signupUser = void 0;
const hepler_1 = require("../utils/hepler");
async function signupUser(req, res) {
    try {
        const { email, fullname } = req.body;
        const otp = (0, hepler_1.generateOTP)();
        await (0, hepler_1.signup)(email, fullname, otp);
        return res.status(201).json({ message: 'success' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
}
exports.signupUser = signupUser;
async function loginUser(req, res) {
    try {
        const { email } = req.body;
        const details = await (0, hepler_1.login)(email);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
}
exports.loginUser = loginUser;
async function verifyOTP(req, res) {
    const { otp, email } = req.body;
    const details = await (0, hepler_1.login)(email);
    if (otp == details.otp) {
        details.otp = null;
        return res.status(200).json({ message: 'success' });
    }
    return res.status(404).json({ message: 'invalid code' });
}
exports.verifyOTP = verifyOTP;
