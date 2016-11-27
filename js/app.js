var numSquares = 6;
var colors = generateColors(numSquares);


var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");




easyButton.addEventListener("click", function(){
	hardButton.classList.remove("active");
	easy.classList.add("active");

	numSquares = 3;
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.background = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("active");
	easy.classList.remove("active");

	numSquares = 6;
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
			square[i].style.background = colors[i];
			square[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	// generate new colors
	colors = generateColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
	h1.style.background = "#3498db";
	messageDisplay.textContent = "";
	this.textContent = "New Color";
}),

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
	// add initial colors to squares
	square[i].style.background = colors[i];


	// add click listeners to squares
	square[i].addEventListener("click", function(){
		// grabb color of clicked square
		var clickedColor = this.style.background;

		// compare color to pickedColor

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			victoryColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play again?";
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

function victoryColor(color){
	// loop through all squares
	for (var i = 0; i < square.length; i++) {
		// change each color to match winning color
		square[i].style.background = color;
	}
}

function pickColor(){
	// pipck random number
	var random = Math.floor(Math.random() * colors.length);
	// use number to access array
	return colors[random];
}

function generateColors(num){
	// make an array
	var arr = [];
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		// get random color 
		randomColor();

		// and push to array
		arr.push(randomColor());
	}
	// return that array
	return arr;

}

function randomColor(){
	// pick a red from 0 to 255

	var r = Math.floor(Math.random()*256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random()*256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}






