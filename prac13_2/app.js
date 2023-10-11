const express = require('express');
const app = express();

const PORT = 4000;
const HOST = '0.0.0.0';

const router = express.Router();

const path = __dirname + '/views/';

router.use(function (req, res, next) {
	console.log('/' + req.method);
	next();
});

router.get('/', function (req, res) {
	res.sendFile(path + 'index.html');
});

router.get('/bulb', function (req, res) {
	res.sendFile(path + 'bulb.html');
});

app.use(express.static(path));
app.use('/', router);


app.listen(PORT, HOST);
console.log(`Server is running on port http://${HOST}:${PORT}`);
