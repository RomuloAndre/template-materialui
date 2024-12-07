import React from "react";
import { Box, Button, TextField, Typography, Container, Paper } from "@mui/material";

const Login = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                    >
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
