import {Router} from 'express'

const productRoute = Router()

productRoute.get("/", (req,res) => {
  res.send("Hello world")
})
productRoute.get("/:id",(req,res)=>{
    const {id}=req.params
    console.log(id);
    res.send("Id recuperado"+id)
})
productRoute.post("/",(req,res)=>{
    res.send("Mensage")
})
productRoute.put("/:id",(req,res)=>{
    res.send("Id products")
})
productRoute.delete("/:id",(req,res)=>{
    res.send("Eliminar")
})
export default productRoute;