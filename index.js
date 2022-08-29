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
  let nameUser = req.body.username;
  let findAvatar = dataUsers.find((value) => value.username === nameUser);

  const newTweet = 
  {
    username: nameUser,
    tweet: req.body.tweet,
    avatar: findAvatar
  };

  tweetsUser.push(newTweet);
  res.send('OK');  
});

server.get("/tweets", (req, res) => {

  let lastTweets = tweetsUser.slice(-10);
  res.send(lastTweets);
});

server.listen(port, () => console.log(`Conectado na porta ${port}`));