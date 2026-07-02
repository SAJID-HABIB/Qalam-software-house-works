const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
{
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

// Prevent a user from liking the same post multiple times
likeSchema.index({ user: 1, blogPost: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);