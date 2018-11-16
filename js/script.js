const body = document.body;


let url = "http://api.population.io:80/1.0/population/Poland/2018-01-01/";
fetch(url)
	.then(resp => resp.json())
	.then(resp => {
		console.log(resp);
		body.innerHTML = JSON.stringify(resp);
	})
	.catch(function(err){
		console.log(err);
	})
