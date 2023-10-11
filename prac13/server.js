'use strict';

const express = require('express');

const PORT = 9000;
const HOST = '0.0.0.0';

function dateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

const app = express();
app.get('/', (req, res) => {
    const date = dateTime();

    res.send(`
    <html>
    <title>Practical 13</title>
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
        <h1 id='prac'>Practical 13</h1>
        <button>${date}</button>
      </body>
    </html>
  `);
});


app.listen(PORT, HOST);
console.log(`Server is running on port http://${HOST}:${PORT}`);
