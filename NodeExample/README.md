# NodeExample

### HTTP Verbs
	1. GET
	1. POST
	1. DELETE
	1. PUT
	1. HEAD
	1. TRACE
	1. OPTIONS
	1. CONNECT
### HTTP Response codes
	200	-	ok
	201	-	created
	301	-	moved permanently
	304	-	not modified
	400	-	Bad request
	401	-	Unautherized
	403	-	Foridden
	404	-	Not Found
	422	-	Unprocessable entry
	500	-	Internal server error
	505	-	HTTP version not supported
### HTTP Response
	XML	- eXtensible markup language
	JSON	- * Javascript Object Notation  http://www.json.org
			* Self describing
			* Easy to understand
			* Ordered list of values
## HTTP mod
### Node HTTP Module
	`const http = require('http');`
### creating server
	`const server = http.createServer((req, res) => { ... });`
### Starting server
	`server.listen(port, ...);`
### Reading from request and setting response
	req.headers, req.body
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;
	res.write('Hello');
	res.end('<html><body><h1>Hello World</h1></body></html>');

## Node PATH module
`
	const path = require('path');
	path.resolve('./public' + fileUrl);
	path.extname(filePath);
`
## Node FS module
`
	const fs = require('fs')
	fs.exists(filepath, function(exists){...})
	fs.createReadStream(filePath).pipe(res);
`
