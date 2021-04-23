const express = require("express");
const socketio = require("socket.io")
const http = require("http");
const cors = require("cors");
const app = express();
const connections = {};

// Cross Origin for Anagular Application.
app.use(cors());

const server = http.createServer(app);
const io = socketio(server, {
    cors : {
        origin : "*"
    }
});

io.on("connection", (client)=>{

    client.on("login", (data)=>{
        connections[data.username] = client;

    });

    client.on("chat", (data)=>{

        // Send to All people who have joined the chat.
        client.broadcast.emit("message", data)
    })

})

server.listen(3800);
console.log("Application started at 3800")