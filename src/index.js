import "./connect.js";

import express from "express";
import ProductsRoute from "./routes/products/ProductsRoute.js";
const app = express();
app.use(express.json())
app.use("/products",ProductsRoute);
app.listen(3000);
