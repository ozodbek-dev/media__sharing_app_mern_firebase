import Photo from "../models/Photo.js";
import User from "../models/User.js";
import createError from "../utils/createError.js";

const addPhoto = async (req, res, next) => {
  console.log(req.body);
  const newPhoto = new Photo({ userId: req.user.id, ...req.body });
  try {
    const savedImg = await newPhoto.save();
    res.status(201).json(savedImg);
  } catch (err) {
    next(err);
  }
};
const updatePhotos = async (req, res, next) => {
  const img = await Photo.findById(req.params.id).select({ userId: 1 });
  if (!img) return next(createError(404, "Image Not found!"));
  if (img.userId === req.user.id) {
    try {
      const updetedImg = await Photo.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updetedImg);
    } catch (err) {
      next(err);
    }
  } else
    return next(createError(400, " You can update only your photos' details!"));
};
const deletePhoto = async (req, res, next) => {
  const img = await Photo.findById(req.params.id).select({ userId: 1 });
  if (!img) return next(createError(404, "Image Not found!"));
  if (img.userId === req.user.id) {
    try {
      await Photo.findByIdAndDelete(req.params.id);

      res.status(200).json("Image Deleted Successfull");
    } catch (err) {
      next(err);
    }
  } else return next(createError(400, " You can delete only your photos!"));
};
const addView = async (req, res, next) => {
  try {
    const img = await Photo.findById(req.params.id);
    if (!img) return next(createError(404, "The Photo Do not found!"));
    const updatedImg = await Photo.findByIdAndUpdate(
      req.params.id,
      {
        $inc:{views:1}
      },
      { new: true }
    );
    res.status(200).json(updatedImg);
  } catch (err) {
    next(err);
  }
};
const getSinglePhoto = async (req, res, next) => {
  try {
    const img = await Photo.findById(req.params.id);

    if (!img) return next(createError(404, "The Photo Do not found!"));

    res.status(200).json(img);
  } catch (err) {
    next(err);
  }
};

const getRandomPhotos = async (req, res, next) => {
  try {
    const images = await Photo.aggregate([{$sample:{size:20}}]);
    res.status(200).json(images)
  } catch (err) {
    next(err);
  }
};

const getTrandPhotos = async (req, res, next) => {
  try {
   const images = await Photo.find().sort({likes:-1}).limit(20);
   res.status(200).json(images)
  } catch (err) {
    next(err);
  }
};
const getSubscrobedPhotos = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Photo.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};
const getPhotosByTags = async (req, res, next) => {
  const tags = req.query.tags;

  try {
    const images = await Photo.find({tags:{$in:tags}}).limit(20);
    res.status(200).json(images)
  } catch (err) {
    next(err);
  }
};
const searchPhoto = async (req, res, next) => {
  const query = req.query.q;
  try {
    const images = await Photo.find({title:{$regex:query,$options:"i"}})
    res.status(200).json(images)
  } catch (err) {
    next(err);
  }
};

export {
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
};
