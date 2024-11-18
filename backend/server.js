import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,"frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

server.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
});