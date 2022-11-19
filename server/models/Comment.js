import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fileId:{
      type:String,
      required:true,
    },
    desc: {
      type: String,
      required: true,
    },
    likes:{
      type:[String],
      default:[]
    },
    dislikes:{
      type:[String],
      default:[]
    }
  },
  { timestamps: true }
);

export default model("Comment", commentSchema);
