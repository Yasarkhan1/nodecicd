const BlogModel = require('../models/blog');
var ObjectId = require('mongodb').ObjectID;

exports.createBlog = (req, res) => {
    const blog = new BlogModel({
        blog_name: req.body.blog_name,
        userId: req.body.decoded._id
    })
    blog.save((err, users) => {
        if (err) {
            return res.status(400).json({ errors: err.message })
        } else {
            return res.status(200).json({
                message: "Blog create sucessfully..."
            })
        }
    })
}
exports.deleteBlog = (req, res) => {
    BlogModel.findByIdAndDelete(req.body._id, (err, data) => {
        if (err) {
            return res.status(400).json({ errors: err.message });
        } else {
            return res.status(200).json({
                message: "Blog delete sucessfully..."
            })
        }
    })
}
exports.updateBlog = (req, res) => {
    BlogModel.findOneAndUpdate({ _id: req.body._id }, { blog_name: req.body.blog_name }, { new: true }, (err, data) => {
        if (err) {
            return res.status(400).json({ errors: err.message });
        } else {
            return res.status(200).json({
                message: "Blog update sucessfully..."
            })
        }
    })
}
exports.getAllBlog = (req, res) => {
    BlogModel.find({ userId: new ObjectId(req.body._id) }, (err, data) => {
        if (err) {
            return res.status(400).json({ errors: err.message });
        } else {
            return res.status(200).json({
                message: "Blog get sucessfully...",
                data:data
            })
        }
    })
}