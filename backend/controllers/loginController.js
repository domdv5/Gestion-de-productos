import { authenticateUser, fetchUserData } from "../services/dummyApi.js";

export const getUser = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    try {
        const userData = await fetchUserData(token); // Llama al servicio
        res.json(userData); // Envía los datos al frontend
    } catch (error) {
        console.error("Error al obtener datos del usuario:", error.message);
        res.status(500).json({ error: "Error al obtener los datos del usuario" });
    }
};



export const loginUser = async (req, res) => {


    const { username, password } = req.body;

    try {
        const data = await authenticateUser(username, password);
        res.json(data); // Enviar el token y los datos al frontend
    } catch (error) {
        console.error("Error en el login:", error.message);
        res.status(500).json({ error: error.message });
    }
};
