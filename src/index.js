//*Importamos express, body-parser y cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Desde app haremos todo
const app = express()
const uuid = require('uuid')

const apiRouter = require("./routes/v1/appRoutes")//Importo el appRouter, que contiene las demás rutas

//Le indico al puerto que escuche:

//Conversión a json os datos que nos envían para post, put, patch, etc...lo hago mediante middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use("/jsonplaceholder/v1", apiRouter)//Añadimos un middleware con use: le indicamos que permita peticiones en la ruta del primer parámetro que será la url de los endpoint y el segundo será añadir las rutas que hay dentro del enrutador apiRouter

app.get("/prueba", (req, res) => { res.send(`Get en ${req.url}`) })

//*Lanzamos el servidor en nuestro puerto 3000 de localhost:
const PORT = process.env.PORT || 3000
app.listen(PORT, () => { console.log(`Servidor Funcionando en el puerto ${PORT}`) })
