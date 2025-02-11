import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; // ki mai apen server se user k ander ki cookie access kar paa u aur uski cookies set bhi kar paau basically crud operation perform kar paau

const app = express()
// all function available in the express

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
// generally use for meddleware, configuration

// three major configuration found in any web project
app.use(express.json({limit: "16kb"})) // data from
app.use(express.urlencoded({extended: true, limit: "16kb"})) // data from url
app.use(express.static("public")) // in this we put file for public access and wheneve required
app.use(cookieParser())

export{ app }