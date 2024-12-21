import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.js";
import productRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/login", loginRoutes);
app.use("/user", loginRoutes);
app.use("/products", productRoutes);

// Iniciar el servidor
app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
