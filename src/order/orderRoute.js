import express from "express";
import { createOrder, verifyPayment } from "./orderController.js";
const router = express.Router();

router.post("/orders", createOrder);

router.get("/verifyPayment", verifyPayment);

export default router;
