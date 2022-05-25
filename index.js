/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Afrin Jaman
 * Date: 19/05/2022
 *
 */
// dependencies
const { read } = require('fs');
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

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
app.handleReqRes = handleReqRes;


//start the server
app.createServer();