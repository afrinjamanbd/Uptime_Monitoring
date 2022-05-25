/*
 * Title: Not Found Handler
 * Description: 404 handler JS file
 * Author: Afrin Jaman
 * Date: 25/05/2022
 *
 */
//module scaffolding
const handler = {};

handler.notFoundhandler = (requestProperties, callback) =>{
    callback(404, {
        message : 'Not Found!',
    });
};

module.exports = handler;