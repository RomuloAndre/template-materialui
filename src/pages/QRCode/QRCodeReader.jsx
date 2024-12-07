import React, { useState } from "react";
import { Box, Typography, Button, Input, CircularProgress } from "@mui/material";
import { QrReader } from "react-qr-reader"; 
import jsQR from "jsqr";

const QRCodeReader = () => {
  const [scanResult, setScanResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isCameraMode, setIsCameraMode] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error("Erro ao ler o QR Code:", err);
    setIsScanning(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgElement = document.createElement("img");
        imgElement.src = reader.result;
        imgElement.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = imgElement.width;
          canvas.height = imgElement.height;
          ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, canvas.width, canvas.height);
          if (code) {
            setScanResult(code.data);
          } else {
            alert("QR Code não encontrado na imagem.");
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Leitor de QR Code
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Button
          variant={isCameraMode ? "contained" : "outlined"}
          onClick={() => setIsCameraMode(true)}
          sx={{ mr: 2 }}
        >
          Usar Câmera
        </Button>
        <Button
          variant={!isCameraMode ? "contained" : "outlined"}
          onClick={() => setIsCameraMode(false)}
        >
          Fazer Upload de Imagem
        </Button>
      </Box>

      {isCameraMode ? (
        <Box sx={{ mb: 2, position: "relative", maxWidth: "400px", margin: "0 auto" }}>
          {isScanning && <CircularProgress />}
          <QrReader
            delay={300}
            style={{
              width: "100%",           
              height: "auto",          
              maxWidth: "400px",       
              margin: "0 auto",        
            }}
            onError={handleError}
            onScan={handleScan}
          />
        </Box>
      ) : (
        <Box sx={{ mb: 2 }}>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
      )}

      {scanResult ? (
        <Typography variant="body1" color="success.main">
          Resultado: {scanResult}
        </Typography>
      ) : (
        <Typography variant="body2" color="text.secondary">
          Escaneie um QR Code ou faça upload de uma imagem para ver o resultado.
        </Typography>
      )}
    </Box>
  );
};

export default QRCodeReader;
