//Ejecuto express.Router()
const apiroutes = require('express').Router();

const usersRouter = require("./usersRoutes")

apiroutes.use("/users", usersRouter)


module.exports = apiroutes //Exporto el módulo