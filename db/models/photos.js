const db = require("../connection.js")

const photoModels = {
    postPhoto: ({users_id, url}) => {
        return db.query("INSERT INTO photos(users_id, url) VALUES($1, $2)", [users_id, url])
    },
    getPhotos: ({users_id}) => {
        return db
            .query("SELECT id, url FROM photos where users_id = $1", [users_id])
            .then(res => res.rows)
    }
}

module.exports = photoModels