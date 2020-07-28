
const userModels = require("../../db/models/users.js")
const bcrypt = require("bcryptjs")

function signup(req, res, next) {
    const {password, email, username} = req.body
    if (!(password && email && username)) {
        const err = new Error("password, email and username are required")
        err.code = 400
        return next(err)
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