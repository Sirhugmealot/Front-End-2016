//var ;
var todo,
	id,
	users,
	educationes=[],
	summary=[];

$(function(){
	var form = $('container'),
		templateContainer = $('#template');
		templateContainer.load('/todo/todotemplate.html',function(){
			botoooness = templateContainer.html();
			leBase();
			
			
});
function leBase(){
	
	var paramstr = window.location.search.substr(1);
		var paramarr = paramstr.split ("=");
		var param;

		param = paramarr[1];
		id=param;
	form.append('<div id="ess">'+'</div>');
	$('#ess').append('<form id="avv">'+'</form>');
	$.ajax({
		url:'http://connectedin.herokuapp.com/person/'+id,
		method:'GET',
		success:function(data){
				users = data.education;
			for(var j=0;j<users.length;j++){
				var	summary = users[j].val().split('\n'),
					title = summary.splice(0,1);
				for (var i = 0; i<summary.length;i++) {
					if(i==0){
						$('#avv').append('<br>'+title);
					}
					var booton='<br><span id="todolisto">'+summary[i]+'</span>';
					$('#avv').append(booton);
				}
			}
		}
	});
	toDo();
}

function toDo(){
	var i =0,
		todolistadoooo =	'<h3>Education</h3>'+'<input id="title"/>'+
							'<textarea id="inpt1" type="text" name="inpt1" />'+
							'<br><button type="submit">save</button>';
	$('form').append(todolistadoooo);
	$('form').off('submit').on('submit', agregarTarea);
		
	function agregarTarea(){
		var title = $('#title').val(),
			todo = $('#inpt1').val().split('\n'); // variable a guardar
			summary[0] = title;


		if(todo){
			if(todo!=""){
				// Muestro el education
				for(var j=0;j<todo.length;j++){
					summary[j+1]=todo[j];
					var booton='<br><span id="todolisto">'+todo[j]+'</span>';
					$('#ess').append('<div id="jss">'+'</div');
					if(j==0){
						jss=$('#jss');
						jss.append('<br>'+title);
					}
					jss.append(booton);
				}			
			}
		}
		$.ajax({ 
			url:'http://connectedin.herokuapp.com/person',
			method: 'POST',
			data: JSON.stringify(user),
			contentType: 'application/json',
			success: function(data){
				alert('User Added');
			}
		});
		return false;
	}

}	



});