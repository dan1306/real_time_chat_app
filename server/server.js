const express = require("express");
const app = express();
const http = require("http");
// const { Server } = require("socket.io");
const server = http.createServer(app);

const cors = require("cors");

app.use(cors());

const io = require("socket.io")(server, {
  cors: {},
});
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173/",
//     methods: ["GET", "POST"],
//   },
// });

io.on("connection", function (socket) {
  console.log(`a user connected ${socket.id}`);
  // whenever we receive a 'message' we log it out
  //   socket.on("message", function (message) {
  //     console.log(message);
  //   });
    socket.on('send_message', (data) => {
      console.log(data)
      data.id = socket.id
        socket.broadcast.emit('recieve_message', data)
    })
});

app.get("/", (req, res) => {
  console.log("hit");
  res.send({ message: "hi" }).status(200);
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
