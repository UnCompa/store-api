import "./connect.js";
import cors from 'cors'
import express from "express";
import ProductsRoute from "./routes/products/ProductsRoute.js";
const app = express();
app.use(cors({
  origin: "*"
}))
app.get("/", (req,res) => {
  res.send("Bienvenido")
})
app.use(express.json())
app.use("/products",ProductsRoute);
app.listen(3000);
