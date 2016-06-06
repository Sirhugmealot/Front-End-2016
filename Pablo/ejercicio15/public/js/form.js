$(function(){
	var form = $('container');
	$('#aa').on('click',addUser);

	function addUser(){
		var user = {};
			user.nombre = $('#nombre').val();
			user.email = $('#email').val();
			user.edad = $('#edad').val();
			user.sexo = $('#sexo').val();
		$.post({ 
			url:'/persona',
			data:{
				id:'',
				nombre:user.nombre,
				edad:user.edad,
				email:user.email+'@gmail.com',
				sexo:user.sexo
				},
			success: function(data){
				alert('User Added');
			}
		});
		return false;
	}; 
	 //cierra agregar usuario
});