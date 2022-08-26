import express from "express";
import cors from 'cors';

const server = express();
server.use(cors());
const port = 5000;

const dataUser = 
{
    "username": "Corvus",
    "avatar": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/63739491/1800"
};

const tweetsUser = [
{
    username: dataUser.username,
    tweet: 'first post'
},
];

server.listen(port, () => console.log(`Conectado na porta ${port}`));