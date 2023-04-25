const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    isAdmin: { type: Boolean, default: false },
    theme: { type: Number, default: 1 },
    status: { type: Boolean, default: true },
    create: { type: Boolean, default: false },
    slug: { type: String },
    avatar: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    full_name: { type: String, required: true },
    social: [{
      name: {type: String},
      link: {type: String}
    }],
    about: { type: String },
    job_position: { type: String },
    birtday: { type: String },
    address: { type: String },
    phone: { type: String },
    study: { type: String },
    degree: { type: String },
    classification: { type: String },
    gpa: { type: Number, default: 0 },
    cv: { type: String },
    experience: [
      {
        time: { type: String },
        title: { type: String },
        sub: { type: String },
      },
    ],
    education: [
      {
        time: { type: String },
        title: { type: String },
        sub: { type: String },
      },
    ],
    skill: [Number],
    hard_skill: { type: String },
    soft_skill: { type: String },
    project: [
      {
        name: { type: String },
        type: { type: String },
        image: { type: String },
        responsibility: { type: String },
        website_functionality: { type: String },
        demo: [
          {
            title: { type: String },
            video: { type: String },
          },
        ],
        link: { type: String },
        account: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
