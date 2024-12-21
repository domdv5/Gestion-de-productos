import express from "express";
import { getProducts, deleteProduct, addProduct } from "../controllers/productsController.js";

const router = express.Router();



// Ruta para obtener productos
router.get("/", getProducts);

// Ruta para agregar un producto
router.post("/", addProduct);

// Ruta para eliminar un producto
router.delete("/:id", deleteProduct);



export default router;
