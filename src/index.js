// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

//  import mongoose from "mongoose";
//  import {DB_NAME} from "./constants";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
connectDB();
// Another way

/*
 import express from "express";
 const app = express()
// 1 way
//  function connectDB(){}

//  connectDB()

// 2 way iifi

(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", ()=>{
      console.log('Error:', error);
      throw error
    })

    app.listen(process.env.PORT, ()=> {
      console.log(`App is listening on port ${process.env.PORT}`);    
    })  
  } catch(error){
    console.error("ERROR: ", error)
    throw error
  }
})()

*/
