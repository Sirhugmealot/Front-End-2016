$(function(){
	var form = $('container');
		$('.container').append('<button id="1">'+'Full List'+'</button>');
		$('.container').append('<button id="2">'+'Get One'+'</button>');
		$('.container').append('<button id="3">'+'Add User'+'</button>');
		$('.container').append('<button id="4">'+'delete User'+'</button>');
		$('#1').on('click',fullList);
		$('#2').on('click',oneList);
		$('#3').on('click',addUser);
		$('#4').on('click',removeUser);

		fullList();
		
function fullList(){
	$.get({
		url:'/persona',
		data:{
			id:'',
			nombre:'',
			edad:'',
			email:''
			},
		success: function(data){
			$('#ess').remove();
			$('.container').append('<row id="ess">'+'</row>');
			for(var i =0 ; i< data.length;i++){
					creando(data[i])
						}
			}
		});
	return false;

}//cierra lista completa

function oneList(){
	$('#inpt').remove();
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');
	$('#subm').remove();
	$('#ess').append('<input id="inpt">'+'</input>');
	$('#ess').append('<button id="subm">'+'Search'+'</button>');

	$('#subm').off('click').on('click',function(){
		

		var entra = $('#inpt').val();
			$('#ess').remove();
			$('.container').append('<row id="ess">'+'</row>');

			$.get({
			url:'/persona/' + entra,
			data:{
				id: entra,
				nombre:'',
				edad:'',
				email:''
			},
			success: creando
			}).fail(function() {
				alert('la has cagado');
			});
	});
	return false;
} //cierra lista singular


function addUser(){
	$('#inpt1').remove();
	$('#inpt2').remove();
	$('#inpt3').remove();
	$('#subm').remove();
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');
	$('#ess').append('<br><p>'+'Nombre:'+'</p><input id="inpt1">'+'</input>');
	$('#ess').append('<br><p>'+'Edad:'+'</p><input id="inpt2">'+'</input>');
	$('#ess').append('<br><p>'+'Email:'+'</p><input id="inpt3">'+'</input>');
	$('#ess').append('<br><button id="subm">'+'Add User'+'</button>');


	$('#subm').off('click').on('click',function(){
		var user = {};
			user.nombre = $('#inpt1').val();
			user.edad = $('#inpt2').val();
			user.email = $('#inpt3').val();
		$.post({ 
			url:'/persona',
			data:{
				id:'',
				nombre:user.nombre,
				edad:user.edad,
				email:user.email
				},
			success: function(data){
				$('#inpt1').remove();
				$('#inpt2').remove();
				$('#inpt3').remove();
				$('#subm').remove();
				$('#ess').remove();
				$('.container').append('<row id="ess">'+'</row>');
				$('#ess').append('<br><p>'+'Nombre:'+'</p><input id="inpt1">'+'</input>');
				$('#ess').append('<br><p>'+'Edad:'+'</p><input id="inpt2">'+'</input>');
				$('#ess').append('<br><p>'+'Email:'+'</p><input id="inpt3">'+'</input>');
				$('#ess').append('<br><button id="subm">'+'Add User'+'</button>');
				$('#ess').append('<br><br><span id="">'+'User Added'+'</span>');	
			}
		});
	}); 
	return false;
} //cierra agregar usuario


function removeUser(){
	$('#inpt').remove();
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');
	$('#subm').remove();
	$('#ess').append('<input id="inpt">'+'</input>');
	$('#ess').append('<button id="subm">'+'Remove'+'</button>');

	$('#subm').off('click').on('click',function(){
		

		var entra = $('#inpt').val();
			$('#ess').remove();
			$('.container').append('<row id="ess">'+'</row>');

			$.ajax({
			url:'/persona/' + entra,
			method: 'DELETE',
			data:{
				id: entra,
				nombre:'',
				edad:'',
				email:''
			},
			success: function(){

			}
			}).fail(function() {
				alert('la has cagado');
			});
	});
	return false;
} //cierra lista singular


/*
		$.put({ 
			url:'/persona',
			data:{
				id:'',
				nombre:'',
				edad:'',
				email:''
			},
			success: function(data){
				console.log(data);
			}

			});
}*/





/*
function fullList(){

	$.get({
		url:'/persona',
		data:{
			id:'',
			nombre:'',
			edad:'',
			email:''
		},
		success: creando
	});
}
*/
function creando(data){
	    $('#ess').append('<li>' + data.id + '</li>');
	    $('#ess').append('<li>' + data.nombre + '</li>');
	    $('#ess').append('<li>' + data.edad + '</li>');
	    $('#ess').append('<li>' + data.email + '</li>'+'<br>');			
	}


	/*	$.get({
			url:'/persona',
			data:{
				id:'',
				nombre:'',
				edad:'',
				email:''
			},
		

		success: function(data){
			for(var i =0 ; i< data.length;i++){
			    $('.container').append('<li>' + data[i].id + '</li>');
			    $('.container').append('<li>' + data[i].nombre + '</li>');
			    $('.container').append('<li>' + data[i].edad + '</li>');
			    $('.container').append('<li>' + data[i].email + '</li>'+'<br>');
			}
			
			
			}
	
		});*/








		return false;
});