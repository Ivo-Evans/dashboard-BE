
const userModels = require("../db/models/users.js")

function postUser(req, res, next) {
    userModels.postUser(req.body)
        .then(() => {
            res.status(200).send()
        })
        .catch(next)
}
module.exports = postUser