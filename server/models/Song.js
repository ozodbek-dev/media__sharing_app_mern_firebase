import {Schema, model } from 'mongoose';

const SongSchema = new Schema({
    userId:{
      type:String,
      requred:true
    },
    author:{
      type:String,
      required:true
    } ,
    title:{
      type:String,
      required:true,
    }, 
    desc:{
      type:String,
      required:true
    }, 
    songUrl:{
      type:String,
      required:true
    },
    imgUrl:{
      type:String,
      required:true
    }, 
    listens:{ 
      type:Number,
      default:0
    }, 
    tags:{
      type:[String], 
      default:[]
    }, 
    likes:{
      type:[String],
      default:[]
    }, 
    dislikes:{
      type:[String], 
      default:[]
    }
}, {timestamps:true});


export default model("Song", SongSchema);
