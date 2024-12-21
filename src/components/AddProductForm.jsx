import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";

const AddProductModal = ({ onProductAdded }) => {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({ title: "", price: "", description: "" });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await onProductAdded(product); // Llama la función para agregar producto
            setProduct({ title: "", price: "", description: "" }); // Limpia el formulario
            handleClose(); // Cierra el modal
        } catch (err) {
            console.error("Error al agregar producto:", err.message);
        }
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen} sx={{ mb: 1 }}>
                Agregar Producto
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 2,
                        p: 4,
                        width: "90%",
                        maxWidth: 400,
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                        Agregar Producto
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Título"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            required
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Precio"
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleChange}
                            required
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Descripción"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                            multiline
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button type="submit" variant="contained" color="primary">
                                Guardar
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default AddProductModal;
