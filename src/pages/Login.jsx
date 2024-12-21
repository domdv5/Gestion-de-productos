import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    CssBaseline,
    Alert,
    Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);


        try {
            // Enviar credenciales al backend
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: credentials.username,
                    password: credentials.password,
                }),
            });

            if (!response.ok) {
                throw new Error("Credenciales inválidas. Por favor, verifica tu usuario y contraseña.");
            }

            const data = await response.json();


            // Guardar el token en localStorage
            localStorage.setItem("token", data.accessToken);

            // Redirigir a la página de productos
            navigate("/products");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <Card
                sx={{
                    padding: 4,
                    boxShadow: 3,
                    textAlign: "center",
                    borderRadius: 2,
                    width: "100%",
                    maxWidth: 400,
                    zIndex: 10,
                }}
            >
                <CssBaseline />
                <Typography component="h1" variant="h5" textAlign="center" sx={{ mb: 3 }}>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Nombre de Usuario"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    {error && (
                        <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            mb: 2,
                            padding: 1,
                            fontSize: "1rem",
                            textTransform: "none",
                            backgroundColor: "#1976d2",
                            "&:hover": {
                                backgroundColor: "#115293",
                            },
                        }}
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </Card>
        </Box>
    );
};

export default Login;
