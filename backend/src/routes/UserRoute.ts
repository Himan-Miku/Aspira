import { Router } from "express";
import { Login, SignUp } from "../controllers/UserController";
import { Runner } from "../controllers/GeminiController";

let router = Router();

router.route("/login").post(Login);
router.route("/signup").post(SignUp);
router.route("/getgay").get(Runner);

export default router;
