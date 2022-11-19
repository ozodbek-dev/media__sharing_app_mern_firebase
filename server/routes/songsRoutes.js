import express from "express";
import {
  searchSong,
  getSongByTags,
  getSubscrobedSongs,
  getRandomSongs,
  getSingleSong,
  getTrandSongs,
  addListen,
  updateSong,
  deleteSong,
  addSong
} from "../controllers/songsCtrl.js";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();

//CRUD SONG
router.post("/add",verifyToken, addSong);
router.put("/update/:id",verifyToken, updateSong);
router.delete("/del/:id",verifyToken, deleteSong);

//views
router.put("/listen/:id", addListen);

//get SONG or SONGS
router.get("/find/:id", getSingleSong);
router.get("/random", getRandomSongs);
router.get("/trand", getTrandSongs);
router.get("/sub",verifyToken, getSubscrobedSongs);
router.get("/tags", getSongByTags);
router.get("/search", searchSong);


export default router;
