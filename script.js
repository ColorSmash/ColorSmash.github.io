//Variables
var colorButton = document.getElementById("cButton");
var hexTextBox = document.getElementById("hexValue");
var pinnedColor = document.getElementById("pinnedColor");
var pinnedColor2 = document.getElementById("pinnedColor2");
var pinnedColor3 = document.getElementById("pinnedColor3");
var coloredBox1 = document.getElementById("pinnedColor");
var coloredBox2 = document.getElementById("pinnedColor2");
var coloredBox3 = document.getElementById("pinnedColor3");
var hexColor = "FAAC05";
var colorCheck;
var colorCheck2;
var colorCheck3;
var count = 0;
var pinSquare = 0;
var isRGB = false;
var isRGB2 = false;
var isRGB3 = false;


hexTextBox.readOnly = true;
hexTextBox.value = "Press the Change Button";

//Functions
function changeBackgroundColor(){

	count++;

	var numValue = Math.floor((Math.random() * 16) + 0);

	if(numValue == 10){

		numValue = "A";
	}	
	if(numValue == 11){

		numValue = "B";
	}	
	if(numValue == 12){

		numValue = "C";
	}	
	if(numValue == 13){

		numValue = "D";
	}	
	if(numValue == 14){

		numValue = "E";
	}	
	if(numValue == 15){

		numValue = "F";
	}

	color = numValue;

	if(count == 6){

		count = 0;
		return String(color);

	}else{

		return numValue + String(changeBackgroundColor());
	}
}

function changeBackground(){

	hexColor = changeBackgroundColor();
	document.body.style.backgroundColor = "#" + hexColor;

	hexTextBox.value = "#" + hexColor;
}

function pinToBoard(){

	if(pinSquare === 0){

		var tempColor = "#" + hexColor;
		var valueOfHex = JSON.parse(localStorage.getItem("hexValue"));
			
		if(tempColor !== coloredBox2.innerHTML &&
		   tempColor !== coloredBox3.innerHTML && tempColor !== valueOfHex.valueHex){

			colorCheck = "#" + hexColor;

			var savingHex = {
				valueHex: colorCheck
			}
			localStorage.setItem("hexValue", JSON.stringify(savingHex));

			coloredBox1.innerHTML = colorCheck;
			coloredBox1.style.backgroundColor = colorCheck;

			pinSquare++;
		}
	}

	else if(pinSquare === 1){

		var tempColor = "#" + hexColor;
		var valueOfHex = JSON.parse(localStorage.getItem("hexValue"));

		if(tempColor !== coloredBox3.innerHTML &&
		   tempColor !== coloredBox1.innerHTML && tempColor !== valueOfHex.valueHex){

			colorCheck2 = "#" + hexColor;
			var savingHex = {
				valueHex: colorCheck2
			}
			localStorage.setItem("hexValue", JSON.stringify(savingHex));
			coloredBox2.innerHTML = colorCheck2;
			coloredBox2.style.backgroundColor = colorCheck2;

			pinSquare++;
		}	
	}

	else if(pinSquare === 2){

		var tempColor = "#" + hexColor;
		var valueOfHex = JSON.parse(localStorage.getItem("hexValue"));
		

		if(tempColor !== coloredBox1.innerHTML &&
		   tempColor !== coloredBox2.innerHTML && tempColor !== valueOfHex.valueHex){

			colorCheck3 = "#" + hexColor;
			var savingHex = {
				valueHex: colorCheck3
			}
			localStorage.setItem("hexValue", JSON.stringify(savingHex));
			coloredBox3.innerHTML = colorCheck3;
			coloredBox3.style.backgroundColor = colorCheck3;

			pinSquare++;
		}
	}

	else if(pinSquare > 2){

		var userChoice = confirm("Clicking 'OK' will start to reset your pinned colors.");

		if(userChoice === true){

			pinSquare = 0;
		}
	}
}

function ConvertOne(){
	
	if(isRGB === false){

		var rgbVal = convertToRGB(colorCheck);
		coloredBox1.innerHTML = rgbVal;
		isRGB = true;
		
	}else if(isRGB){

		loadOne();
		isRGB = false;
	}
}

function ConvertTwo(){

	if(isRGB2 === false){

		var rgbVal = convertToRGB(colorCheck2);
		coloredBox2.innerHTML = rgbVal;	
		isRGB2 = true;

	}else if(isRGB2){

		loadTwo();
		isRGB2 = false;
	}
}

function ConvertThree(){

	if(isRGB3 === false){

		var rgbVal = convertToRGB(colorCheck3);
		coloredBox3.innerHTML = rgbVal;
		isRGB3 = true;

	}else if(isRGB3){

		loadThree();
		isRGB3 = false;
	}
}
//You are here
function saveOne(){

	var saveColorOne = {
		colorOneValue: colorCheck
	}

	localStorage.setItem("colorOne", JSON.stringify(saveColorOne));
}
function loadOne(){

	var loadColors = JSON.parse(localStorage.getItem("colorOne"));
	coloredBox1.innerHTML = loadColors.colorOneValue;
}
function saveTwo(){

	var saveColorTwo = {
		colorTwoValue: colorCheck2
	}

	localStorage.setItem("colorTwo", JSON.stringify(saveColorTwo));
}
function loadTwo(){

	var loadColors2 = JSON.parse(localStorage.getItem("colorTwo"));
	coloredBox2.innerHTML = loadColors2.colorTwoValue;
}
function saveThree(){

	var saveColorThree = {
		colorThreeValue: colorCheck3
	}

	localStorage.setItem("colorThree", JSON.stringify(saveColorThree));
}
function loadThree(){

	var loadColors3 = JSON.parse(localStorage.getItem("colorThree"));
	coloredBox3.innerHTML = loadColors3.colorThreeValue;
}


function convertToRGB(hexColorConvert){

	
	var start = hexColorConvert.replace("#", "");
	
	for(var q = 0; q < 6; q++){

		if(start.includes("0")){
			start = start.replace("0","G");
		}
		if(start.includes("1")){
			start = start.replace("1","H");
		}
		if(start.includes("2")){
			start = start.replace("2","I");
		}
		if(start.includes("3")){
			start = start.replace("3","J");
		}
		if(start.includes("4")){
			start = start.replace("4","K");
		}
		if(start.includes("5")){
			start = start.replace("5","L");
		}
		if(start.includes("6")){
			start = start.replace("6","M");
		}
		if(start.includes("7")){
			start = start.replace("7","N");
		}
		if(start.includes("8")){
			start = start.replace("8","O");
		}
		if(start.includes("9")){
			start = start.replace("9","P");
		}

	//RData
	}
	if(start.substring(0,1).includes("A")){
		var firstNum = 10;
	}
	if(start.substring(1,2).includes("A")){
		var secondNum = 10;
	}
	if(start.substring(0,1).includes("B")){
		var firstNum = 11;
	}
	if(start.substring(1,2).includes("B")){
		var secondNum = 11;
	}
	if(start.substring(0,1).includes("C")){
		var firstNum = 12;
	}
	if(start.substring(1,2).includes("C")){
		var secondNum = 12;
	}
	if(start.substring(0,1).includes("D")){
		var firstNum = 13;
	}
	if(start.substring(1,2).includes("D")){
		var secondNum = 13;
	}
	if(start.substring(0,1).includes("E")){
		var firstNum = 14;
	}
	if(start.substring(1,2).includes("E")){
		var secondNum = 14;
	}
	if(start.substring(0,1).includes("F")){
		var firstNum = 15;
	}
	if(start.substring(1,2).includes("F")){
		var secondNum = 15;
	}

	if(start.substring(0,1).includes("G")){
		var firstNum = 0;
	}
	if(start.substring(1,2).includes("G")){
		var secondNum = 0;
	}
	if(start.substring(0,1).includes("H")){
		var firstNum = 1;
	}
	if(start.substring(1,2).includes("H")){
		var secondNum = 1;
	}
	if(start.substring(0,1).includes("I")){
		var firstNum = 2;
	}
	if(start.substring(1,2).includes("I")){
		var secondNum = 2;
	}
	if(start.substring(0,1).includes("J")){
		var firstNum = 3;
	}
	if(start.substring(1,2).includes("J")){
		var secondNum = 3;
	}
	if(start.substring(0,1).includes("K")){
		var firstNum = 4;
	}
	if(start.substring(1,2).includes("K")){
		var secondNum = 4;
	}
	if(start.substring(0,1).includes("L")){
		var firstNum = 5;
	}
	if(start.substring(1,2).includes("L")){
		var secondNum = 5;
	}
	if(start.substring(0,1).includes("M")){
		var firstNum = 6;
	}
	if(start.substring(1,2).includes("M")){
		var secondNum = 6;
	}
	if(start.substring(0,1).includes("N")){
		var firstNum = 7;
	}
	if(start.substring(1,2).includes("N")){
		var secondNum = 7;
	}
	if(start.substring(0,1).includes("O")){
		var firstNum = 8;
	}
	if(start.substring(1,2).includes("O")){
		var secondNum = 8;
	}
	if(start.substring(0,1).includes("P")){
		var firstNum = 9;
	}
	if(start.substring(1,2).includes("P")){
		var secondNum = 9;
	}
	//GData
	if(start.substring(2,3).includes("A")){
		var thirdNum = 10;
	}
	if(start.substring(3,4).includes("A")){
		var fourthNum = 10;
	}
	if(start.substring(2,3).includes("B")){
		var thirdNum = 11;
	}
	if(start.substring(3,4).includes("B")){
		var fourthNum = 11;
	}
	if(start.substring(2,3).includes("C")){
		var thirdNum = 12;
	}
	if(start.substring(3,4).includes("C")){
		var fourthNum = 12;
	}
	if(start.substring(2,3).includes("D")){
		var thirdNum = 13;
	}
	if(start.substring(3,4).includes("D")){
		var fourthNum = 13;
	}
	if(start.substring(2,3).includes("E")){
		var thirdNum = 14;
	}
	if(start.substring(3,4).includes("E")){
		var fourthNum = 14;
	}
	if(start.substring(2,3).includes("F")){
		var thirdNum = 15;
	}
	if(start.substring(3,4).includes("F")){
		var fourthNum = 15;
	}

	if(start.substring(2,3).includes("G")){
		var thirdNum = 0;
	}
	if(start.substring(3,4).includes("G")){
		var fourthNum = 0;
	}
	if(start.substring(2,3).includes("H")){
		var thirdNum = 1;
	}
	if(start.substring(3,4).includes("H")){
		var fourthNum = 1;
	}
	if(start.substring(2,3).includes("I")){
		var thirdNum = 2;
	}
	if(start.substring(3,4).includes("I")){
		var fourthNum = 2;
	}
	if(start.substring(2,3).includes("J")){
		var thirdNum = 3;
	}
	if(start.substring(3,4).includes("J")){
		var fourthNum = 3;
	}
	if(start.substring(2,3).includes("K")){
		var thirdNum = 4;
	}
	if(start.substring(3,4).includes("K")){
		var fourthNum = 4;
	}
	if(start.substring(2,3).includes("L")){
		var thirdNum = 5;
	}
	if(start.substring(3,4).includes("L")){
		var fourthNum = 5;
	}
	if(start.substring(2,3).includes("M")){
		var thirdNum = 6;
	}
	if(start.substring(3,4).includes("M")){
		var fourthNum = 6;
	}
	if(start.substring(2,3).includes("N")){
		var thirdNum = 7;
	}
	if(start.substring(3,4).includes("N")){
		var fourthNum = 7;
	}
	if(start.substring(2,3).includes("O")){
		var thirdNum = 8;
	}
	if(start.substring(3,4).includes("O")){
		var fourthNum = 8;
	}
	if(start.substring(2,3).includes("P")){
		var thirdNum = 9;
	}
	if(start.substring(3,4).includes("P")){
		var fourthNum = 9;
	}

	//BData
	if(start.substring(4,5).includes("A")){
		var fifthNum = 10;
	}
	if(start.substring(5,6).includes("A")){
		var sixthNum = 10;
	}
	if(start.substring(4,5).includes("B")){
		var fifthNum = 11;
	}
	if(start.substring(5,6).includes("B")){
		var sixthNum = 11;
	}
	if(start.substring(4,5).includes("C")){
		var fifthNum = 12;
	}
	if(start.substring(5,6).includes("C")){
		var sixthNum = 12;
	}
	if(start.substring(4,5).includes("D")){
		var fifthNum = 13;
	}
	if(start.substring(5,6).includes("D")){
		var sixthNum = 13;
	}
	if(start.substring(4,5).includes("E")){
		var fifthNum = 14;
	}
	if(start.substring(5,6).includes("E")){
		var sixthNum = 14;
	}
	if(start.substring(4,5).includes("F")){
		var fifthNum = 15;
	}
	if(start.substring(5,6).includes("F")){
		var sixthNum = 15;
	}

	if(start.substring(4,5).includes("G")){
		var fifthNum = 0;
	}
	if(start.substring(5,6).includes("G")){
		var sixthNum = 0;
	}
	if(start.substring(4,5).includes("H")){
		var fifthNum = 1;
	}
	if(start.substring(5,6).includes("H")){
		var sixthNum = 1;
	}
	if(start.substring(4,5).includes("I")){
		var fifthNum = 2;
	}
	if(start.substring(5,6).includes("I")){
		var sixthNum= 2;
	}
	if(start.substring(4,5).includes("J")){
		var fifthNum = 3;
	}
	if(start.substring(5,6).includes("J")){
		var sixthNum = 3;
	}
	if(start.substring(4,5).includes("K")){
		var fifthNum = 4;
	}
	if(start.substring(5,6).includes("K")){
		var sixthNum = 4;
	}
	if(start.substring(4,5).includes("L")){
		var fifthNum = 5;
	}
	if(start.substring(5,6).includes("L")){
		var sixthNum = 5;
	}
	if(start.substring(4,5).includes("M")){
		var fifthNum = 6;
	}
	if(start.substring(5,6).includes("M")){
		var sixthNum = 6;
	}
	if(start.substring(4,5).includes("N")){
		var fifthNum = 7;
	}
	if(start.substring(5,6).includes("N")){
		var sixthNum = 7;
	}
	if(start.substring(4,5).includes("O")){
		var fifthNum = 8;
	}
	if(start.substring(5,6).includes("O")){
		var sixthNum = 8;
	}
	if(start.substring(4,5).includes("P")){
		var fifthNum = 9;
	}
	if(start.substring(5,6).includes("P")){
		var sixthNum = 9;
	}
	
	var RData = (firstNum * 16) + secondNum;
	var GData = (thirdNum * 16) + fourthNum;
	var BData = (fifthNum * 16) + sixthNum;

	var rgbValue = "(" + RData + ", " + GData + ", " + BData + ")";
	

	return rgbValue;

	
}






