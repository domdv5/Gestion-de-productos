import { fetchProducts, removeProduct, addProductToDummyAPI, searchProducts } from "../services/dummyApi.js";

export const getProducts = async (req, res) => {
    const { limit = 10, skip = 0, sortBy = "title", order = "asc", q = "" } = req.query;


    try {
        let data;

        if (q) {
            data = await searchProducts(q);
        } else {
            data = await fetchProducts({ limit, skip, sortBy, order });
        }

        res.json(data); // Enviar la respuesta al frontend
    } catch (error) {
        console.error("Error al obtener productos:", error.message);
        res.status(500).json({ error: "Error al obtener productos" });
    }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await removeProduct(id);
        res.json(result);
    } catch (error) {
        console.error("Error al eliminar producto:", error.message);
        res.status(500).json({ error: "Error al eliminar producto" });
    }
};

export const addProduct = async (req, res) => {
    const { title, price, description } = req.body;

    try {
        const newProduct = await addProductToDummyAPI({ title, price, description });
        res.json(newProduct); // Devuelve el producto recién agregado al frontend
    } catch (error) {
        console.error("Error al agregar producto:", error.message);
        res.status(500).json({ error: "Error al agregar producto" });
    }
};
