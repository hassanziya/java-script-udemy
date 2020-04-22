//Hoistipng////////////////////

// calculateAge(1949);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

//retirement(1999);

// var retirement = function (year) {
//   console.log(65 - (2015 - year));
// };

// console.log(age);
// var age = 23;
// console.log(age);

// function foo() {
//   var age = 25;
//   console.log(age);
// }

// foo();
// console.log(age);

/**
 *******************First Scoping Example*********************
 */

// var a = "hello ";
// fisrt();

// function fisrt() {
//   var b = " Hi! ";
//   second();

//   function second() {
//     var c = " hey!";
//     console.log(a + b + c);
//   }
// }

/**
 ***********The 'This' KeyWord************
 */

//console.log(this);

// calculateAge(1985);
// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);
// }

var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  },
};

john.calculateAge();

var mike = {
  name: "mike",
  yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
