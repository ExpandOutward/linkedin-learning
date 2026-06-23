fetch('https://api.giphy.com/v1/gifs/random?api_key=GrDW3peeQhhPoVXyrlewW7o7646aINws&tag=beavis+butthead')
.then(function(response) {
	return response.json();
})
.then(function(jsonData) {
	console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url
	console.log(gifUrl)

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', gifUrl);
	document.body.appendChild(gif)

	var gifTitle = jsonData.data.title;
	var title = document.createElement('h3');
	title.innerText = gifTitle;
	document.body.appendChild(title);
})