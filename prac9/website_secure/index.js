const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 7070;

function authentication(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        const err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    if (user === 'shivam' && pass === 'shivam') {
        next(); // If authorized user, continue to the next middleware or route
    } else {
        const err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        res.setHeader('Cache-Control', 'no-store'); // Prevent caching
        err.status = 401;
        return next(err);
    }
}

app.use(authentication);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main.html'); // Serve your HTML file as the root path
});

var employees = [
    { id: 1, name: 'abc', email: 'xyz@gmail.com', phone: 12345567890, age: 18 },
    { id: 2, name: 'xya', email: 'abc@gmail.com', phone: 12345567890, age: 20 },
    { id: 3, name: 'bnm', email: 'uyyt@gmail.com', phone: 12345567890, age: 21 },
    { id: 4, name: 'ytyt', email: 'pop@gmail.com', phone: 12345567890, age: 19 },
];

var lastEmployeeId = employees.reduce((maxId, employee) => {
    return Math.max(maxId, employee.id);
}, 0);

// Apply authentication middleware to specific routes
app.get('/api/all', (req, res) => {
    res.send(employees);
});

app.post('/api/get', (req, res) => {
    const employe = employees.find(({ id }) => id == req.body.id);

    if (!employe)
        res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(employe);
});

app.post('/api/employe', (req, res) => {
    lastEmployeeId++;
    var employe = {
        id: lastEmployeeId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };
    employees.push(employe);
    res.send(employe);
});

app.post('/api/put', (req, res) => {
    var employe = employees.find(({ id }) => id == req.body.id);
    if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
    employe.name = req.body.name;
    employe.email = req.body.email;
    employe.phone = req.body.phone;
    employe.age = req.body.age;

    res.send(employe);
});

app.post('/api/delete', (req, res) => {
    const employe = employees.find(({ id }) => id == req.body.id);
    if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

    const index = employees.indexOf(employe);
    employees.splice(index, 1);

    res.send(employe);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
