const todoModels = require("../db/models/todos.js")

function getTodos(req, res, next) {
    todoModels.getTodos()
    .then(result => {
        console.log(result)
        res.send(result)
    })
    .catch(next)
}

module.exports = getTodos