import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes";
import customerRoutes from "./routes/customerRoutes";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use("/api", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/auth", authRoutes);

export default app;
