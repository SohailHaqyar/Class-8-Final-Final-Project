const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const OrganizationSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  industry: {
    type: String,
  },
  keyword: {
    type: ["String"],
    required: true,
  },
  services: {
    type: ["String"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teammembers: [
    {
      name: {
        type: String,
        requried: true,
      },
      bio: {
        type: String,
        requried: true,
      },
      avatar: {
        type: String,
        requried: true,
      },
      title: {
        type: String,
        requried: true,
      },
    },
  ],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

OrganizationSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const Organization = mongoose.model("Organization", OrganizationSchema);
module.exports = Organization;
