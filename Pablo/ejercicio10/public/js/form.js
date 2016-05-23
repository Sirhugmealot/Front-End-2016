$(function(){
	var form = $('form');
	form 
		.find('input[type=submit]')
		.on('click',onClick);
	

	/*function onClick(){
		$.get({ 
			url:'/pepe',
			
			data:{
				nombre:$('input[type=text]').val()
			},
			success: function(data){
				console.log(data);
			}

			});
			return false;
			} //forma mas facil de llamar a ajax*/

	function onClick(){
		$.ajax({ 
			url:'/pepe',
			method:'POST',
			data:{
				nombre:form.find('input[type=text]').val(),
				pass:form.find('input[type=password]').val()
			},
			success: function(data){
				console.log(data);
			}

			});
			return false;
			}


	

	
});