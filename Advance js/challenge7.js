// (function () {
//   function Questions(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Questions.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + " : " + this.answers[i]);
//     }
//   };

//   Questions.prototype.checkAnswer = function (answer) {
//     if (this.correct === answer) {
//       console.log("Correct answer!");
//     } else {
//       console.log("Wrong answer Better luck next time!");
//     }
//   };

//   var q1 = new Questions(
//     "is javascript is the best programming language?",
//     ["YES", "NO"],
//     0
//   );

//   var q2 = new Questions(
//     "Whats the name of this course's teacher?",
//     ["john", "Michail", "jonas"],
//     2
//   );

//   var q3 = new Questions(
//     "What does best describe coding??",
//     ["boring", "hard", "Fun", "Tediuos"],
//     2
//   );
//   arrQuestions = [q1, q2, q3];

//   var n = Math.floor(Math.random() * arrQuestions.length);

//   arrQuestions[n].displayQuestion();

//   var answer = parseInt(prompt("Please Enter the coreect answer"));
//   arrQuestions[n].checkAnswer(answer);
// })();

/**
 ***********Challenge 7 Part2***********
 */

(function () {
  function Questions(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Questions.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + " : " + this.answers[i]);
    }
  };

  Questions.prototype.checkAnswer = function (answer, callBack) {
    if (this.correct === answer) {
      var sc;
      console.log("Correct answer!");
      sc = callBack(true);
    } else {
      console.log("Wrong answer Better luck next time!");
      sc = callBack(false);
    }
    this.displayScore(sc);
  };

  Questions.prototype.displayScore = function (score) {
    console.log("Your current score is " + score);
    console.log("----------------------------------------------------");
  };

  var q1 = new Questions(
    "is javascript is the best programming language?",
    ["YES", "NO"],
    0
  );

  var q2 = new Questions(
    "Whats the name of this course's teacher?",
    ["john", "Michail", "jonas"],
    2
  );

  var q3 = new Questions(
    "What does best describe coding??",
    ["boring", "hard", "Fun", "Tediuos"],
    2
  );

  arrQuestions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * arrQuestions.length);

    arrQuestions[n].displayQuestion();
    var answer = prompt("Please Enter the coreect answer");

    if (answer !== "exit") {
      arrQuestions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
