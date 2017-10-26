// ////business logic
// var numberTranslator = function(number) {

// var ones = ["I", "V", "X"]
// var tens = ["X", "L", "C"]
// var hundreds = ["C", "D", "M"]
// var thousands = ["M"]

var romanNumerals = ["M", "CM", "D", "DC", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var decimalPoints = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var answer = [];


//////user logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    var numberStr = $("#userInput").val();
    var numArray = numberStr.split("").reverse();
    var romanArray = [];

    var places = numberStr.length; //determines if it's 1s, 10s, 100s, 1000s


    for (var i = 0; i < places; i++)

    if (places === 1) {
    } else if (places === 2) {

    } else if (places === 3) {

    } else if (places === 4) {

    }



    // if (number < 1) {
    //   alert("enter larger number");
    // } else if (number < 10 ) {
    //   var firstNumber = parseInt(numberStr.slice(0,1));
    //   romanArray.push(firstNumber);
    //   alert(romanArray);
    // } else if (number < 100) {
    //   var firstNumber = parseInt(numberStr.slice(0,1));
    //   var secondNumber = parseInt(numberStr.slice(1,2));
    //   romanArray.push(firstNumber,secondNumber);
    //   alert(firstNumber + "" + secondNumber);
    //   alert(romanArray);
    // } else if (number < 1000) {
    //   var firstNumber = parseInt(numberStr.slice(0,1));
    //   var secondNumber = parseInt(numberStr.slice(1,2));
    //   var thirdNumber = parseInt(numberStr.slice(2,3));
    //   romanArray.push(firstNumber,secondNumber,thirdNumber);
    //   alert(firstNumber + "" + secondNumber + "" + thirdNumber);
    // } else if (number < 4000) {
    //   var firstNumber = parseInt(numberStr.slice(0,1));
    //   var secondNumber = parseInt(numberStr.slice(1,2));
    //   var thirdNumber = parseInt(numberStr.slice(2,3));
    //   var fourthNumber = parseInt(numberStr.slice(3,4));
    //   romanArray.push(firstNumber,secondNumber,thirdNumber,fourthNumber);
    //   alert(firstNumber + "" + secondNumber + "" + thirdNumber + "" + fourthNumber);
    // } else
    // alert("Please enter a number under 4000");
    //
    //
    //
    // if (number === 1) {
    //    var numeral = numberStr.split("1").join("I");
    //     alert(numeral);
    //   }

    // if (number > 4000 || number < 1) {
    //   alert("Please enter a number between 1 and 3999.")
    // }
    //
    // for (var i = 0; i < numberStr.length; i++) {
    //   if (number === 1) {
    //   var numeral = numberStr.split("1").join("I");
    //    alert(numeral);
    //  } else if (number === 2) {
    //    var numeral = numberStr.split("2").join("II");
    //    alert(numeral);
    //  } else if (number === 3) {
    //    var numeral = numberStr.split("3").join("III");
    //    alert(numeral);
    //  } else if (number === 4) {
    //    var numeral = numberStr.split("4").join("IV");
    //    alert(numeral);
    //  } else if (number === 5) {
    //    var numeral = numberStr.split("5").join("V");
    //    alert(numeral);
    //  } else if (number === 6) {
    //    var numeral = numberStr.split("6").join("VI");
    //    alert(numeral);
    //  } else if (number === 7) {
    //    var numeral = numberStr.split("7").join("VII");
    //    alert(numeral);
    //  } else if (number === 8) {
    //    var numeral = numberStr.split("8").join("VIII");
    //    alert(numeral);
    //  } else if (number === 9) {
    //    var numeral = numberStr.split("9").join("IX");
    //    alert(numeral);
    //  }
    // }
    // } else if (number === 2) {
    //
    // }
    //


    // var result = numberTranslator(number);
    // alert();


    // var numberTranslator = function(number) {
    //   var indexNumber = (numberStr.length - 1);
    //   alert(indexNumber);
    //   var firstNumber = number.
    // }


    // // add value of all symbols
    // var numerals = ["I", "V", "X", "L", "C", "D", "M"]
    // var numeralValues = [1, 5, 10, 50, 100, 500, 1000]

    // no more than three identical symbols in a row

    // number.split();
    //   for (i = 0; i < numbers.length; i++) {
    //
    //   }
    //


    // var numberArray = number.split("");


    // separate ones, tens, hundreds, and thousands, then join as a string

  });//event prevent default
});//end doc ready
