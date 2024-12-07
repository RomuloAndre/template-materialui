import { Box, CssBaseline, Drawer, List, ListItem, ListItemText, Typography, AppBar, Toolbar } from "@mui/material";
import ImageGallery from "./pages/Galeria/ImageGallery";
import TodoList from "./pages/ToDoList/TodoList"; //
import QRCodeReader from "./pages/QRCode/QRCodeReader";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import React, { useState } from "react";

const drawerWidth = 240;

const App = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const renderContent = () => {
    switch (selectedOption) {
      case 1:
        return <ImageGallery />;
      case 2:
        return <TodoList />;
      case 3:
        return (
          <div>
            <Header />
            <ListarTarefa />
          </div>
        );
      case 4:
        return <QRCodeReader />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Menu de Testes de Componentes Material UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button onClick={() => setSelectedOption(1)}>
              <ListItemText primary="Galeria de Imagens" />
            </ListItem>
            <ListItem button onClick={() => setSelectedOption(2)}>
              <ListItemText primary="Lista de Compras" />
            </ListItem>
            <ListItem button onClick={() => setSelectedOption(3)}>
              <ListItemText primary="Listagem de Tarefas" />
            </ListItem>
            <ListItem button onClick={() => setSelectedOption(4)}>  {/* Opção para QRCodeReader */}
              <ListItemText primary="Leitor de QR Code" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default App;
