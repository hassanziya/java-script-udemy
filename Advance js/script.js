//Function Constructor

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// var john = new Person("john", 1999, "Teacher");
// var jane = new Person("jane", 2005, "Model");
// jane.calculateAge();
// john.calculateAge();

// var Employee = function (FirstName, lastName, yearOfBirth, job) {
//   this.FirstName = FirstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Employee.prototype.calculateAge = function () {
//   var age = 2020 - this.yearOfBirth;
//   console.log(
//     this.FirstName +
//       " " +
//       this.lastName +
//       " is " +
//       age +
//       " years old and his job is " +
//       this.job
//   );
// };

// var hassan = new Employee("Hassan", "ziya", 1999, "Software enginner");
// hassan.calculateAge();

/**
 *********Object.Create***********
 */

// var personProto = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1999;
// john.job = "teacher";

// var jane = Object.create(personProto, {
//   name: { value: "jane" },
//   yearOfBirth: { value: 1997 },
//   job: { value: "Designer" },
// });

// john.calculateAge();
// jane.calculateAge();

/**
 *********Passing Function As Argument*********
 */

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 80) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var heartRate = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(heartRate);

/**
 ***********Function Returning Function************
 */

// function interviewQuestions(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(name + ", can u please explain whats UX design is?");
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log(name + ", What subject do you teach ?");
//     };
//   } else {
//     return function (name) {
//       console.log("Hello, " + name + " What do you do?");
//     };
//   }
// }

// var teacherQuestion = interviewQuestions("teacher");
// var designerQuestions = interviewQuestions("designer");
// teacherQuestion("john");
// designerQuestions("john");
// interviewQuestions("---")("mark");

/**
 *********IIFE*********
 */

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
