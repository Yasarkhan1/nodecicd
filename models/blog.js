const mongoose = require('mongoose'), Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    blog_name: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User'

    }

})


module.exports = mongoose.model('blogs', blogSchema)