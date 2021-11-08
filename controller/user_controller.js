const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.createUser = (req, res) => {

    const { name, mobile, password, email } = req.body;
    // UserModel.findOne({ email: email }).then((user) => {
    //     if (!user) {
    //     }else{
    //     }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({ status: 0, message: err })
        } else {
            bcrypt.hash(password, salt, (err1, hash) => {
                if (err1) {
                    return res.status(501).json({ status: 0, message: err })
                }
                const user = new UserModel({
                    name: name,
                    mobile: mobile,
                    password: hash,
                    email: email
                })
                user.save((err2, users) => {
                    if (err2) {
                        return res.status(502).json({ status: 0, message: err2 })
                    } else {
                        return res.status(200).json({ message: 'User create Sucessfullys.....' })
                    }
                })
            })
        }
    })

}
exports.userLogin = (req, res) => { 
    const { email, password } = req.body;
    console.log(req.body);
    UserModel.findOne({ email: email }).then((user) => {
        if (!user) {
            return res.status(401).json({
                errors: 'user not found'
            })
        } else {
            bcrypt.compare(password, user.password, function (err, match) {
                if (!match) {
                    return res.status(401).json({ errors: 'email and password did not match...' })
                } else {

                    let payload = {
                        _id: user._id,
                        email: user.email
                    }
                    const token = jwt.sign(payload, 'xyz', { expiresIn: '28day' });

                    let data = {
                        jwt_token: token
                    }
                    let condtion = {
                        _id: user._id
                    }
                    UserModel.findOneAndUpdate(condtion, data, { new: true }).then((response) => {
                        return res.status(200).json({
                            status: 1,
                            message: "Successfully Logged in ...",
                            user: response

                        }).catch((err) => {
                            return res.status(500).json({ status: 1, message: 'something was rong...s' })
                        })
                    })
                }
            })
        }
    })
}
exports.getUserProfile = (req, res) => {
    UserModel.findOne({"_id":req.body._id}).then((data)=>{              
        return res.status(200).json({
            status: 1,
            message: "get profile ...",
            user: data
        })
    })
}
