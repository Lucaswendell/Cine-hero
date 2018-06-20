//aula de Ajax
function iniciandoAjax(){ //iniciando Ajax
	var objAjax = false; //variavel que vai receber o objeto ajax
	if(window.XMLHttpRequest){// Firefox e demais browsers
		objAjax = new XMLHttpRequest();
	}else if(window.ActiveXObject){ //verifica se é o IE                                                
		try{// versão mais atualizada da Microsoft
			objAjax = new ActiveXObject("Msxml.XMLHTTP");
		}catch(e){
			try{
				objAjax = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				objAjax = false;
			}
		}
	}else{
		alert("Seu browser não suporta AJAX.");
	}
	return objAjax;
}
function mostraResposta(ajax){//passando o elemento como parâmetro e o ajax
	if(ajax.readyState != 3){
		document.body.className = "carregando";
	}
	if(ajax.readyState == 4){
		if(ajax.status == 200){
			$.sweetModal({
				content : ajax.responseText
			});
			document.body.className = "";
		}else{
			alert("Erro no servido");
		}
	}
};
function requisitarArquivo(elemento, arquivo){
	var ajax = iniciandoAjax();
	if(ajax){
		ajax.onreadystatechange = function(){ //é executado quando o estado da requisição muda
			mostraResposta(ajax);
		}
	}
	ajax.open("GET", "paginas/feedback.html");
	ajax.send(null); 
}
