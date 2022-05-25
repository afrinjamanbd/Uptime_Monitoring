/*
 * Title: Sample Handler
 * Description: A Sample handler JS file
 * Author: Afrin Jaman
 * Date: 25/05/2022
 *
 */

//module scaffolding
const handler = {};

handler.samplehandler = (requestProperties, callback) =>{
    callback(200,{
        message : 'Sample URL SHowing.',
    });
};

module.exports = handler;