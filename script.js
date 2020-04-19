// console.log("hello World again");

/* **********Variables********** */

// var firstName = "john"; //String dataType
// console.log(firstName);

// var lastName = "Smith";
// var age = 26; //number Datatype

// var fullAge = true; //Boolean dataType
// console.log(fullAge);

// var job; //Undefined dataType
// console.log(job);

/* #############Variable Mutation And Type Correction############### */

/*var firstName = "john";
var age = 28;
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ": Is he Married? " +
    isMarried
);

age = "twenty eight";
job = "deriver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ": Is he Married? " +
    isMarried
);
var lastName = prompt("what is his last name");
console.log(firstName + " " + lastName);*/

/*******************
 * Operators
 */
// var year, yearJohn, yearMark;
// year = 2020;
// ageJohn = 28;
// ageMark = 33;
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;
// console.log(yearMark);

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);

/**
 * ######operator precedence######
 */

// var now = 2018;
// var yearJohn = 1998;
// var fullAge = 18;
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

/**
 * ~######If Else Statement#####
 */

// var firstName = "john";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is Married");
// } else {
//   console.log(firstName + " will Hopefully Marry Soon");
// }

// isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is Married");
// } else {
//   console.log(firstName + " will Hopefully Marry Soon");
// }

/**
 * *********Boolean Logic*********
 */

// var firstName = "john";
// var age = 25;
// if (age < 13) {
//   console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a Teenager");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man");
// } else {
//   console.log(firstName + " is a man");
// }

/**
 *********Ternary Operator*********
 */

// var firstName = "john";
// age = 16;

// age >= 18
//   ? console.log(firstName + " Drinks Bear")
//   : console.log(firstName + " Drinks Bear");
// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

/**
 *********Switch case*********
 */

// var job = "driver";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches kid how to code");
//     break;
//   case "driver":
//     console.log(firstName + " drive an uder in london");
//     break;
//   case "designer":
//     console.log(firstName + " desighn beautiful websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
//     break;
// }

/**
 ***********Truthy and falsy values and Equality Operator**************
 */

// var height;
// height = 23;
// if (height || height === 0) {
//   console.log("the variable is defined");
// } else {
//   console.log("the variable is not defined");
// }

// if (height == "23") {
//   console.log("the == operator does type coercion");
// }
