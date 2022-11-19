import express from "express";
import {
  searchPhoto,
  getPhotosByTags,
  getSubscrobedPhotos,
  getRandomPhotos,
  getSinglePhoto,
  getTrandPhotos,
  addView,
  updatePhotos,
  deletePhoto,
  addPhoto,
} from "../controllers/photosCtrl.js";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();

//CRUD PHOTO
router.post("/add",verifyToken, addPhoto);
router.put("/update/:id",verifyToken, updatePhotos);
router.delete("/del/:id",verifyToken, deletePhoto);

//views
router.put("/view/:id", addView);

//get PHOTO or PHOTOS
router.get("/find/:id", getSinglePhoto);
router.get("/random", getRandomPhotos);
router.get("/trand", getTrandPhotos);
router.get("/sub",verifyToken, getSubscrobedPhotos);
router.get("/tags", getPhotosByTags);
router.get("/search", searchPhoto);


export default router;
