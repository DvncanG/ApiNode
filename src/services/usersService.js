const users = require('../data/user.json')//Importo los datos: el json ehroes de los datos lo he desestructurado para acceder a él directamente
const saveToJSON = require('../data/user')

const getAllUsers = () => {
    return users
}

const getOneUser = (id) => {
    return users.find(user => user.id == id)
}

const postUser = (newUser) => {
    users.unshift(newUser)//Añado el nuevo heroe al inicio del array
    saveToJSON({ users: users })//Lo escribo con la misma estructura que tenía el json original
    return newUser
}

const putUser = (userUpdated, idUser) => {
    const newUser = users.map((user) => user.id == idUser ? userUpdated : user)//Creo un nuevo array con los mismos datos que el anterior menos los del heroe actualizado, que serán los que me ha pasado por el body
    saveToJSON({ users: newUser })//Lo escribo con la misma estructura que tenía el json original
    return userUpdated
}

const patchUser = (userUpdated, idUser) => {
    const newUser = users.map((user) => user.id == idUser ? { ...user, ...UserUpdated } : user)//Creo un nuevo array con los mismos datos que el anterior menos los del heroe actualizado, que serán los que me ha pasado por el body
    saveToJSON({ users: newUser })//Lo escribo con la misma estructura que tenía el json original
    return userUpdated
}

const deleteUser = (id) => {
    const allUsers = users.filter(user => user.id != id)
    saveToJSON({ users: allUsers })//Lo escribo con la misma estructura que tenía el json original
    return allUsers

}


module.exports = {
    getAllUsers,
    getOneUser,
    postUser,
    deleteUser,
    putUser,
    patchUser,
}