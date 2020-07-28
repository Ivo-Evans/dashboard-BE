const photoModels = require("../../db/models/photos.js")

function getPhotos(req, res, next) {
    const { users_id } = req
    photoModels.getPhotos({users_id})
    .then(result => {
        res.send(result)
    })
    .catch(next)
}

module.exports = getPhotos