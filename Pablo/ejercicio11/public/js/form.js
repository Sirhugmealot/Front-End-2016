$(function(){
	var form = $('container');
		$('.container').append('<button id="1">'+'Full List'+'</button>');
		$('.container').append('<button id="2">'+'Get One'+'</button>');
		$('.container').append('<button id="3">'+'Add User'+'</button>');
		$('#1').on('click',fullList);
		$('#2').on('click',oneList);
		$('#3').on('click',addUser);

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
	$('#subm').remove();
	$('.container').append('<input id="inpt">'+'</input>');
	$('.container').append('<button id="subm">'+'Search'+'</button>');
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');

	$('#subm').off('click').on('click',function(){
		$('#ess').remove();
		$('.container').append('<row id="ess">'+'</row>');

		var entra = $('#inpt').val();
		

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
				alert('todos feos');
			});
	});

	
} //cierra lista singular


function addUser(){
	$('#inpt1').remove();
	$('#inpt2').remove();
	$('#inpt3').remove();
	$('#subm').remove();
	$('.container').append('<br><p>'+'Nombre'+'</p><input id="inpt1">'+'</input>');
	$('.container').append('<br><p>'+'Edad'+'</p><input id="inpt2">'+'</input>');
	$('.container').append('<br><p>'+'Email'+'</p><input id="inpt3">'+'</input>');
	$('.container').append('<br><button id="subm">'+'Add User'+'</button>');
	$('#ess').remove();
	$('.container').append('<row id="ess">'+'</row>');
	

	/*$.post({ 
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

	});*/
}


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