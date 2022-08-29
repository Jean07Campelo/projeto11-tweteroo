import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
const port = 5000;

const dataUsers = [
  {
    username: "mutano",
    avatar:
      "http://techjambo.com.br/wp-content/uploads/2021/11/Mutano-Jovens-Titas.png",
  },
];

const tweetsUser = [{ 
  username: "mutano", 
  tweet: "first tweet", 
  avatar: dataUsers.avatar 
},
];

server.post("/sign-up", (req, res) => {
  dataUsers.push(req.body);
  res.send("OK");
});

server.post("/tweets" , (req, res) => {
  tweetsUser.push(req.body);
  res.send('OK');  
});

server.get("/tweets", (req, res) => {

  const tweets = 
  {
    username: dataUsers.username,
    avatar: dataUsers.avatar,
    tweet: 'teste back'
  }

  tweetsUser.push(tweets);
  res.send(tweetsUser);

});

server.listen(port, () => console.log(`Conectado na porta ${port}`));