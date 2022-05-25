/*
 * Title: handle request response
 * Description: A handle request response JS file
 * Author: Afrin Jaman
 * Date: 25/05/2022
 *
 */

// dependencies
const url = require('url');
const {StringDecoder} = require("string_decoder");
const routes = require('../route');
const {notFoundhandler} = require('../handlers/routeHandlers/notFoundHandler');

//module scaffoldingnotFoundhandler
const handler = {};

handler.handleReqRes = (req, res) =>{

    const parseURL = url.parse(req.url, true);
    // console.log(parseURL);

    const path = parseURL.path
    // console.log(path);

    const trimmedpath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedpath);

    const method = req.method.toLowerCase();
    // console.log(method)

    const queryStringObject = parseURL.query;
    // console.log(queryStringObject)

    const headersObject = req.headers;
    // console.log(headersObject)

    const requestProperties = {
        parseURL,
        path,
        trimmedpath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder("utf-8");
    let realdata = '';

    console.log('not found handler:', notFoundhandler);
    console.log('routes[trimmedpath]:', routes[trimmedpath]);
    const chosenHandler = routes[trimmedpath] ? routes[trimmedpath] : notFoundhandler;

    chosenHandler(requestProperties,(statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload: {};
        const payloadStirng = JSON.stringify(payload);

        //return final response
        res.writeHead(statusCode);
        res.end(payloadStirng);
    });

    req.on('data', (buffer) => {
        realdata += decoder.write(buffer);
    });

    req.on('end',()=> {
        realdata += decoder.end();
        res.end('Hello Node.js ')
    });    

};

module.exports = handler;
