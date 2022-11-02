const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");

app.use(cors());

//react client is 3000
//C# client is 3003
//nodejs server is on 3001

 const server = http.createServer(app);
const io = new Server(server,{
    port:3001,
    cors:{
        origin:"http://localhost:3000",
        methods:["Get","POST"], 
    },
}); 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

io.on("connection", (socket)=>{
    //measure server is running
    console.log('user connected: '+ socket.id);

//get message from client
    /* socket.on("send_message",(data)=>{
        console.log(data);
    }); */
    
    console.log("send data");
    setInterval(() => {
        var uid1 = getRandomInt(200);
        var uid2 = getRandomInt(500);
        const data = [
            {"id":uid1, "name":"food"+uid1,"price":getRandomInt(100)},
            {"id":uid2, "name":"food"+uid2,"price":getRandomInt(100)},
        ];
        console.log(data);
        io.emit("receive_message",data);
    }, 1000);

  });

  server.listen(3001 ,()=>{
    server.closeAllConnections();
    console.log("SERVER IS RUNNING");
});



