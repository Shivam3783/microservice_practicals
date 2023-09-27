const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); 
var port = 8080;

let book_data = require('./books.json');

app.post('/book/add', (req, res) => {
    const { title, author, ISBN, quantity } = req.body;
      
    book_data.push({
        title, 
        author,
        ISBN,
        quantity
      });
    
      fs.writeFileSync('./books.json', JSON.stringify(book_data));

      res.send('Book added successfully');

});

app.patch('/book/update/:title', (req, res) => {

    const title = req.params.title;
    const update = req.body;
  
    const book = book_data.find(u => u.title === title);
  
    Object.assign(book, update);
  
    fs.writeFileSync('./books.json', JSON.stringify(book_data));
  
    res.send('Book updated successfully');
  
});

app.get('/book/search/:title', (req, res) => {

    const title = req.params.title;

    const book = book_data.find(u => u.title === title);

    if(!book){
        res.status(401).send("No such Book");
    }

    res.send(req.params.title + ' found!!!');

});

app.delete('/book/delete/:title', (req, res) => {

    const title = req.params.title;
  
    const index = book_data.findIndex(u => u.title === title);
  
    book_data.splice(index, 1);
  
    fs.writeFileSync('./books.json', JSON.stringify(book_data));
  
    res.send('Book deleted successfully');
  });


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

