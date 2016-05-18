module.exports = function(server){ //siempre module.exports
	var UsersModel = function(){
		var usuarios = [
		{
			name:'pablo',
			email:'pablo@pirovano.me'
		},{
			name:'agustin',
			email:'agustin.diaz@gl.com'
		}];
		this.getUser = function(req,res,next){ //leer
			var userId = req.params.id;
			if (usuarios[userId]){
				res.send(200, usuarios[userId]); //devuelve el usuario si encuentra un usuario
			}
			else {res.send(404,'la cagaste mi wuen')}
			return next();
		};

		this.editUser = function(req, res, next){ //modificar
			var userId = req.params.id,
				newName = req.params.name;
				if (usuarios[userId]){
					usuarios[userId].name = newName; //modifica el nombre del usuario
				res.send(200, usuarios[userId]); //devuelve el usuario si encuentra un usuario
			}
			else {res.send(404,'la cagaste mi wuen')}
			return next();
		};
		this.addUser = function(req, res, next){ //añadir
			var user = {};
       			user.name = req.params.name;
       			user.email = req.params.email;
       
      			usuarios.push(user);

      			var id = usuarios.length - 1; //el ultimo elemento del array
      			if (usuarios[id]){
      				res.send(201,usuarios[id]);
      		}
      		else {res.send(404,'la cagaste mi wuen')}
			return next();
		};
	};
	var User = new UsersModel();
	server.get({
			path: '/users/:id',
			version:'1.0.0'
	}, User.getUser);

	server.post({
		path: '/users/:id',
		version:'1.0.0'
	}, User.editUser);

	server.put({
		path: '/users/:id',
		version:'1.0.0'
	}, User.addUser)
};

