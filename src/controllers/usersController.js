const usersService = require("../services/usersService")

const getAllUsers = async (req, res) => {
    await res.json(usersService.getAllUsers())
}

const getOneUser = async (req, res) => {
    await res.json(usersService.getOneUser(req.params.id))
}

const postUser = async (req, res) => {
    usersService.postUser(req.body)
    res.status(200).json(req.body)
}

const putUser = (req, res) => {
    usersService.putUser(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patchUser = (req, res) => {
    usersService.putUser(req.body, req.params.id)
    res.status(200).json(req.body)
}

const deleteUser = async (req, res) => {
    await res.json(usersService.deleteUser(req.params.id))
}

module.exports = {
    getAllUsers,
    getOneUser,
    postUser,
    deleteUser,
    putUser,
    patchUser,
}