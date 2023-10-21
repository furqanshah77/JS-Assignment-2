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




// // Question No # (4)

// function generateTable() {

//     var number = prompt("Enter a number:");
//     var tableString = "Your Value is" + " " + number + ":<br>";

//     document.write(tableString);
//     for (var i = 1; i <= 10; i++) {
//         document.write(+ number + " x " + i + "=" + (number * i) + "<br>");
//     }

// }

// generateTable();





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




// // Question No # (6)

// var totalMarks = +prompt("Enter Your Total Marks");

// var obtainedMarks = +prompt("Enter Your Obtained Marks");

// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade = ""

// document.write('Total Marks :' + " " + totalMarks + "<br>");

// document.write("Marks Obtained :" + " " + obtainedMarks + "<br>");

// document.write("Percentage :" + " " + Math.round(percentage) + "%" + "<br>");

// if (percentage <= 40) {
//     grade = "Failed"
// } else if (percentage >= 90) {
//     grade = "A+"
// } else if (percentage >= 80) {
//     grade = "A"
// } else if (percentage >= 70) {
//     grade = "B"
// } else if (percentage >= 60) {
//     grade = "C"
// } else if (percentage >= 50) {
//     grade = "E"
// } else if (percentage >= 40) {
//     grade = "D"
// };

// document.write("Grade :" + " " + grade + "<br>");



// // Question No # (7)

// var usDEollar = +prompt("How Many Dollar You Have?");

// var riyal = +prompt("How Many Riyal You Have?");

// var pkr = (usDEollar * 275.00) + (riyal * 73.31);

// document.write("Total Currency In PKR Is" + " " + "=" + " " + pkr + "<br>")




// // Question No # (8)

// var price1 = 650;

// var item1 = +prompt("Enter item1 your quatity");

// var price2 = 100;

// var item2 = +prompt("Enter your Items 2 quantity");

// var deliveryCharges = 100;

// var totalCost = (price1 * item1) +(price2 * item2) + deliveryCharges;

// document.write("Price Of Item 1 is " + " " + price1 + "<br>");

// document.write('Quantity Of Item 1 is'+" " + item1 + '<br>');

// document.write('Price Of Item 2 is' +" " + price2 + "<br>");

// document.write("Quantity Of Item 2 is" + " " + item2 + "<br>");

// document.write("Shipping Charges" + deliveryCharges + "<br>");

// document.write("Total Cost Of Your Order is" + " " + totalCost + "<br>")




// // Question No # (9)

// var birthYear = +prompt("Enter Your Birth Year");

// var date = new Date();

// var year = date.getFullYear();

// var age = year - birthYear ;

// document.write("Your Age is " + " "+ age + "<br>" )