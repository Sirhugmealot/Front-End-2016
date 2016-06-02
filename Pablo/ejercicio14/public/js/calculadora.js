var num = 1,
	resultado = 0;
var calcular = (function calc(){

		
	function sumar(input){
		resultado = resultado + input;
		return resultado;
	}
	function restar(input){
		resultado = resultado - input;
		return resultado;
	}
	function dividir(input){
		num = num / input;
		return num;
	}
	function multi(input){
		num = num * input;
		return num;	
	}
	function clear(){
		num = 1;
		resultado = 0;
		return 'Valores originales restaurados';
	}
	return {
		sumar:sumar,
		restar:restar,
		dividir:dividir,
		multi:multi,
		clear:clear
	}
})();

$(function(){
	var form = $('.container');
		form.find('#1').on('click',uno);
		form.find('#2').on('click',dos);
		form.find('#3').on('click',tres);
		form.find('#4').on('click',cuatro);
		form.find('#5').on('click',cinco);
		form.find('#6').on('click',seis);
		form.find('#7').on('click',siete);
		form.find('#8').on('click',ocho);
		form.find('#9').on('click',nueve);
		form.find('#0').on('click',cero);
		form.find('#mas').on('click',mas);
		form.find('#menos').on('click',menos);
		form.find('#por').on('click',por);
		form.find('#barra').on('click',barra);
		form.find('#igual').on('click',igual);
		form.find('#C').on('click',clear);
	
	function uno(){
		console.log(calcular.sumar(1));
		//console.log(resultado);
		
	}
	function dos(){
		
	}
	function tres(){
		
	}
	function cuatro(){
		
	}
	function cinco(){
		
	}
	function seis(){
		
	}
	function siete(){
	
	}
	function ocho(){
	
	}
	function nueve(){
		
	}
	function cero(){
		
	}
	function mas(){
		
	}
	function menos(){
		
	}
	function por(){
		
	}
	function barra(){
		
	}
	function igual(){

		
	}
	function clear(){
		
	}
	return false;
});
