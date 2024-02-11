// Array of fortunes
var fortunes = [
    "Every child is an artist; the problem is staying an artist when you grow up – Pablo Picasso",
    "Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.– Andy Warhol",
    "Art is a collaboration between God and the artist, and the less the artist does the better. – Andre Gide",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt"
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


















function clearAll() {
  document.getElementById('textArea').value = '';
}

function toggleCapitalize() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] !== '') {
      if (lines[i] === lines[i].toUpperCase()) {
        lines[i] = lines[i].toLowerCase();
      } else {
        lines[i] = lines[i].toUpperCase();
      }
    }
  }
  textArea.value = lines.join('\n');
}

function sort() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  lines.sort();
  textArea.value = lines.join('\n');
}

function reverse() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split('').reverse().join('');
  }
  textArea.value = lines.join('\n');
}

function stripBlank() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  for (var i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '') {
      lines.splice(i, 1);
    } else {
      lines[i] = lines[i].trim();
    }
  }
  textArea.value = lines.join('\n');
}

function addNumbers() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] !== '') {
      lines[i] = (i + 1) + '. ' + lines[i];
    }
  }
  textArea.value = lines.join('\n');
}

function shuffle() {
  var textArea = document.getElementById('textArea');
  var lines = textArea.value.split('\n');
  for (var i = lines.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  textArea.value = lines.join('\n');
}
