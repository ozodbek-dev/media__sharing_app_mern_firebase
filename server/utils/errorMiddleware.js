const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || " Something Went Wrong!";
  return res.status(status).json({
    sucess: false,
    status,
    message,
  });
};

export default errorHandler;