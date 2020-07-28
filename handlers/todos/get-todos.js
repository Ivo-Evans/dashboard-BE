const todoModels = require("../../db/models/todos.js")

function getTodos(req, res, next) {
    const { users_id } = req
    todoModels.getTodos({users_id})
    .then(result => {
        console.log(result)
        res.send(result)
    })
    .catch(next)
}

module.exports = getTodos