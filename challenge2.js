var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;
var johnTeamAverage = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;

var mikeTeamScore1 = 116;
var mikeTeamScore2 = 94;
var mikeTeamScore3 = 123;
var mikeTeamAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;

var maryTeamScore1 = 97;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;
var maryTeamAverage = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;

if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
  console.log("Johns team win with an average score of " + johnTeamAverage);
} else if (
  mikeTeamAverage > johnTeamAverage &&
  mikeTeamAverage > maryTeamAverage
) {
  console.log("Mikes Team win with an average score of " + mikeTeamAverage);
} else if (
  maryTeamAverage > johnTeamAverage &&
  maryTeamAverage > mikeTeamAverage
) {
  console.log("Marys team won with an average score of " + maryTeamAverage);
} else {
  console.log("the match was tied");
}
