const express = require('express');
const { dateTime } = require('./dateTime');

const app = express();

app.get('/', (req, res) => {
    const date = dateTime();

    res.send(`
    <html>
    <title>Practical 3</title>
      <head>
      <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #f2f2f2; 
          }
          
          button {
            font-size: 1.5rem;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            background: #4CAF50;
            color: white;
            margin-top: 120px;
          }
          #prac {
            text-align: center;
            color: #27ae60;
            margin-top: 50px;
        }
        
        </style>  
      </head>
      <body>
        <h1 id='prac'>Practical 3</h1>
        <button>${date}</button>
      </body>
    </html>
  `);
});

app.listen(3000);