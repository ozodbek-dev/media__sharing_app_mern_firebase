import Video from "../models/Video.js";
import createError from "../utils/createError.js";
import User from "../models/User.js";
const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video do not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findOneAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    }
  } catch (err) {
    next(err);
  }
};

const deleteVideo = async (req, res, next) => {
  const video = await Video.findById(req.params.id);

  if (!video) return next(createError(404, "This video do not fould!"));
  if (req.user.id === video.userId) {
    try {
      await Video.findOneAndDelete(req.params.id);

      res.status(200).json("The video Deleted Successfully :) ");
    } catch (err) {
      next(err);
    }
  } else return next(createError(400, "You can delete only your video!"));
};

const addView = async (req, res, next) => {
  const video = await Video.findById(req.params.id);
  if (!video) return next(createError(404, "This video do not fould!"));
  try {
    await Video.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    res.status(200).json("The view Has been increased!");
  } catch (err) {
    next(err);
  }
};
const getSingleVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video do not found!"));
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

const getRandomVideos = async (req, res, next) => {
  try {
    const randomVideos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(randomVideos);
  } catch (err) {
    next(err);
  }
};

const getTrandVideos = async (req, res, next) => {
  try {
    const trandVideos = await Video.find().sort({ likes: -1 });
    res.status(200).json(trandVideos);
  } catch (err) {
    next(err);
  }
};

const getSubscrobedVideos = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

const getVideosByTags = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

const searchVideo = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(20);

    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export {
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
};
