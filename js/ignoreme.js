$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    var numberStr = $("#userInput").val();
    var numArray = numberStr.split("").reverse();
    var romanArray = [];

    var places = numberStr.length; //determines if it's 1s, 10s, 100s, 1000s





if (number < 1) {
  alert("enter larger number");
} else if (number < 10 ) {
  var firstNumber = parseInt(numberStr.slice(0,1));
    if (number === 1) {
    var numeral = numberStr.split("1").join("I");
     alert(numeral);
   } else if (number === 2) {
     var numeral = numberStr.split("2").join("II");
     alert(numeral);
   } else if (number === 3) {
     var numeral = numberStr.split("3").join("III");
     alert(numeral);
   } else if (number === 4) {
     var numeral = numberStr.split("4").join("IV");
     alert(numeral);
   } else if (number === 5) {
     var numeral = numberStr.split("5").join("V");
     alert(numeral);
   } else if (number === 6) {
     var numeral = numberStr.split("6").join("VI");
     alert(numeral);
   } else if (number === 7) {
     var numeral = numberStr.split("7").join("VII");
     alert(numeral);
   } else if (number === 8) {
     var numeral = numberStr.split("8").join("VIII");
     alert(numeral);
   } else if (number === 9) {
     var numeral = numberStr.split("9").join("IX");
     alert(numeral);
   }
  romanArray.push(firstNumber);
  alert(romanArray);
} else if (number < 100) {
  var firstNumber = parseInt(numberStr.slice(0,1));
  var secondNumber = parseInt(numberStr.slice(1,2));
    if (number === 1) {
    var numeral = numberStr.split("1").join("X");
     alert(numeral);
   } else if (number === 2) {
     var numeral = numberStr.split("2").join("XX");
     alert(numeral);
   } else if (number === 3) {
     var numeral = numberStr.split("3").join("XXX");
     alert(numeral);
   } else if (number === 4) {
     var numeral = numberStr.split("4").join("XL");
     alert(numeral);
   } else if (number === 5) {
     var numeral = numberStr.split("5").join("L");
     alert(numeral);
   } else if (number === 6) {
     var numeral = numberStr.split("6").join("LX");
     alert(numeral);
   } else if (number === 7) {
     var numeral = numberStr.split("7").join("LXX");
     alert(numeral);
   } else if (number === 8) {
     var numeral = numberStr.split("8").join("LXXX");
     alert(numeral);
   } else if (number === 9) {
     var numeral = numberStr.split("9").join("XC");
     alert(numeral);
   }
  romanArray.push(firstNumber,secondNumber);
  alert(firstNumber + "" + secondNumber);
  alert(romanArray);
} else if (number < 1000) {
  var firstNumber = parseInt(numberStr.slice(0,1));
  var secondNumber = parseInt(numberStr.slice(1,2));
  var thirdNumber = parseInt(numberStr.slice(2,3));
    if (number === 1) {
    var numeral = numberStr.split("1").join("C");
     alert(numeral);
   } else if (number === 2) {
     var numeral = numberStr.split("2").join("CC");
     alert(numeral);
   } else if (number === 3) {
     var numeral = numberStr.split("3").join("CCC");
     alert(numeral);
   } else if (number === 4) {
     var numeral = numberStr.split("4").join("CD");
     alert(numeral);
   } else if (number === 5) {
     var numeral = numberStr.split("5").join("D");
     alert(numeral);
   } else if (number === 6) {
     var numeral = numberStr.split("6").join("DC");
     alert(numeral);
   } else if (number === 7) {
     var numeral = numberStr.split("7").join("DCC");
     alert(numeral);
   } else if (number === 8) {
     var numeral = numberStr.split("8").join("DCCC");
     alert(numeral);
   } else if (number === 9) {
     var numeral = numberStr.split("9").join("CM");
     alert(numeral);
   }
  romanArray.push(firstNumber,secondNumber,thirdNumber);
  alert(firstNumber + "" + secondNumber + "" + thirdNumber);
} else if (number < 4000) {
  var firstNumber = parseInt(numberStr.slice(0,1));
  var secondNumber = parseInt(numberStr.slice(1,2));
  var thirdNumber = parseInt(numberStr.slice(2,3));
  var fourthNumber = parseInt(numberStr.slice(3,4));
    if (number === 1) {
    var numeral = numberStr.split("1").join("M");
     alert(numeral);
   } else if (number === 2) {
     var numeral = numberStr.split("2").join("MM");
     alert(numeral);
   } else if (number === 3) {
     var numeral = numberStr.split("3").join("MMM");
     alert(numeral);
   }

  romanArray.push(firstNumber,secondNumber,thirdNumber,fourthNumber);
  alert(firstNumber + "" + secondNumber + "" + thirdNumber + "" + fourthNumber);
} else
  alert("Please enter a number under 4000");
});
