import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ username, email }) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1976d2",
                width: "100vw",
                left: 0,
                margin: 0,
                padding: 0,
            }}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Bienvenido, {username || "Usuario"}
                </Typography>
                <Typography variant="body2">
                    {email || "No se encontró el email"}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
