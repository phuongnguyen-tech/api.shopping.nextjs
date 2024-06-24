import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes";
import customerRoutes from "./routes/customerRoutes";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import orderDetailRoutes from "./routes/orderDetailRoutes";
import orderRoutes from "./routes/orderRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/orderDetails", orderDetailRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/auth", authRoutes);

export default app;
