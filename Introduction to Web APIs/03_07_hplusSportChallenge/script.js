fetch('https://hplussport.com/api/products?order=price')
.then(function(response) {
	return response.json();
})

.then(function(jsonData) {
	for(items in jsonData) {
		//Display all the product names
		var productName = jsonData[items].name;
		var product = document.createElement('li');
		product.innerHTML = productName;
		document.body.appendChild(product);

		//Display all the product images
		var productImg = jsonData[items].image;
		var image = document.createElement('img');
		image.setAttribute('src', productImg);
		document.body.appendChild(image);

		//Display the price of each product
		// Instructions: Add price and change order by to price

		var price = jsonData[items].price;
		var priceElement = document.createElement('h6');
		priceElement.innerHTML = price;
		document.body.appendChild(priceElement)

		/* Corrections
		
		Original changes did not show because I had my index.html file open
		from a previous exercise. 
		
		Was looking for an order by statement in the code regarding order. Order 
		is handled by the end point and should be added to the URL.
		*/
	}

})
