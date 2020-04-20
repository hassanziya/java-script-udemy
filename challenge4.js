var john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.43,
  mass: 55,
  johnBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

var mark = {
  firstName: "Mark",
  lastName: "Clark",
  height: 1.35,
  mass: 47,
  markBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

console.log(john.johnBMI(), mark.markBMI());

if (john.johnBMI() > mark.markBMI()) {
  console.log(
    john.firstName +
      " " +
      john.lastName +
      " has hieghest BMI of " +
      john.johnBMI()
  );
} else if (mark.markBMI() > john.johnBMI()) {
  console.log(
    mark["firstName"] +
      " " +
      mark["lastName"] +
      " has hieghest BMI of " +
      mark.markBMI()
  );
} else {
  console.log("They Both Have same BMI Of " + john.johnBMI());
}
