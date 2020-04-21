var jhon = {
  fullName: "john Smith",
  bill: [124, 48, 268, 180, 42],
  tipCalculator: function () {
    this.tipArray = [];
    this.totalBill = [];
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        var tip = (this.bill[i] * 20) / 100;
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        var tip = (this.bill[i] * 15) / 100;
      } else {
        var tip = (this.bill[i] * 10) / 100;
      }
      this.tipArray[i] = tip;
      this.totalBill[i] = this.bill[i] + tip;
    }
  },
};

var mark = {
  fullName: "mark clark",
  bill: [77, 10, 110, 45],
  tipCalculator: function () {
    this.tipArray = [];
    this.totalBill = [];
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        var tip = (this.bill[i] * 20) / 100;
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        var tip = (this.bill[i] * 10) / 100;
      } else {
        var tip = (this.bill[i] * 25) / 100;
      }
      this.tipArray.push(tip);
      this.totalBill.push(this.bill[i] + tip);
    }
  },
};

function tipAverage(tipArray) {
  var sum = 0;
  for (var i = 0; i < tipArray.length; i++) {
    sum += tipArray[i];
  }
  return sum / tipArray.length;
}
jhon.tipCalculator();
mark.tipCalculator();
console.log(jhon, mark);

jhon.average = tipAverage(jhon.tipArray);
mark.average = tipAverage(mark.tipArray);

if (jhon.average > mark.average) {
  console.log(jhon.fullName + " family pays hieghes tips of " + jhon.average);
} else if (jhon.average < mark.average) {
  console.log(mark.fullName + " family pays hieghes tips of " + mark.average);
} else {
  console.log(
    jhon.fullName +
      " family And " +
      mark.fullName +
      " family paid the equal tip"
  );
}
