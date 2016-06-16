//var ;
var todo,
	id,
	educc=[],
	users=[];

var educationTemplado=(function(){
	var form = $('.col-md-12.education');

function initialization(){
		leBase;
}
			

function leBase(){
	
	var paramstr = window.location.search.substr(1);
		var paramarr = paramstr.split ("&");
		var param;

		param = paramarr[1];
		id=param;

	form.append('<div id="edu">'+'</div>');
	$('#edu').append('<form id="subedu">'+'</form>');
	getId(id);
	
}

function getId(id){
	$.ajax({
		url:'http://connectedin.herokuapp.com/person/'+id,
		method:'GET',
		contentType: 'application/json',
		success:function(data){
			var l,
				summary={},
				b;

				users = data.education;
				summary = users;
			console.log(data.education.length);
			for (var i = 0; i<summary.length;i++) {
				var edutemplate = $('#subedu');
				edutemplate.append('<br>');
				b=0;
				l=1;
				while(summary[i].edu2[l]){
					if(b==0){
						b=1;
						var booton = ('<br>'+summary[i].edu1);

					}
					else{  
						booton +='<br><input id="todolisto">'+summary[i].edu2[l]+'</input>';
					l++;
					}
				}
				edutemplate.append(booton);
			}
		}
	});
	toDo();
}

function toDo(){
	var i =0;
	$('#educationCorrect').off('submit').on('submit', agregarTarea);
		
	function agregarTarea(){
		var title = $('#educationTitle').val(),
			educationa={},
			summary={},
			todo = $('#educationText').val().split('\n'); // variable a guardar
			//summary[0] = title;
			console.log(educc, educationa, todo);


		if(todo && title){
			if(todo[0]!="" && title!=""){
				if(todo.length!=0){
					// Muestro el education
					for(var j=0;j<todo.length;j++){
						summary[j+1]=todo[j];
						var booton='<br><span>'+todo[j]+'</span>';
						$('#ess').append('<div id="jss">'+'</div');
						if(j==0){
							jss=$('#jss');
							//jss.append('<br>'+title);
							
						}
						//jss.append(booton);
					}	
					educationa.edu2=summary;
					educationa.edu1=title;
					educc.push(educationa);

					var user={education:educc};
					console.log(educc, educationa, todo);
					$.ajax({ 
						url:'http://connectedin.herokuapp.com/person/'+id,
						method: 'PUT',
						data: JSON.stringify(user),
						contentType: 'application/json',
						success: function(data){
							alert('User Added');
						}
					});


				}			
			}
		}

		return false;
	}

}	
return	{
	leBase:leBase
}


})();