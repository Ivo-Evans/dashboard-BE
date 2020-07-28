const db = require("../connection.js")

const todoModels = {
    // edit this to take a user ID guarded authentication middleware
    getTodos: () => {
        return db
            .query(`SELECT * FROM todos`)
            .then(res => {
                return res
            })
            .then(res => res.rows)
    }
}

module.exports = todoModels