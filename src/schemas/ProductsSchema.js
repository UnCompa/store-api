import {Schema, model} from 'mongoose'
//Crear el la esquema de datos
const productSchema = new Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  imagen: String
}, {timestamps: true})
// Definir model con una schema
export const Product = model("Product",productSchema);