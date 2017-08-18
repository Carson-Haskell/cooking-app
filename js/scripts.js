// -- converts gallons to quarts --
var galToQuarts = function(gallons) {
  return gallons * 4;
};
var gallons = parseInt(prompt("Please enter gallons: "));
var quarts = galToQuarts(gallons);
alert(gallons + " gallons is equivalent to " + quarts + " quarts.");

// -- converts quarts to cups --
var quartToCups = function(quarts) {
  return quarts * 4;
};
var quarts = parseInt(prompt("Please enter quarts: "));
var cups = quartToCups(quarts);
alert(quarts + " quarts is equivalent to " + cups + " cups.");

// -- converts cups to tablespoons --
var cupToTb = function(cups) {
  return cups * 16;
};
var cups = parseInt(prompt("Please enter cups: "));
var tb = cupToTb(cups);
alert(cups + " cups is equivalent to " + tb + " tablespoons.");

// -- converts tablespoons to teaspoons --
var tbToTs = function(tb) {
  return tb * 3;
};
var tb = parseInt(prompt("Please enter tablespoons: "));
var ts = tbToTs(tb);
alert(tb + " tablespoons is equivalent to " + ts + " teaspoons.");
