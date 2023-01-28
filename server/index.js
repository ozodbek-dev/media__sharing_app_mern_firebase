import dotenv from "dotenv";
import express from 'express';
import connectToDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import commentsRoutes from './routes/commentsRoutes.js'
import songsRoutes from './routes/songsRoutes.js'
import videosRoutes from './routes/videosRoutes.js'
import imagesRoutes from './routes/photosRoutes.js'
import errorHandler from './utils/errorMiddleware.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
dotenv.config({path:"./config/config.env"})

const app = express();

//middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json());

//routes
app.use('/api/auth',authRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/videos',videosRoutes)
app.use('/api/comments',commentsRoutes)
app.use('/api/songs',songsRoutes)
app.use('/api/images',imagesRoutes)


//error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port,err=>{
  if(!err){
    console.log(process.env.MONGO_URI)
    connectToDB(process.env.MONGO_URI);
    console.log("Server has been started >>>> ");
  }
  else{
    throw err;
  }
})
