import express from "express";
import http from "http";
import {Server} from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        method:["GET","POST"],
    },
});

let codeRoom = {};

io.on("connection",(socket) => {
    console.log("user connected",socket.id);

    socket.on("joinRoom",(roomId)=>{
        console.log(`user with id ${socket.id} joined room ${roomId}`);
        socket.join(roomId);

        socket.emit("shareCode",codeRoom[roomId] || "// Write your code here!");
    })

    socket.on("codeChange",({roomId,data})=>{
        codeRoom[roomId] = data;
        io.in(roomId).emit("shareCode",data);
    })  
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
    })
})

export {app,server};