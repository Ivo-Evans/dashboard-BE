const db = require("../connection.js")

const userModels = {
    postUser: ({username, email, password_slug}) => {
        return db
            .query("INSERT INTO users(username, email, password_slug) VALUES($1, $2, $3) RETURNING id, username", [username, email, password_slug])
    },
    getUser: ({username}) => {
        return db
            .query("SELECT id, email, password_slug FROM USERS where username = $1", [username])
            .then(res => {
                return res.rows[0]
            })        
    }
}

module.exports  = userModels