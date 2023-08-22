import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./product/productRoute.js";
import orderRoute from "./order/orderRoute.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

app.use("/api", productRoute);
app.use("/api", orderRoute);

//db connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
