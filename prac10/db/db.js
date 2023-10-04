const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books' , { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
    console.log(e.message);
})