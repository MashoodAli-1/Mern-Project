import { Router } from "express";
import Transaction from "../models/Transaction.js";
import passport from "passport";
import * as TrasactionController from "../controller/TransactionController.js";
const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("hello world");
  }
);

router.post("/transaction", TrasactionController.create);

router.get(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TrasactionController.index
);

router.delete("/transaction/:id", TrasactionController.destroy);

router.patch("/transaction/:id", TrasactionController.update);

router.get("/test", TrasactionController.test);

export default router;
