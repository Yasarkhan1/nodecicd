const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: 0, message: 'Unauthorized Access...' })
    }
    jwt.verify(token, 'xyz', (error, decoded) => {
        if (error) {
            return res.status(401).json({ status: 0, message: 'Unauthorized Access...' })
        }
        if (decoded) {
            UserModel.findOne({ "_id": decoded._id }).then((data) => {

                req.body.decoded = decoded;
                return next();
            })
        }
    })
}