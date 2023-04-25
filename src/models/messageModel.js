const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name_sender: { type: String, required: true },
    email_sender: { type: String, required: true },
    message: { type: String, required: true },
    time: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    seen: {type: Boolean, default: false}
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
