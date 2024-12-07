import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Galeria de Imagens
      </Typography>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button
          variant="contained"
          component="label"
          color="primary"
        >
          Upload de Imagens
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImageUpload}
          />
        </Button>
      </Box>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper elevation={3} sx={{ position: "relative", p: 1 }}>
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
              <Button
                variant="contained"
                color="error"
                size="small"
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255, 0, 0, 0.8)",
                }}
                onClick={() => handleRemoveImage(index)}
              >
                Remover
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
