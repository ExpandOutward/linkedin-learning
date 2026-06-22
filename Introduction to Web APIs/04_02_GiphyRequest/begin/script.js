fetch ("https://api.giphy.com/v1/gifs/random?api_key=GrDW3peeQhhPoVXyrlewW7o7646aINws&tag=squirrel&rating=g")
.then(function(response) {
  return response.json();
})

.then (function(jsonData) {
  console.log(jsonData);
})