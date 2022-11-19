import express from "express";
import {
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
  updateUser,
  likeComment,
  dislikeComment
} from "../controllers/usersCtrl.js";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();

//update user
router.put("/update/:id", verifyToken, updateUser);
//delete user
router.delete("/del/:id", verifyToken, deleteUser);

router.get("/find/:id", getSingleUser);

//subscribe and unsubscribe to a user;
router.put("/sub/:id", verifyToken, subscribeUser);
router.put("/unsub/:id", verifyToken, unsubScribe);

//like and dislike to a video;
router.put("/vid/like/:id", verifyToken, likeVideo);
router.put("/vid/dislike/:id", verifyToken, dislikeVideo);

//like and dislike to a song;
router.put("/song/like/:id", verifyToken, likeSong);
router.put("/song/dislike/:id", verifyToken, dislikeSong);

//like and dislike to a song;
router.put("/img/like/:id", verifyToken, likePhoto);
router.put("/img/dislike/:id", verifyToken, dislikePhoto);
//like and dislike to comment;
router.put("/comment/like/:commentId", verifyToken, likeComment);
router.put("/comment/dislike/:commentId", verifyToken, dislikeComment);

export default router;
