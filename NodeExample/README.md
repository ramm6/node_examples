# NodeExample

HTTP Verbs
	GET
	POST
	DELETE
	PUT
	HEAD
	TRACE
	OPTIONS
	CONNECT
HTTP Response codes
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
HTTP Response
	XML		- eXtensible markup language
	JSON	- Javascript Object Notation  http://www.json.org
		Self describing
		Easy to understand
		Ordered list of values

*Node HTTP Module*
	`const http = require('http');`
**creating server**
	`const server = http.createServer((req, res) => { ... });`
**Starting server**
	`server.listen(port, ...);`
