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

  Questions.prototype.checkAnswer = function (answer) {
    if (this.correct === answer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer Better luck next time!");
    }
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

  var n = Math.floor(Math.random() * arrQuestions.length);

  arrQuestions[n].displayQuestion();

  var answer = parseInt(prompt("Please the coreect answer"));
  arrQuestions[n].checkAnswer(answer);
})();
