const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apiGateway = require('./app/routes/apiGateway')

const app = express();
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/ciid', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Permitir credenciales (cookies, cabeceras de autenticación, etc.)
}));

// Usar el API Gateway
app.use('/api', apiGateway);

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
