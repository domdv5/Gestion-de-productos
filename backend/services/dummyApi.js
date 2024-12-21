import fetch from "node-fetch";

export const authenticateUser = async (username, password) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Credenciales inválidas. Por favor verifica tu usuario y contraseña.");
    }

    return await response.json();
};

export const fetchUserData = async (token) => {


    const response = await fetch("https://dummyjson.com/auth/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los datos del usuario desde DummyJSON.");
    }

    return await response.json();
};


// Llamada para obtener productos
export const fetchProducts = async ({ limit = 10, skip = 0, sortBy = "title", order = "asc" }) => {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`;

    const response = await fetch(url);

    if (!response.ok) {
        console.error("Error en DummyJSON:", response.statusText);
        throw new Error("Error al obtener productos desde DummyJSON.");
    }

    const data = await response.json();
    return data;
};




// Llamada para eliminar un producto
export const removeProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" });
    if (!response.ok) {
        throw new Error("Error al eliminar producto.");
    }
    return await response.json();
};

// Llamada para agregar un producto
export const addProductToDummyAPI = async (product) => {
    const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error("Error al agregar producto en DummyJSON");
    }

    return await response.json();
};

// Llamada para buscar productos
export const searchProducts = async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!response.ok) {
        throw new Error("Error al buscar productos en DummyJSON.");
    }
    return await response.json();
};


