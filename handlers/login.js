const userModels = require("../db/models/users.js")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    const { username, password } = req.body
    if (!(username && password)) {
        err.statusCode = 400
        throw new Error(err)
     }

    userModels.getUser({username})
        .then(user => {
            console.log(user)
            bcrypt.compare(password, user.password_slug)
                .then(result => {
                    if (!result) {
                        err = {statusCode: 400}
                        throw new Error(err)
                    }
                    const token = jwt.sign(
                        { username: username },
                        process.env.SECRET,
                        { expiresIn: '24h' },
                    );

                    res.status(200).send(token)

                })

        })
}

module.exports = login