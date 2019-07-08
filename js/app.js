
function Adicionar(){
    var cliente = JSON.stringify({
        Id       : Math.floor((Math.random() * 10000) + 1),
        Nome     : $("#nome").val(),
        CPF      : $("#cpf").val(),
        Telefone : $("#telefone").val(),
        Email    : $("#email").val()
        // Email    : $("#txtEmail").val()
    });
    var clientes = JSON.parse(cliente);	
    localStorage.setItem((clientes['Id']), cliente);	
}

function Listar() {
	for (var i = 0; i < localStorage.length; i++){
    var dados = localStorage.getItem(localStorage.key(i));
    
    var dados    = JSON.parse(dados);
    var nome     = dados['Nome'];
    var cpf      = dados['CPF'];
    var telefone = dados['Telefone'];
    var email = dados['Email'];
    var id 	     = dados['Id'];

    $('tbody').append(
    	'<tr>\
		   <td>'+id+'</td>\
		   <td>'+nome+'</td>\
		   <td>'+cpf+'</td>\
		   <td>'+telefone+'</td>\
		   <td>'+email+'</td>\
			   <td>\
            	  <span class="fa fa-edit" onclick=Editar('+id+') aria-hidden="true"><br><small>Editar</small></span>\
               </td>\
               <td>\
                  <span class="fa fa-trash" onclick=Excluir('+id+') aria-hidden="true"><br><small>Deletar</small></span>\
               </td>\
	   </tr>');
  }
}

function Excluir(id) {
	  var confirma = window.confirm("Apagar Linha "+id+" ?"); 
	  if(confirma)  {
	  	localStorage.removeItem(id);
	  	document.location.reload(true);
	  }  
}

function Editar(id) {
	var nome;
    nome      = prompt ("Qual é o seu Nome?");
    cpf       = prompt ("Qual é o seu CPF?");
    telefone  = prompt ("Qual é o seu Telefone?");
    email     = prompt ("Qual é o seu Email?");

	var cliente = JSON.stringify({
        Id       : id,
        Nome     : ''+nome,
        CPF      : ''+cpf,
        Telefone : ''+telefone,
        Email    : ''+email
    });

	var clientes = JSON.parse(cliente);
	localStorage.setItem((clientes['Id']), cliente);
	document.location.reload(true);	

}


// 1 - Crie uma array
// 2 - Gera um número randômico, após gerado você:
//    2.1 - Verifica se o número já existe na array:
//        2.1.1 - Se já existir, volta para a etapa 2.
//        2.1.2 - Se não existir,adiciona-o à array.
//                Então pode usá-lo para os fins que desejar.
function randomGenerator() {
	var vet = [];
	console.log(vet.length);

	while (vet.length < 5) {
		for (var i = 0; i < 5 ; i++) {
			var rand = Math.floor((Math.random() * 5) + 1);
			var reset = 0
			for (var j = 0; j < vet.length; j++) {
				if (vet[j] === rand) {
					reset = 1;
				} 
			}
			if (reset == 0) {
				vet.push(rand);	
			} 
		}
	} // end while
// console.log(vet);
console.log(vet);
}


// Pega Todas as Keys do Storage em ordem
// var arrays = [];
// for (var i = 0; i < localStorage.length; i++){
//      var dados = localStorage.getItem(localStorage.key(i));
//      var dadosJSON = JSON.parse(dados);
//      arrays.push(dadosJSON['Id']);
//  }
// console.log(arrays); 