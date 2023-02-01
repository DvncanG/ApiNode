const usersroutes = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const usersController = require("../../controllers/usersController")


//Acciones de heroes llamando a los métodos de su controlador:
usersroutes.get("/", usersController.getAllUsers)
usersroutes.get("/:id", usersController.getOneUser)
usersroutes.post("/", usersController.postUser)
usersroutes.put("/:id", usersController.putUser)
usersroutes.patch("/:id", usersController.patchUser)
usersroutes.delete("/:id", usersController.deleteUser)

module.exports = usersroutes