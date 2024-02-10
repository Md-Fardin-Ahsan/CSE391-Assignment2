// Array of fortunes
var fortunes = [
    "Every child is an artist; the problem is staying an artist when you grow up – Pablo Picasso",
    "Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.– Andy Warhol",
    "Art is a collaboration between God and the artist, and the less the artist does the better. – Andre Gide",
    "A journey of a thousand miles begins with a single step.",
    "You will find success in unexpected places.",
    "Good things come to those who wait.",
    "Every adversity carries with it the seed of an equal or greater benefit."
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * fortunes.length);
    var quoteText = document.getElementById("quote-text");
    quoteText.textContent = fortunes[randomIndex];
  }
  
  // Function to change colors of the quote box
  function changeColors(color) {
    var quoteBox = document.getElementById("quote-box");
    quoteBox.style.color = color;
    quoteBox.style.borderColor = color;
    quoteBox.style.backgroundColor = lightenDarkenColor(color, -20);
  }
  
  // Function to lighten or darken a color
  function lightenDarkenColor(color, amount) {
    var usePound = false;
    if (color[0] == "#") {
      color = color.slice(1);
      usePound = true;
    }
    var num = parseInt(color, 16);
    var r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    var g = (num & 0x0000FF) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }
  
  // Display a random quote when the page loads
  window.onload = displayRandomQuote;
  




  function convert() {
    var conversionType = document.getElementById("conversion-type").value;
    var weightInput = document.getElementById("weight").value;
    var resultSpan = document.getElementById("result");
  
    if (conversionType === "kgToLb") {
      // Convert kilograms to pounds
      var kilograms = parseFloat(weightInput);
      var pounds = kilograms * 2.2046;
      resultSpan.textContent = pounds.toFixed(2) + " pounds";
    } else if (conversionType === "lbToKg") {
      // Convert pounds to kilograms
      var pounds = parseFloat(weightInput);
      var kilograms = pounds * 0.4536;
      resultSpan.textContent = kilograms.toFixed(2) + " kilograms";
    } else {
      resultSpan.textContent = "Invalid conversion type";
    }
  }
  




  var inputNumbersArr;
function addNumbers() {
    var inputNumbers = document.getElementById("math-input-numbers").value;
    inputNumbersArr = inputNumbers.split(',');
    findMax();
    findMin();
    findSum();
    findReverse();
}

function findMax() {
    var result = Math.max.apply(null, inputNumbersArr);
    document.getElementById("max").innerHTML = result;
}
function findMin() {
    var result = Math.min.apply(null, inputNumbersArr);
    document.getElementById("min").innerHTML = result;
}
function findSum() {
    var sum = 0;
    for (var i = 0; i < inputNumbersArr.length; i++) {
        sum += parseFloat(inputNumbersArr[i]);
    }
    document.getElementById("sum").innerHTML = sum;
    var avg = sum / inputNumbersArr.length;
    document.getElementById("avg").innerHTML = avg;
}

function findReverse() {
    inputNumbersArr.reverse();
    document.getElementById("reverse").innerHTML = inputNumbersArr;
}