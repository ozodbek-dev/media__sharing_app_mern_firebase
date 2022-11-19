import Song from "../models/Song.js";
import User from "../models/User.js";
import createError from "../utils/createError.js";

const addSong = async (req, res, next) => {
  const newSong = new Song({ userId: req.user.id, ...req.body });
  try {
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    next(err);
  }
};

const updateSong = async (req, res, next) => {
  const song = await Song.findById(req.params.id).select({ userId: 1 });
  if (!song) return next(createError(404, "The Song Do Not Found!"));
  if (req.user.id === song.userId) {
    try {
      const updatedSong = await Song.findOneAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSong);
    } catch (err) {
      next(err);
    }
  } else
    return next(createError(403, "You can update only songs which you added!"));
};

const deleteSong = async (req, res, next) => {
  const song = await Song.findById(req.params.id).select({ userId: 1 });
  if (!song) return next(createError(404, "The song do not found"));
  if (song.userId === req.user.id) {
    try {
      await Song.findOneAndDelete(req.params.id);
      res.status(200).json("The Song has been Deleted successfull");
    } catch (err) {
      next(err);
    }
  } else
    return next(
      createError(400, " You can delete only your songs which you added!")
    );
};

const addListen = async (req, res, next) => {
  const song = await Song.findById(req.params.id).select({ _id: 1 });
  if (!song) return next(createError(404, "The song do not found"));

  try {
    await Song.findOneAndUpdate(
      req.params.id,
      {
        $inc: { listens: 1 },
      },
      { new: true }
    );
    res.status(200).json("Lintens has been increased!");
  } catch (err) {
    next(err);
  }
};

const getSingleSong = async (req, res, next) => {
  const song = await Song.findById(req.params.id);
  if (!song) return next(createError(404, "The song do not found"));
  try {
    res.status(200).json(song);
  } catch (err) {
    next(err);
  }
};

const getRandomSongs = async (req, res, next) => {
  try {
    const randomSongs = await Song.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(randomSongs);
  } catch (err) {
    next(err);
  }
};

const getTrandSongs = async (req, res, next) => {
  try {
    const trandSongs = await Song.find().sort({ likes: -1 });
    res.status(200).json(trandSongs);
  } catch (err) {
    next(err);
  }
};

const getSubscrobedSongs= async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Song.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

const getSongByTags = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const songs = await Song.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(songs);
  } catch (err) {
    next(err);
  }
};
const searchSong = async (req, res, next) => {
  const query = req.query.q;
  try {
    const songs = await Song.find({
      title: { $regex: query, $options: "i" }
    }).limit(20);
    res.status(200).json(songs);
  } catch (err) {
    next(err);
  }
};

export {
  searchSong,
  getSongByTags,
  getSubscrobedSongs,
  getRandomSongs,
  getSingleSong,
  getTrandSongs,
  addListen,
  updateSong,
  deleteSong,
  addSong,
};
