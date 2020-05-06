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
  //some code
})();

/**
 **************GLOBAL APP CONTROLLER***************
 */
var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    // 1.Get the Field input Data
    // 2. add the item to budget controller
    // 3. Add the item to the UI
    // 4. calculate the budget
    // 5. display the budget on the UI

    console.log("it Works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
