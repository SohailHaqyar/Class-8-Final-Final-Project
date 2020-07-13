const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    }, // what you did would be good if we wanted uploading images
    body: {
      type: String,
      required: true, // the ! was supposed to symbolize required
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
