////business logic
var numberFirst = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var numeralsFirst = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
var numberSecond = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
var numeralsSecond = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var numberThird = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
var numeralsThird = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var numberFourth = ["1000", "2000", "3000"];
var numeralsFourth = ["M", "MM", "MMM"];




//////user logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userInput").val());


    // cannot accept numbers higher than 3999

    // add value of all symbols

    // no more than three identical symbols in a row

    // separate ones, tens, hundreds, and thousands

  });//event prevent default
});//end doc ready
