const express = require("express");
const fs = require("fs");
var path = require('path');
const app = express();

function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == 'admin' && pass == 'password') {

		// If Authorized user
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/protected', (req, res) => {
	res.send('I can be reached only using an authorized API key.');
  });
  
// Server setup
app.listen((5000), () => {
	console.log("Server is Running ");
})




/* Node.js middleware function named authentication. This function is designed to handle HTTP Basic Authentication,
 which is a simple method of user authentication over HTTP. 

The code you provided appears to be a Node.js middleware function named authentication. This function is designed to handle HTTP Basic Authentication, which is a simple method of user authentication over HTTP. Let's break down the code and explain how it works:

 Explanation of what this middleware function:

It starts by extracting the 'Authorization' header from the HTTP request using req.headers.authorization. This header contains the user's credentials encoded in Base64.

It checks whether the 'Authorization' header exists. If it doesn't, it means the client hasn't provided any authentication credentials. In this case, it creates an error message and sends a 401 Unauthorized response to the client. It also sets the 'WWW-Authenticate' header to 'Basic', indicating that Basic Authentication is required.

If the 'Authorization' header exists, it decodes the Base64-encoded credentials. The credentials are typically in the format username:password, and they are split into separate user and pass variables.

It then checks if the provided user and pass match a predefined set of credentials. In this example, the expected credentials are 'admin' for the username and 'password' for the password. If the provided credentials match, the middleware calls next(), allowing the request to proceed to the next middleware or route handler. If the credentials do not match, it sends a 401 Unauthorized response with the 'WWW-Authenticate' header set to 'Basic'.

This middleware is useful for protecting routes or endpoints that require authentication. When a client sends a request to a protected route, it must include the 'Authorization' header with the Base64-encoded username and password. If the credentials are valid, the client is granted access; otherwise, it receives a 401 response.


*/




