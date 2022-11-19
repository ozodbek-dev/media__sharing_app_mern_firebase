import express from "express";
import {
  searchVideo,
  getVideosByTags,
  getSubscrobedVideos,
  getRandomVideos,
  getSingleVideo,
  getTrandVideos,
  addView,
  updateVideo,
  deleteVideo,
  addVideo,
} from "../controllers/videosCtrl.js";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();

//CRUD VIDEO
router.post("/add",verifyToken, addVideo);
router.put("/update/:id",verifyToken, updateVideo);
router.delete("/del/:id",verifyToken, deleteVideo);

//views
router.put("/view/:id", addView);

//get Video or videos
router.get("/find/:id", getSingleVideo);
router.get("/random", getRandomVideos);
router.get("/trand", getTrandVideos);
router.get("/sub",verifyToken, getSubscrobedVideos);
router.get("/tags", getVideosByTags);
router.get("/search", searchVideo);


export default router;
