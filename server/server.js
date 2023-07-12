const express = require("express")
const app = express();
const http = require("http")
const {Server} = require("socket.io");
const cors = require('cors')

app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST']
    }
})

app.get("/", (req, res) => {
  console.log("hit");
  res.send("hi");
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
