// ////business logic
// var numberFirst = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var numeralsFirst = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
// var numberSecond = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
// var numeralsSecond = ["X", "XX", "XX[DON'T FORGET TO ADD ANOTHER X]", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// var numberThird = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
// var numeralsThird = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// var numberFourth = ["1000", "2000", "3000"];
// var numeralsFourth = ["M", "MM", "MMM"];
// debugger;

// var numberTranslator = function(number) {
//
//   var number = 6;
//
//   var indexNumber = (numberStr.length-1);
//   alert(indexNumber);
//
//   if (indexNumber === 0) {
//     var digitFirst = number.slice(0,1);
//   } else if (indexNumber === 1) {
//     var digitFirst = number.slice(0,1);
//     var digitSecond = number.slice(1,2);
//   } else if (indexNumber === 2) {
//     var digitFirst = number.slice(0,1);
//     var digitSecond = number.slice(1,2);
//     var digitThird = number.slice(2,3);
//   } else if (indexNumber === 3) {
//     var digitFirst = number.slice(0,1);
//     var digitSecond = number.slice(1,2);
//     var digitThird = number.slice(2,3);
//     var digitFourth = number.slice(3,4);
//   }
//   if (digitFirst === 1) {
//     digitFirst.split("1").join("I");
//   } else if (digitFirst === 2) {
//     digitFirst.split("2").join("II");
//   } else if (digitFirst === 3) {
//     digitFirst.split("3").join("III");
//   } else if (digitFirst === 4) {
//     digitFirst.split("4").join("IV");
//   } else if (digitFirst === 5) {
//     digitFirst.split("5").join("V");
//   } else if (digitFirst === 6) {
//     digitFirst.split("6").join("VI");
//   } else if (digitFirst === 7) {
//     digitFirst.split("7").join("VII");
//   } else if (digitFirst === 8) {
//     digitFirst.split("8").join("VIII");
//   } else if (digitFirst === 9) {
//     digitFirst.split("9").join("IX");
// }
// }//fxn end
//////user logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userInput").val());
    var numberStr = $("#userInput").val();

    //cannot accept numbers higher than 3999
    if (number > 4000 || number < 1) {
      alert("Please enter a number between 1 and 3999.")
    }

    for (var i = 0; i < numberStr.length; i++) {
      if (number === 1) {
      var numeral = numberStr.split("1").join("I");
       alert(numeral);
      }
    }

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
