import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hadhedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hadhedPassword });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return createError(404, "User Not Found!");

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isCorrectPassword) return createError(400, "Wrong Credentials!");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
const facebookAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromFacebook: true,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};

const githubAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGithub: true,
      });
      const savedUser = await newUser.save();

      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};

// logout
const logout = async (req, res, next) => {
  try {
    res.clearCookie('access_token').status(200).json({success:true})
  } catch (err) {
    next(err);
  }
};
export { signup, githubAuth, facebookAuth, googleAuth, signin , logout};
