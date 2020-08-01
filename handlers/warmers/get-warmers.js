const warmerModels = require("../../db/models/warmers")

function getTodos(req, res, next) {
    const { users_id } = req
    warmerModels.getWarmers({users_id})
    .then(result => {
        const count = result.reduce((acc, el) => {
            if (acc[el.warmer] === undefined) {
                acc[el.warmer] = 0
            } else {
                acc[el.warmer]++
            }
            return acc
        }, {})
        res.send(count)
    })
    .catch(next)
}

module.exports = getTodos