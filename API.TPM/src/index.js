const express = require('express');
const app = express();
const mongoose = require("mongoose");

//Importar ruta de usuario
const userRoutes = require("./routes/user");
// Utilizar las rutas de usuario
app.use('/users', userRoutes);

//Importar ruta de paciente
const patientRoutes = require("./routes/patient");

require("dotenv").config();

const port = process.env.PORT || 9005;
app.listen(port, () => console.log('Servidor OK',port));

//middleware
app.use(express.json());
app.use('/api',userRoutes);

app.use(express.json());
app.use('/api',patientRoutes);

//routes

app.get("/",(req,res)=> {
    res.send("API en construccion")
});

//Conexion a la base de datos
mongoose.connect(process.env.BDTPM_URI)
.then(() => console.log("conexion establecida"))
.catch((error)=> console.log(error));
