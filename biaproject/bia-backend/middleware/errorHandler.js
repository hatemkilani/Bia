// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500; // Default to 500 if no specific status code is set
    res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
    });
  };
  
  module.exports = errorHandler;
  