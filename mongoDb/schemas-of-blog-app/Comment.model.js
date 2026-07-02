const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
{
    comment: {
        type: String,
        required: true,
        trim: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogPost",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Comment", commentSchema);