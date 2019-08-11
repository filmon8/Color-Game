var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var coloDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var defaultMode=true;
coloDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
	defaultMode=false;
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
	   for (var i = 0; i < squares.length ; i++) {
		// add initial colors to the squares
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none"
		}
		}
		messageDisplay.textContent="";
	 })

hardBtn.addEventListener("click", function () {
		defaultMode=true;
		easyBtn.classList.remove("selected")
		hardBtn.classList.add("selected")
		colors = generateRandomColors(6);
	    pickedColor = pickColor();
	    colorDisplay.textContent=pickedColor;
	    messageDisplay.textContent="";
	    h1.style.backgroundColor="steelblue";
	   for (var i = 0; i < squares.length ; i++) {
		// add initial colors to the squares
		   squares[i].style.backgroundColor=colors[i];
		   squares[i].style.display="block";
		}

})


resetButton.addEventListener("click", function() {
	resetButton.textContent="New Colors"
	// generate new colors
	if(defaultMode){
	colors = generateRandomColors(6);
	  } else {
	  	colors = generateRandomColors(3);
	  }
	// pick random array 
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent=pickedColor;
	//remove the "correct" or "Try again message"
	messageDisplay.textContent="";
	// change colors of squares
	for (var i = 0; i < squares.length ; i++) {
	// add initial colors to the squares
	squares[i].style.backgroundColor=colors[i];}
    h1.style.backgroundColor="steelblue";

})

for (var i = 0; i < squares.length ; i++) {
	// add initial colors to the squares
	squares[i].style.backgroundColor=colors[i];
	// add click listeners to squars
	squares[i].addEventListener("click", function () {
		// grab color of the clicked square
		// compare color to pickedColor
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor,pickedColor);
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!"
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
		else {
			this.style.backgroundColor= "#232323"
			messageDisplay.textContent="Try Again"
		}
	});
}



function changeColor(color) {
	for (var i=0; i<squares.length ; i++){
		squares[i].style.backgroundColor=color;
	}
}



function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return (colors[random]);
}



// Generate random colors of the squares
function generateRandomColors(num) {
	// make an array
	var arr=[];
	// add num random colors to array
	for(var i=0; i<num; i++){
		arr.push(randomColor());}
	// return that array
	return arr;
}




function randomColor() {
	// pick a "green" from 0-255
	var r = Math.floor(Math.random()* 256)
	// pick a "red" from 0-255
	var g = Math.floor(Math.random()* 256)
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random()* 256)
	return "rgb("+r+", "+ g+", "+ b+")";
}
