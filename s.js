function creerCompteur() {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

var count = creerCompteur();
count();


// 2
function creezCounter(first) {
  var counter = first;
  return function () {
    counter + 1;
    return counter;
  };
}


var count = creezCounter(100);

// 3

