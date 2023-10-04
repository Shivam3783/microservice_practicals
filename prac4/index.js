const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 9000;

app.use(express.static(__dirname + '/public'));


var employees = [
    { id: 1, name: 'abc', email: 'xyz@gmail.com', phone: 12345567890, age: 18 },
    { id: 2, name: 'xya', email: 'abc@gmail.com', phone: 12345567890, age: 20 },
    { id: 3, name: 'bnm', email: 'uyyt@gmail.com', phone: 12345567890, age: 21 },
    { id: 4, name: 'ytyt', email: 'pop@gmail.com', phone: 12345567890, age: 19 },
];

var lastEmployeeId = employees.reduce((maxId, employee) => {
    return Math.max(maxId, employee.id);
}, 0);

// let maxId = 0;
// for (let employee of employees) {
//   if (employee.id > maxId) {
//     maxId = employee.id;
//   }
// }

// let lastEmployeeId = maxId;

app.get('/', (req, res) => {
    res.send('Welcome to Ganpat REST API!');
});

app.get('/api/all', (req, res) => {
    res.send(employees);
})
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
    employe.email= req.body.email;
    employe.phone= req.body.phone;
    employe.age= req.body.age;

    res.send(employe);
});

app.post('/api/delete', (req, res) => {

 const employe = employees.find(({ id }) => id == req.body.id);
    if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

    const index = employees.indexOf(employe);
    employees.splice(index, 1);

    res.send(employe);
});

// app.get('/api/employe', (req, res) => {
//     res.send(employees);
// })
// app.get('/api/employe/:id', (req, res) => {
//     const employe = employees.find(({ id }) => id === parseInt(req.params.id));

//     if (!employe)
//         res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
//     res.send(employe);
// });


// app.get('/api/employe/:name', (req, res) => {
//     const employe = employees.find(({ name }) => name === req.params.name);

//     if (!employe)
//         res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
//     res.send(employe);
// });

// app.post('/api/employe', (req, res) => {
//     lastEmployeeId++;
//     var employe = {
//         id: lastEmployeeId,
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         age: req.body.age,
//     };
//     employees.push(employe);
//     res.send(employe);
// });

// app.put('/api/employe/:id', (req, res) => {
//     var employe = employees.find(({ id }) => id === parseInt(req.params.id));
//     if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
//     employe.name = req.body.name;
//     employe.email = req.body.email;
//     employe.phone = req.body.phone;
//     employe.age = req.body.age;
//     employe.sub = req.body.sub;
//     res.send(employe);
// });

// app.put('/api/employe/:name', (req, res) => {
//     var employe = employees.find(({ name }) => name === req.params.name);
//     if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
//     employe.name = req.body.name;
//     employe.email = req.body.email;
//     employe.phone = req.body.phone;
//     employe.age = req.body.age;
//     employe.sub = req.body.sub;
//     res.send(employe);
// });

// app.delete('/api/employe/:id', (req, res) => {

//     const employe = employees.find(({ id }) => id === parseInt(req.params.id));
//     if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

//     const index = employees.indexOf(employe);
//     employees.splice(index, 1);

//     res.send(employe);
// });

// app.delete('/api/employe/:name', (req, res) => {

//     const employe = employees.find(({ name }) => name === req.params.name);
//     if (!employe) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

//     const index = employees.indexOf(employe);
//     employees.splice(index, 1);

//     res.send(employe);
// });


// app.patch('/api/employe/patch/:id', (req, res) => {
//     var employee = employees.find(({ id }) => id === parseInt(req.params.id));
//     if (!employee) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

//     if (req.body.name) employee.name = req.body.name;
//     if (req.body.email) employee.email = req.body.email;
//     if (req.body.phone) employee.phone = req.body.phone;
//     if (req.body.age) employee.age = req.body.age;
//     if (req.body.sub) employee.sub = req.body.sub;

//     res.send(employee);
// });



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});