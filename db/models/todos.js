const db = require("../connection.js")

const todoModels = {
    getTodos: ({users_id}) => {
        return db
            .query("SELECT * FROM todos where users_id = $1", [users_id])
            .then(res => res.rows)
    },
    postTodo: ({users_id, todo, completed = false}) => {
        return db.query("INSERT INTO todos(users_id, todo, completed) VALUES($1, $2, $3)", [users_id, todo, completed])
    },
    putTodo: ({users_id, id, completed, todo}) => {
        return db.query(`UPDATE todos
        SET
        todo = $1,
        completed = $2
        WHERE id = $3 AND users_id = $4
        `, [
            todo,
            completed,
            id,
            users_id
        ])
    }
}

module.exports = todoModels