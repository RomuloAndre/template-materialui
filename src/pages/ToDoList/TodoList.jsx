import React, { useState } from "react";
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Lista de Compras
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <TextField
                        label="Nova Item"
                        variant="outlined"
                        fullWidth
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddTask}>
                        Adicionar
                    </Button>
                </Box>
                <List>
                    {tasks.map((t, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton edge="end" color="error" onClick={() => handleDeleteTask(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={t} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default TodoList;
