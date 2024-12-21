// Obtener la lista de productos
export const fetchProducts = async (page, rowsPerPage, sortBy = "title", order = "asc", search = "") => {
    const skip = (page - 1) * rowsPerPage;
    const url = search
        ? `http://localhost:4000/products?q=${search}` // Endpoint de búsqueda
        : `http://localhost:4000/products?limit=${rowsPerPage}&skip=${skip}&sortBy=${sortBy}&order=${order}`;


    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error al obtener productos.");
    }

    return await response.json();
};



// Eliminar un producto por su ID
export const deleteProduct = async (id) => {
    const response = await fetch(`${"http://localhost:4000/products"}/${id}`, { method: "DELETE" });
    if (!response.ok) {
        throw new Error("Error al eliminar el producto.");
    }
    return await response.json(); // Devuelve los detalles del producto eliminado
};

export const addProduct = async (product) => {
    const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error("Error al agregar producto.");
    }

    return await response.json();
};

export const searchProducts = async (query) => {
    const url = `https://dummyjson.com/products/search?q=${query}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error al buscar productos en DummyJSON.");
    }

    const data = await response.json();
    return data;
};



