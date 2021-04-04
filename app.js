const bill = document.getElementById("bill");
const service = document.getElementById("service");
const people = document.getElementById("people");
const calculate = document.getElementById("calculate");

bill.addEventListener("input", function () {
  validateInput(bill);
});
service.addEventListener("change", function () {
  validateSelect(service);
});
people.addEventListener("input", function () {
  validateInput(people);
});

//Automaticly validates input on client side and changes border color to show
//whether the input is valid
function validateInput(x) {
  if (x.value == "") {
    x.style.borderColor = "black";
    x.style.boxShadow = "none";
  } else if (isNaN(x.value) || x.value <= 0) {
    x.style.borderColor = "red";
    x.style.boxShadow = "0 0 0.3rem red";
  } else {
    x.style.borderColor = "green";
    x.style.boxShadow = "0 0 0.3rem green";
  }
}
function validateSelect(x) {
  if (x.value == 0) {
    x.style.borderColor = "red";
    x.style.boxShadow = "0 0 0.3rem red";
  } else {
    x.style.borderColor = "green";
    x.style.boxShadow = "0 0 0.3rem green";
  }
}

bill.addEventListener("change", validateAllInput);
service.addEventListener("change", validateAllInput);
people.addEventListener("change", validateAllInput);
calculate.disabled = true;

//Validate input of the form (of bill service and people)
function validateAllInput() {
  if (bill.value >= 1 && service.value != 0 && people.value >= 1) {
    calculate.disabled = false;
  } else {
    calculate.disabled = true;
  }
}

function calculateTip() {
  //check the amount of people
  //if more than 1 person - the word "each" will appear next to the $ tipp
  if (people.value == 1) {
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  }

  //calculate tip
  var result = (bill.value * service.value) / people.value;
  //round to two decimal places
  result = Math.round(result * 100) / 100;
  //always have only two digits after decimal point
  result = result.toFixed(2);

  //display the result
  document.getElementById("result").style.display = "flex";
  document.getElementById("tip").innerHTML = "$ " + result;
}

calculate.onclick = function () {
  calculateTip();
};
