
const userModels = require("../db/models/users.js")
const bcrypt = require("bcryptjs")

function signup(req, res, next) {
    if (!req.body.password) {
        err.statusCode = 400
        throw new Error(err)
     }
    bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(req.body.password, salt))
        .then(password_slug => {
            userModels.postUser({...req.body, password_slug})
                .then(() => {
                    res.status(200).send()
                })
                .catch(next)
        })
}
module.exports = signup