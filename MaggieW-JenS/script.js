document.getElementById('clickButton').onclick = function(){

  var nameVal = document.getElementById('nameVal').value;

  var emailVal = document.getElementById('emailVal').value;

  var commentVal = document.getElementById('commentVal').value;

  function contactForm(nameValue, email, comment) {
    this.nameValue = nameValue;
    this.email = email;
    this.comment = comment;
  }

  var yourInfo = new contactForm(nameVal, emailVal, commentVal);



  var outputVal = document.getElementById('output');

  outputVal.textContent = "Preview of your Info" + yourInfo.nameValue + " " + yourInfo.email + " " + yourInfo.comment;
};


