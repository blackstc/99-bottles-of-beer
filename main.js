
for (var bottles = 99; bottles >= 0; bottles--) {
  var firstVerse = bottles + " bottles of beer on the wall, ";
  var secondVerse = bottles + " bottles of beer.  Take one down and pass it around, " + (bottles - 1);

  if (bottles > 2) {
    console.log(firstVerse + secondVerse +  " bottles of beer on the wall.");
  } else if (bottles === 2) {
    console.log(firstVerse + secondVerse + " bottle of beer on the wall.");
  } else if (bottles === 1) {
    console.log(bottles + " bottle of beer on the wall.  " + bottles + " bottle of beer.  Take one down.  Pass it around.  " + (bottles - 1) + " bottles of beer on the wall.");
  };
}
