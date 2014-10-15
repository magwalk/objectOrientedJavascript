var outputVal = document.getElementById('output');
var monthNameVal;
var incomeVal;
var foodVal;
var rentVal;
var monthValues = [];
var monthExcess;

//If newArray (what has been stored in localStorage) has values stored in it :
if (localStorage) {
  var length = localStorage.length;
  i = length;

  for (x = 0; x < length; x++) {

    monthValues[x] = JSON.parse(localStorage[x]);

    monthNameVal = JSON.parse(localStorage[x]).monthName;
    incomeVal = JSON.parse(localStorage[x]).income;
    incomeVal = parseInt(incomeVal, 10);

    foodVal = JSON.parse(localStorage[x]).food;
    foodVal = parseInt(foodVal, 10);

    rentVal = JSON.parse(localStorage[x]).rent;
    rentVal = parseInt(rentVal, 10);

    calculateExcess = function(food, rent, income) {
      var totalExpenses = food + rent;
      return income - totalExpenses;
    };

    monthExcess = calculateExcess(foodVal, rentVal, incomeVal);

    var newOutputElement = document.createElement('p');
    var newOutputText = monthNameVal + " : " + monthExcess;
    var newOutputTextNode = document.createTextNode(newOutputText);
    newOutputElement.appendChild(newOutputTextNode);
    outputVal.appendChild(newOutputElement);

  }
}
else {
  i = 0;
}

function monthly(monthName, income, food, rent) {
  this.monthName = monthName
  this.income = income;
  this.food = food;
  this.rent = rent;
  this.calculateExcess = function() {
    var totalExpenses = this.food + this.rent;
    return this.income - totalExpenses;
  };
}


//var i = 0;

document.getElementById('submit').onclick = function(){

  monthNameVal = document.getElementById('monthName').value;

  incomeVal = document.getElementById('income').value;
  incomeVal = parseInt(incomeVal, 10);

  foodVal = document.getElementById('food').value;
  foodVal = parseInt(foodVal, 10);

  rentVal = document.getElementById('rent').value;
  rentVal = parseInt(rentVal, 10);



  monthValues[i] = new monthly(monthNameVal, incomeVal, foodVal, rentVal);

  localStorage[i] = JSON.stringify(monthValues[i]);

  monthExcess = monthValues[i].calculateExcess();

  var newOutputElement = document.createElement('p');
  var newOutputText = monthValues[i].monthName + " : " + monthExcess;
  var newOutputTextNode = document.createTextNode(newOutputText);
  newOutputElement.appendChild(newOutputTextNode);
  outputVal.appendChild(newOutputElement);

  //outputVal.textContent = monthExcess;

  i += 1;
};



