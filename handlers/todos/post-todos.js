const todoModels = require("../../db/models/todos.js")

function postTodo(req, res, next) {
    const { users_id, body } = req
    todoModels.postTodo({...body, users_id})
        .then(() => {
            res.status(200).send()
        })
        .catch(next)
}

module.exports = postTodo