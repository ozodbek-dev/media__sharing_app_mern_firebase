import express from "express";
import {
  addComment,
  upadteComment,
  deleteComment,
  getFileComments,getSingleComment
} from "../controllers/commentCtrl.js";
import verifyToken from "../utils/verifyToken.js";
const router = express.Router();

router.post("/add/:id",verifyToken, addComment);
router.put("/update/:id",verifyToken, upadteComment);
router.delete("/del/:id",verifyToken, deleteComment);
router.get("/all/:fileId", getFileComments);
router.get("/:id", getSingleComment);

export default router;
