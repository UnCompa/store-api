import { Router } from "express";
import { Product } from "./../../schemas/ProductsSchema.js";
const productRoute = Router();

productRoute.get("/", async (req, res) => {
  const allProducts = await Product.find();
  console.log(allProducts);

  res.json(allProducts);
});
productRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("Id recuperado" + id);
});
productRoute.post("/", async (req, res) => {
  const data = req.body
  const product = new Product({
    nombre: data.nombre,
    precio: data.precio,
    stock: data.stock,
    imagen:
      data.imagen,
  });
  const productSave = await product.save();
  console.log(productSave);

  res.send("Mensage");
});
productRoute.put("/:id", (req, res) => {
  res.send("Id products");
});
productRoute.delete("/:id", (req, res) => {
  res.send("Eliminar");
});
export default productRoute;
