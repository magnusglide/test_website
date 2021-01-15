function calculateTip() {
  //get input
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;

  //validate input
  if (isNaN(bill) || bill === "" || isNaN(people) || service == 0) {
    alert("Please enter correct values");
    return;
  }

  //check input of people
  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  }
  //calculate tip
  var result = (bill * service) / people;
  //round to two decimal places
  result = Math.round(result * 100) / 100;
  //always have only two digits after decimal point
  result = result.toFixed(2);

  //display the result
  document.getElementById("result").style.display = "flex";
  document.getElementById("tip").innerHTML = "$ " + result;
}

document.getElementById("calculate").onclick = function () {
  calculateTip();
};
