const db = require("../connection.js")

const todoModels = {
    // edit this to take a user ID guarded by authentication middleware
    getTodos: () => {
        return db
            .query("SELECT * FROM todos")
            .then(res => res.rows)
    }
}

module.exports = todoModels