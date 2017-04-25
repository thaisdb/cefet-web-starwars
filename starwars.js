// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
document.getElementById('movies').innerHTML = '';
$.ajax({ 
	url:'http://swapi.co/api/films/',
	method: 'GET',
	success: function(resposta) {

		
		let aux = '';
		for (let result in resposta){
			console.log(result);
			aux = result.title;
		} 	
	}
})