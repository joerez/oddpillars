window.onload = function() {



  var cipher = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 6,
    'I': 5,
    'J': 4,
    'K': 3,
    'L': 2,
    'M': 1,
    'N': 1,
    'O': 2,
    'P': 3,
    'Q': 4,
    'R': 5,
    'S': 6,
    'T': 7,
    'U': 6,
    'V': 5,
    'W': 4,
    'X': 3,
    'Y': 2,
    'Z': 1,
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
  console.log(cipherStrArray)

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


  document.querySelector('#bottom').classList.add('goaway');

  document.getElementById('submit').addEventListener('click', function() {
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




    //document.getElementById('wordtovalreduced').textContent = getReduced(wordNumVal);

    //document.getElementById('reduced').textContent = function(paramenter);


  });







  document.getElementById('reset').addEventListener('click', function() {

    //document.querySelector('.bottombox').classList.add('goaway');


    document.querySelector('.bottombox').classList.remove('animated', 'fadeInUpBig');

    document.querySelector('.bottombox').classList.add('animated', 'fadeOutDownBig');

  })
};
