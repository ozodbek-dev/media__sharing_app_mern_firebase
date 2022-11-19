import jwt from "jsonwebtoken";

import createError from "./createError.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token && (req.user != null))
    return createError(403, "You are Not authenticated!. Please, Signin first");
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;

    next();
  });
};


export default verifyToken;