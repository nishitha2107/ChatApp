// routes/auth.routes.js
import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // Use POST method for signup
router.post("/login", login);   // Use POST method for login
router.post("/logout", logout); // Use POST method for logout

export default router;
