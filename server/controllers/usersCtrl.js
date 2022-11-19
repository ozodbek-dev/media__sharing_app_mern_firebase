import User from "../models/User.js";
import Video from "../models/Video.js";
import Song from "../models/Song.js";
import Photo from "../models/Photo.js";
import Comment from "../models/Comment.js";
import createError from "../utils/createError.js";

const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else return next(createError(403, " You can update ony your account!"));
};

const deleteUser = async (req, res, next) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    path: "/",
    domain: "localhost",
  });

  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Your Account has been Deleted successfully!");
    } catch (err) {
      next(err);
    }
  } else return next(createError(403, " You can delete only your acocunt!"));
};

const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user) return next(createError(404, "User do not found!"))
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription Successfully");
  } catch (err) {
    next(err);
  }
};

const unsubScribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });

    res.status(200).json("Unsubscription Successfully");
  } catch (err) {
    next(err);
  }
};

const likeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.id;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    },{new:true})
    res.status(200).json("The Video has been liked");;
  } catch (err) {
    next(err);
  }
};

const dislikeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.id;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    },{new:true});
    res.status(200).json("The Video has been disliked");
  } catch (err) {
    next(err);
  }
};

const likeSong = async (req, res, next) => {
  const userId = req.user.id;
  const songId = req.params.id;
  try {
    await Song.findOneAndUpdate(songId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    },{new:true});
    res.status(200).json("The Song Has been liked!");
  } catch (err) {
    next(err);
  }
};

const dislikeSong = async (req, res, next) => {
  const userId = req.user.id;
  const songId = req.params.id;
  try {
    await Song.findByIdAndUpdate(songId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    },{new:true});
    res.status(200).json("The Song Has been disliked!");
  } catch (err) {
    next(err);
  }
};

const likePhoto = async (req, res, next) => {
  const userId = req.user.id;
  const photoId = req.params.id;
  try {
    await Photo.findByIdAndUpdate(photoId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    },{new:true});
    res.status(200).json("The Photo has been liked!");
  } catch (err) {
    next(err);
  }
};

const dislikePhoto = async (req, res, next) => {
  const userId = req.user.id;
  const photoId = req.params.id;
  try {
    await Photo.findByIdAndUpdate(photoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    },{new:true});
    res.status(200).json("The Photo has been disliked!");
  } catch (err) {
    next(err);
  }
};


const likeComment = async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.params.commentId;
  try {
  const comment = await Comment.findByIdAndUpdate(commentId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    },{new:true});

    res.status(200).json({
      msg:"comment has been liked",
      comment
    });
  } catch (err) {
    next(err);
  }
};

const dislikeComment = async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.params.commentId;
  console.log(commentId)
  try {
    const comment = await Comment.findByIdAndUpdate(commentId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    },{
      new:true
    });

    res.status(200).json({
      msg:"comment has been disliked",
      comment
    });
  } catch (err) {
    next(err);
  }
};

export {
  dislikePhoto,
  likePhoto,
  dislikeSong,
  likeSong,
  dislikeVideo,
  likeVideo,
  unsubScribe,
  subscribeUser,
  getSingleUser,
  deleteUser,
  updateUser,likeComment,
  dislikeComment
};
