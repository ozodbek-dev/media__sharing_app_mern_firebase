import Comment from "../models/Comment.js";
import createError from "../utils/createError.js";

const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id, fileId:req.params.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

const upadteComment = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if(!comment) return next(createError(404, "This comment don not found!"))
  if(req.user.id === comment.userId){
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id,{
      $set:req.body
    },{new:true})

    res.status(200).json(updatedComment);
  } catch (err) {
    next(err);
  }}
  else return next(createError(400,"You can only update only your comment!"))
};

const deleteComment = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if(!comment) return next(createError(404, "This comment don not found!"))
  if(req.user.id === comment.userId){
  try {
   await Comment.findOneAndDelete(req.params.id)
    res.status(200).json("Comment has been deleted successfully!");
  } catch (err) {
    next(err);
  }}
  else return next(createError(400,"You can only delete only your comment!"))
};

const getSingleComment = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if(!comment) return next(createError(404, "This comment don not found!"))
  try {
   const comment = await Comment.findById(req.params.id)
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};
const getFileComments = async (req, res, next) => { 
  try {
    const comments = await Comment.find({fileId:req.params.fileId})
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

export {
  addComment,
  upadteComment,
  deleteComment,
  getFileComments,getSingleComment
};
