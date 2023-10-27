/*const http = require('http');

const server = http.createServer();
server.on('connection', (socket => {
   console.log('new connection');
}));

server.listen(3000);
console.info('Server is running on port 3000');*/

//zad 4
const express = require('express');
const preQuestions = require('./questions').preQuestions;
const port = require('./config');

const app = express();

app.get('/questions', (request, response) => {
    response.send(preQuestions);
});

app.get('/questions/:id', (request, response) => {
    const id = request.params.id;

    if (id <= preQuestions.length) {
        response.send(preQuestions[id-1]);
    } else {
        response.status(404).send('Question not found');
    }
    
});


app.listen(port.port, function () {
    console.info(`Server is running at port ` + port.port);
});