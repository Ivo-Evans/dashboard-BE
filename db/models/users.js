const db = require("../connection.js")

const userModels = {
    postUser: ({username, email, password_slug}) => {
        return db
            .query("INSERT INTO USERS(username, email, password_slug) VALUES($1, $2, $3)", [username, email, password_slug])
            .catch(err => {
                throw new Error(err)
            })
    },
    // getUser will be used for internal operations like logging in, not get requests
    getUser: () => {
        
    }
}

module.exports  = userModels