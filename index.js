/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Afrin Jaman
 * Date: 19/05/2022
 *
 */
// dependencies
const http = require('http');
const url = require('url');

// app object 
const app = {} ; 

app.config = {
    port : 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

//handles request response
app.handleReqRes = (req, res) =>{

    const parseURL = url.parse(req.url, true);
    console.log(parseURL);
    const path = parseURL.path
    console.log(path);
    const trimmedpath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedpath);
    const method = req.method.toLowerCase();
    console.log(method)
    const queryStringObject = parseURL.query;
    console.log(queryStringObject)
    const headersObject = req.headers;
    console.log(headersObject)
    res.end('Hello :: Node.js ')

};

//start the server
app.createServer();