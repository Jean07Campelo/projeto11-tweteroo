import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
const port = 5000;

const dataUsers = [];

const tweetsUser = [
  {
    username: dataUsers.username,
    tweet: "first post",
  },
];

server.post("/sign-up", (req, res) => {
  dataUsers.push(req.body);
  res.send("OK");
});

server.post("/tweets" , (req, res) => {
  tweetsUser.push(req.body);
  res.send('OK');  
})

server.listen(port, () => console.log(`Conectado na porta ${port}`));