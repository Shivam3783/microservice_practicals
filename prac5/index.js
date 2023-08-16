const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); 
var port = 8080;

let userData = require('./users.json');

app.post('/user/add', (req, res) => {
  const { name, password, id, occupation } = req.body;

  if(!name || !password || !id || !occupation) {
    return res.status(400).send('Missing required fields');
  }

  if(userData.find(u => u.name === name)) {
    return res.status(409).send('User already exists');  
  }

  userData.push({
    name, 
    password,
    id,
    occupation
  });

  fs.writeFileSync('./users.json', JSON.stringify(userData));
  
  res.send('User added successfully');
});

app.get('/user/list', (req, res) => {
  res.send(userData);
});

app.patch('/user/update/:name', (req, res) => {

    const name = req.params.name;
    const update = req.body;
  
    const user = userData.find(u => u.name === name);
  
    if (!user) {
      return res.status(404).send('User not found');  
    }
  
    Object.assign(user, update);
  
    fs.writeFileSync('./users.json', JSON.stringify(userData));
  
    res.send('User updated successfully');
  
});

app.delete('/user/delete/:name', (req, res) => {
  const name = req.params.name;

  const index = userData.findIndex(u => u.name === name);

  if(index === -1) {
    return res.status(404).send('User not found');
  }

  userData.splice(index, 1);

  fs.writeFileSync('./users.json', JSON.stringify(userData));

  res.send('User deleted successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});