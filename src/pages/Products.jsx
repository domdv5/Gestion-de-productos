import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductForm";
import { getUserData } from "../services/authService";
import { fetchProducts, addProduct, deleteProduct } from "../services/productService";
import { Box, Typography, TextField } from "@mui/material";

const Products = () => {
    const [userData, setUserData] = useState(null);
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortBy, setSortBy] = useState("title");
    const [order, setOrder] = useState("asc");
    const [search, setSearch] = useState("");

    const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token en localStorage.");
            return;
        }

        try {
            const user = await getUserData(token);
            setUserData(user);
        } catch (err) {
            console.error("Error al obtener los datos del usuario:", err.message);
        }
    };

    const fetchAndSetProducts = async () => {
        try {
            const data = await fetchProducts(page, rowsPerPage, sortBy, order, search);
            setProducts(data.products);
            setTotalProducts(data.total);
        } catch (err) {
            console.error("Error al obtener productos:", err.message);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reinicia a la primera página al buscar
    };

    const handleAddProduct = async (product) => {
        try {
            const newProduct = await addProduct(product);
            setProducts((prev) => [...prev, newProduct]); // Actualiza la lista de productos
        } catch (err) {
            console.error("Error al agregar producto:", err.message);
        }
    };


    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            fetchAndSetProducts();
        } catch (err) {
            console.error("Error al eliminar producto:", err.message);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
        setPage(1);
    };

    const handleSortChange = (field, direction) => {
        setSortBy(field);
        setOrder(direction);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        fetchAndSetProducts();
    }, [page, rowsPerPage, sortBy, order, search]);

    return (
        <Box>
            {userData && <Header username={userData.username} email={userData.email} />}
            <Box
                sx={{
                    p: 3,
                    backgroundColor: "#f5f5f5",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, textAlign: "center", color: "black" }}>
                    Lista de Productos
                </Typography>

                {/* Barra de búsqueda */}
                <TextField
                    label="Buscar productos"
                    variant="outlined"
                    value={search}
                    onChange={handleSearch}
                    fullWidth
                    sx={{ mb: 3 }}
                />

                {/* Modal para agregar producto */}
                <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                    <AddProductModal onProductAdded={handleAddProduct} />
                </Box>

                {/* Tabla de productos */}
                <ProductTable
                    products={products}
                    total={totalProducts}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    sortBy={sortBy}
                    order={order}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    onSortChange={handleSortChange}
                    onDelete={handleDeleteProduct}
                />
            </Box>
        </Box>
    );
};

export default Products;
