const todoModels = require("../../db/models/todos.js")

function postTodo(req, res, next) {
    const { users_id, body } = req
    if (!body.todo) {
        const err = new Error("todo content is required.")
        err.code = 400
        return next(err)
    }
    todoModels.postTodo({...body, users_id})
        .then(() => {
            res.status(200).send()
        })
        .catch(next)
}

module.exports = postTodo