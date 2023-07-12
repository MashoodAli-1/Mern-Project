import { Router } from "express";
import transactionRoutes from "./transaction.js";
import AuthApi from "./AuthApi.js";
import UserApi from "./UserApi.js";

const router = Router();
router.use("/", transactionRoutes);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
