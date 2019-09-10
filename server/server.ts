import express from "express";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

const port = 5000;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', function(req, res, next){
    res.set("Access-Control-Allow-Origin", '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    res.send('Hello world')
})


server.get('/users', homeController.users);


server.post('/users/create', homeController.create);

server.listen(port, function () {
    console.log('Example app listening on port %d!', port)
});