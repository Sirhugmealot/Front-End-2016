$(function(){
	var form = $('container');
		$('.container').append('<button id="a1">'+'Full List'+'</button>');
		$('.container').append('<button id="a2">'+'Get One'+'</button>');
		$('.container').append('<button id="a3">'+'Add User'+'</button>');
		$('.container').append('<button id="a4">'+'Delete User'+'</button>');
		$('.container').append('<button type="button" id="a5">'+'TODO'+'</button>');
		$('#a1').on('click',fullList);
		$('#a2').on('click',oneList);
		$('#a3').on('click',addUser);
		$('#a4').on('click',removeUser);
		$('#a5').on('click',toDo);

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
	reduccion();
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
				reduccion();
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
} //cierra eliminar usuario


function reduccion(){
	$('#inpt1').remove();
	$('#inpt2').remove();
	$('#inpt3').remove();
	$('#subm').remove();
	$('#ess').remove();
	$('.container').append('<div class="row" id="ess">'+'</div>');
	$('#ess').append('<br><p>'+'Nombre:'+'</p><input id="inpt1">'+'</input>');
	$('#ess').append('<br><p>'+'Edad:'+'</p><input id="inpt2">'+'</input>');
	$('#ess').append('<br><p>'+'Email:'+'</p><input id="inpt3">'+'</input>');
	$('#ess').append('<br><button id="subm">'+'Add User'+'</button>');
	$('#ess').append('<br><br><span id="">'+'User Added'+'</span>');
} //cierra bloque de quitar y agregar 

function toDo(){
	var i =0;
	$('#ess').remove();
	$('#inpt1').remove();
	$('#inpt2').remove();
	$('.container').append('<div id="ess">'+'</div>');
	$('#ess').append('<form>'+'</form>');
	$('form').append('<p>TODO List</p><input id="inpt1" type="text" name="inpt1" />');
	$('form').append('<p>TODO Date</p><input id="inpt2" type="date" name="inpt2" />');
	$('form').append('<button type="submit" style="display:none">save</button>');
	$('form').off('submit').on('submit', agregarTarea);
		
	function agregarTarea(){

		var todo = $('#inpt1').val(),
			todo2= $('#inpt2').val();
		i++;
		var booton='<br><span id="todolisto'+i+'">%name%<br>%date%</span>'+
		'<button id="borrar'+i+'">'+'X'+'</button>';
		$('#ess').append('<div class="essas" id="jss'+i+'">'+'</div');
		var replaced = booton.replace(/%name%/gi, todo)
						 	.replace(/%date%/g, todo2);
		//replaces siempre devuele algo y se debe mostrar o guardar
		$('#jss'+i).append(replaced);
		$('#borrar'+i).attr('data-id', i).off('click').on('click', limpiarlo);
		return false;
	}

	function limpiarlo(){
		var iNUEVO = $(this).attr('data-id');
		$('#jss'+iNUEVO).remove();	 
	}	
}	

function creando(data){
	    $('#ess').append('<li>' + data.id + '</li>');
	    $('#ess').append('<li>' + data.nombre + '</li>');
	    $('#ess').append('<li>' + data.edad + '</li>');
	    $('#ess').append('<li>' + data.email + '</li>'+'<br>');			
	}

		return false;
});