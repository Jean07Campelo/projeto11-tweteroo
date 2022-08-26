import express from "express";
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
const port = 5000;

const dataUser = [];

const tweetsUser = [
{
    username: dataUser.username,
    tweet: 'first post'
},
];

server.post('/sign-up', (req, res) => dataUser.push(req.body));

server.listen(port, () => console.log(`Conectado na porta ${port}`));