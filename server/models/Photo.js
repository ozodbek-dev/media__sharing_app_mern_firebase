import {Schema, model } from 'mongoose';

const photoSchema = new Schema({
    userId:{
      type:String,
      requred:true
    } , 
    title:{
      type:String,
      required:true,
    }, 
    desc:{
      type:String,
      required:true
    }, 
    imgUrl:{
      type:String,
      required:true
    }, 
    views:{ 
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


export default model("Photo", photoSchema);
