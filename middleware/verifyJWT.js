const jwt = require("jsonwebtoken")
const secret = process.env.SECRET


function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
		const error = new Error("Authorization header is required");
		error.code = 400;
        return next(error);
    } else {
        const token = authHeader.replace('Bearer ', '');
		try {
			// if verification fails JWT throws an error, hence the try/catch
			const tokenData = jwt.verify(token, secret);
			req.users_id = tokenData.users_id;
			return next();
		} catch {
			const error = new Error('Unauthorized: invalid token');
			error.code = 400;
			return next(error);
		}
    }

}

module.exports = verifyJWT