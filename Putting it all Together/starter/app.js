/**
 ************BUDGET CONTROLLER*************
 */
var budgetController = (function () {
  //some code
})();

/**
 ************UI CONTROLLER*************
 */
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

/**
 **************GLOBAL APP CONTROLLER***************
 */
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  var ctrlAddItem = function () {
    // 1.Get the Field input Data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. add the item to budget controller
    // 3. Add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI
  };
  document
    .querySelector(DOM.inputButton)
    .addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
