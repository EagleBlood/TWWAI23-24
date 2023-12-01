const express = require('express');
const path = require('path');
const config = require('./config');
const chartData = require('./chartData');
const app = express();

const dataChart = chartData;
const chart = JSON.stringify(dataChart);



let users = [
    {
        id: 0,
        name: 'user1',
        password: '123',
        email: '123@wp.pl'
    }, {
        id: 1,
        name: 'user2',
        password: '123',
        email: '123@wp.pl'
    }, {
        id: 2,
        name: 'user3',
        password: '123',
        email: '123@wp.pl'
    }, {
        id: 3,
        name: 'user4',
        password: '123',
        email: '123@wp.pl'
    }, {
        id: 4,
        name: 'user5',
        password: '123',
        email: '123@wp.pl'
    }
];

app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile);

app.listen(config.port, () => {
    console.log('Server listening on port %s', config.port);
});



app.get('/', (req, res) => {
    res.render(__dirname + '\\index.html');
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/continents', (req, res) => {
    res.render(__dirname + '\\charts.html', {chartData: chart});

});



app.use(express.static(path.join(__dirname)));
