import { Router } from "express";
import {changePass, login} from "../controller/AuthController";
import { checkJwt } from "../middlewares/jwt";

const router = Router();

//login
router.post("/login", [checkJwt], login);

//change password
router.post("/change-password", [checkJwt], changePass);

export default router;
