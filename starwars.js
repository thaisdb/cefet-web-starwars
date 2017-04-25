// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
let movies = $('#movies > ul');
movies.html('');
$.ajax({ 
	url:'http://swapi.co/api/films/',
	method: 'GET',
	success: function(resposta) {
		for (let result of resposta.results){
			console.log(result.title);
			movies.append('<li> ' + result.title + '</li>');
		} 	
	}
})