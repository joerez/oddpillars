window.onload = function() {



  var cipher = {
    'A': 6,
    'B': 12,
    'C': 18,
    'D': 24,
    'E': 30,
    'F': 36,
    'G': 42,
    'H': 48,
    'I': 54,
    'J': 60,
    'K': 66,
    'L': 72,
    'M': 78,
    'N': 84,
    'O': 90,
    'P': 96,
    'Q': 102,
    'R': 108,
    'S': 114,
    'T': 120,
    'U': 126,
    'V': 132,
    'W': 138,
    'X': 144,
    'Y': 150,
    'Z': 156,
    ' ': ' '
  }

  function getCipher(str){
    var wordArr = str.split('')
    cipherArr = [];
    wordArr.forEach(function(char){
      cipherArr.push(cipher[char.toUpperCase()]);
    });
    cipherStr = cipherArr.toString().replace(/,/g, '');

    return cipherStr;
  };

  function getTotalFromCipher(cipherStr) {
    var gemTotal = 0;

    for (var i = 0; i < cipherStr.length; i++){
      gemTotal += Number(cipherStr[i]);
    }

    return gemTotal;
  };


function getReducedFromCipher(cipherStr) {
  var gemReduced = '';

  var cipherStrArray = cipherStr.split(' ');

  reducedCipherArr = [];
  cipherStrArray.forEach(function(currentStr) {
    while (currentStr.length > 1) {
      var sum = 0;
      for(var i = 0; i < currentStr.length; i++){
        sum += parseInt(currentStr[i]);
      }
      currentStr = sum.toString();
    }
    reducedCipherArr.push(currentStr);
  });
  var returnedStr = reducedCipherArr.toString().replace(/,/g, ' ');

  return returnedStr;
}

function getTotalReduced(reducedCipherStr) {
  var gemReduced = '';

  var cipherStrArray = cipherStr.split(' ');
  var currentStr = cipherStrArray.toString().replace(/,/g, '');
  while (currentStr.length > 1) {
    var sum = 0;
    for(var i = 0; i < currentStr.length; i++){
      sum += parseInt(currentStr[i]);
    }
    currentStr = sum.toString();
  }
  var returnedStr = currentStr;

  return returnedStr;
};


  document.querySelector('#bottom').classList.add('goaway');

  document.getElementById('submit').addEventListener('click', function() {
    document.querySelector('.bottombox').style.display = 'block';

    document.querySelector('.bottombox').classList.remove('goaway');
    document.querySelector('.bottombox').classList.remove('animated', 'fadeOutDownBig');

    document.querySelector('.bottombox').classList.add('animated', 'fadeInUpBig');




    var word = document.getElementById("input").value;
    document.querySelector('.wordGiven').textContent = word;

    var wordNumVal = getCipher(word);




    document.getElementById('wordtoval').textContent = wordNumVal;


    document.getElementById('total').textContent = getTotalFromCipher(wordNumVal);

    var reducedCipherStr = getReducedFromCipher(cipherStr);

    document.getElementById('wordtovalreduced').textContent = reducedCipherStr;

    var totalReducedStr = getTotalReduced(reducedCipherStr);

    document.getElementById('reduced').textContent = totalReducedStr;


    //document.getElementById('wordtovalreduced').textContent = getReduced(wordNumVal);

    //document.getElementById('reduced').textContent = function(paramenter);


  });







  document.getElementById('reset').addEventListener('click', function() {

    //document.querySelector('.bottombox').classList.add('goaway');
    document.querySelector('.bottombox').style.display = 'none';

    document.querySelector('.bottombox').classList.remove('animated', 'fadeInUpBig');

    document.querySelector('.bottombox').classList.add('animated', 'fadeOutDownBig');

  })
};
