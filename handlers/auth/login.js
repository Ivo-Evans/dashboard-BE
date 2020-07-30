const userModels = require("../../db/models/users.js")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    const { username, password } = req.body
    if (!(username && password)) {
        const err = new Error("Username and password are both required")
        err.statusCode = 400
        next(err)
     }

    userModels.getUser({username})
        .then(user => {
            bcrypt.compare(password, user.password_slug)
                .then(result => {
                    if (!result) {
                        err = {statusCode: 400}
                        throw new Error(err)
                    }
                    
                    const token = jwt.sign(
                        { users_id: user.id,
                        username },
                        process.env.SECRET,
                        { expiresIn: '24h' },
                    );

                    res.status(200).send({token})

                })

        })
        .catch(next)
}

module.exports = login