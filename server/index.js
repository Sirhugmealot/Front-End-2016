/**
 * Created by Pablo on 26/4/16.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8880...');
});

//npm install connect serve-static

// se corre con "node server.js"