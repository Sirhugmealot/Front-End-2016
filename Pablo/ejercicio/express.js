var express = require ('express');
	server = express ();

server.use(express.static('public')); //q tiene q instalar, q plugins/q hacer cuando crashea
//todos los archivos staticos los saca de public




server.listen(3000,function(){
	console.log('este es un mensaje de prueba');
})