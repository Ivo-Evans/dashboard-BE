const db = require("../connection.js")

const photoModels = {
    postPhoto: ({users_id, url}) => {
        return db.query("INSERT INTO photos(users_id, url) VALUES($1, $2)", [users_id, url])
    }
}

module.exports = photoModels