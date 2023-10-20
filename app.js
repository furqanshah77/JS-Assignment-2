// // Question No # (1)

// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number")

// var result = num1 + num2;

// alert("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result);
// document.write("Sum of " + " "+num1+" " +"and " + " " + num2+" " +"is" + " " + result+ "<br>");






// // Question No # (2)

// // a) Declare a variable
// var myVariable;

// // b) Show the value of variable in your browser
// document.write("Value after variable declaration is:" + myVariable + "<br>");

// // c) Initialize the variable

// var myVariable = 5;

// // d) Show the value of variable in your browser

// document.write("Initial Value :" + myVariable + "<br>");

// //e. Increment the variable.
// myVariable++;

// // f. Show the value of variable in your browser
// document.write("value after increment is :" + myVariable + "<br>");

// // g. Add 7 to the variable.
// myVariable += 7;

// //h. Show the value of variable in your browser
// document.write("value after addition is :" + myVariable + "<br>");

// // i. Decrement the variable.
// myVariable--;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.

// document.write("value after decrement is :" + myVariable + "<br>");

// //k. Show the remainder after dividing the variable's value by 3.

// var remainder = myVariable % 3;

// //l. Output : “The remainder is : 0”.

// document.write("The remainder is : " + remainder + "<br>");




// // Question No # (3)

// var price = 600;

// var ticket = +prompt("How Many Ticket You Want's");

// var totle = price * ticket;

// alert("Totle Cost To Buy" + " " + ticket + " " + "Tickets" + " " + "To A Movie Is" + " " + totle + " " + "PKR");

// document.write("Totle Cost To Buy" + " " + ticket + " " + "Tickets" + " " + "To A Movie Is" + " " + totle + " " + "PKR"); 




// Question No # (4)

function generateTable() {

    var number = prompt("Enter a number:");
    var tableString = "Your Value is" + " " + number + ":<br>";

    document.write(tableString);
    for (var i = 1; i <= 10; i++) {
        document.write(+ number + " x " + i + "=" + (number * i) + "<br>");
    }

}

generateTable();





// // Question No # (5)

// // // Part a
// var celsiusTemperature = prompt("Enter °C");

// // // Part b
// var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");


// // Part c
// var fahrenheitTemperature = prompt("Enter °F");

// // Part d
// var celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;

// document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");