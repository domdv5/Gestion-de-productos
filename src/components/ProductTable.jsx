import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TablePagination,
    Paper,
    Button,
} from "@mui/material";

const ProductTable = ({
    products,
    total,
    page,
    rowsPerPage,
    sortBy,
    order,
    onPageChange,
    onRowsPerPageChange,
    onSortChange,
    onDelete,
}) => {
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={sortBy === "title"}
                                    direction={order}
                                    onClick={() =>
                                        onSortChange(
                                            "title",
                                            sortBy === "title" && order === "asc" ? "desc" : "asc"
                                        )
                                    }
                                >
                                    Nombre
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="left">
                                Descripción
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={sortBy === "price"}
                                    direction={order}
                                    onClick={() =>
                                        onSortChange(
                                            "price",
                                            sortBy === "price" && order === "asc" ? "desc" : "asc"
                                        )
                                    }
                                >
                                    Precio
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.title}</TableCell>
                                <TableCell align="left" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                                    {product.description}
                                </TableCell>
                                <TableCell align="right">${product.price}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => onDelete(product.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={total}
                rowsPerPage={rowsPerPage}
                page={page - 1}
                onPageChange={(e, newPage) => onPageChange(newPage + 1)}
                onRowsPerPageChange={(e) => onRowsPerPageChange(parseInt(e.target.value, 10))}
            />
        </Paper>
    );
};

export default ProductTable;
