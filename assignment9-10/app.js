// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// let city = prompt("Enter your city");
// if (city === "karachi" ){
// alert("Welcome to city of lights");
// };



// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Enter your gender");
// if(gender.toLocaleLowerCase() === "female") {
//     alert("Good Morning Ma'am");
// } else if(gender.toLocaleLowerCase() === "male") {
//     alert("Good Morning Sir");
// }



// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// let signal = prompt("Enter the traffic signal color");
// if (signal.toLowerCase() === "red"){
//     alert("Must Stop");
// } else if(signal.toLowerCase() === "yellow"){
//     alert("Ready to move");
// } else if (signal.toLocaleLowerCase() === "green"){
//     alert("Move now");
// }
    


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres show the message “Please refill the fuel in your car”
// let fuel = prompt("Enter the remaining fuel in car (in litres) ");
// if (fuel < 0.25){
//     alert("Please refill the fuel in your car")
// } else{
//     alert("You have enough fuel");
// }



// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a .
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } // Output: the alert will be displayed


// b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } // Output: No alert will be displayed


// c.
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// } // Output: the alert will be displayed



// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// } // Output: the alert will be displayed



// // e.
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// } // Output: the alert will be displayed (True)


// // f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }  // Output: the alert will be displayed 





// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// let subject1 = prompt("Enter marks for Subject English:");
// let subject2 = prompt("Enter marks for Subject Physic:");
// let subject3 = prompt("Enter marks for Subject Chemistry:");
// let totalMarks = prompt("Enter the total marks:");
// let percentage = (subject1 + subject2 + subject3) / totalMarks;
// if (percentage >= 80){
//     document.write("Grade: A1, Percentage: " + percentage * 100 + "%");
// }
// else if (percentage >= 70){
//     document.write("Grade: A, Percentage: " + percentage * 100 + "%");
// } else if (percentage >= 60){
//     document.write("Grade: B, Percentage: " + percentage * 100 + "%")
// } else if (percentage >= 60){
//     document.write("Grade: F, Percentage: " + percentage * 100 + "%")
// }  




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correctanswer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = prompt("Guess the secret number (between 1 and 10)");
// if (guess == secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (guess == secretNumber + 1 || guess == secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Sorry, try again");
// } console.log("The secret number is: " + secretNumber);




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// let number = prompt("Enter any number");
// if (number % 3 == 0) {
//     alert("The number is divisible by 3 ");
// } else {
//     alert("The number is not divisible by 3");
// }




// 9. Write a program that checks whether the given input is an even number or an odd number.
// let number = prompt("Enter a number ");
// if (number % 2 == 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }





// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// let temperature = prompt("Enter temperature in your area");
// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else 
// if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else
// if (temperature > 20) {
//   alert("Today's Weather is cool.");
// } else
// if (temperature > 10) {
//   alert("OMG! Today's weather is so Cool.");
// } else 
// {
//   alert("temperature is too low.");
// }





// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
const op = prompt("Enter operation (+, -, *, /, %)");
let result;
if (op === "+") {
  result = num1 + num2;
} else if (op === "-") {
  result = num1 - num2;
} else if (op === "*") {
  result = num1 * num2;
} else if (op === "/") {
  result = num1 / num2;
} else if (op === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operator.");
}

document.write("Result  " + result);





// END




















































