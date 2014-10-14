document.getElementById('submit').onclick = function(){

  var incomeVal = document.getElementById('income').value;
  incomeVal = parseInt(incomeVal, 10);

  var foodVal = document.getElementById('food').value;
  foodVal = parseInt(foodVal, 10);

  var rentVal = document.getElementById('rent').value;
  rentVal = parseInt(rentVal, 10);

  function monthly(income, food, rent) {
    this.income = income;
    this.food = food;
    this.rent = rent;
    this.calculateExcess = function() {
      var totalExpenses = this.food + this.rent;
      return this.income - totalExpenses;
    };
  }

  var april = new monthly(incomeVal, foodVal, rentVal);

  var aprilExcess = april.calculateExcess();

  var outputVal = document.getElementById('output');
  outputVal.textContent = aprilExcess;
};



