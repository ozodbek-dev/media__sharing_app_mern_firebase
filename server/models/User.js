import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  img: {
    type: String,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  subscribedUsers: {
    type: [String],
  },
  fromGoogle: {
    type: Boolean,
    default: false,
  },
  fromFaceBook: {
    type: Boolean,
    default: false,
  },
  fromGithub: {
    type: Boolean,
    default: false,
  },
}, {timestamps:true});


export default model("User", userSchema);