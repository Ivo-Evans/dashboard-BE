const todoModels = require("../../db/models/todos.js")

function postTodo(req, res, next) {
    const { users_id, body } = req
    console.log(body, users_id)
    res.status(200).send()
    todoModels.postTodo({...body, users_id})
}

module.exports = postTodo