import { Router } from "express";
import User from "../models/User.js";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as UserController from "../controller/UserController.js";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.index
);
export default router;
