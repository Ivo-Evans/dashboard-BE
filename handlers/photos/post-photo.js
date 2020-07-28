const cloudinary = require("cloudinary").v2;
const photoModels = require("../../db/models/photos.js");

function postPhoto(req, res, next) {
  const { tempFilePath } = req.files.file;
  if (!tempFilePath) {
    const err = new Error("Could not derive a file from the http request");
    err.status = 400;
    return next(err);
  }
  console.log(req.users_id);
  cloudinary.uploader
    .upload(tempFilePath, { tags: req.files.file.name })
    .then((image) => {
      const { users_id } = req;
      const { url } = image;
      photoModels
        .postPhoto({ users_id, url })
        .then((result) => {
          res.status(200).send({ url });
        })
        .catch((err) => {
          return next(err);
        });
    })
    .catch((err) => {
      return next(err);
    });
}

module.exports = postPhoto;
