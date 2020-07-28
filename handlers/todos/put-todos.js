const todoModels = require("../../db/models/todos.js")

function putTodo(req, res, next) {
    const { users_id, body } = req
    todoModels.putTodo({...body, users_id})
        .then(() => {
            res.status(200).send()
        })
        .catch(next)
}

module.exports = putTodo