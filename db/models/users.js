const db = require("../connection.js")

const userModels = {
    postUser: ({username, email, password_slug}) => {
        return db
            .query("INSERT INTO USERS(username, email, password_slug) VALUES($1, $2, $3)", [username, email, password_slug])
            .catch(err => {
                throw new Error(err)
            })
    },
    getUser: () => {
        
    }
}

module.exports  = userModels