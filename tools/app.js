//document.querySelector('.bottombox').style.opacity = '0';




document.querySelector('.bottombox').classList.add('goaway');

document.getElementById('submit').addEventListener('click', function() {
  document.querySelector('.bottombox').classList.remove('goaway');
  document.querySelector('.bottombox').classList.remove('animated', 'fadeOutDownBig');

  document.querySelector('.bottombox').classList.add('animated', 'fadeInUpBig');

  var word = document.getElementById("input").value;


  document.querySelector('.wordGiven').textContent = word;

});






document.getElementById('reset').addEventListener('click', function() {

  //document.querySelector('.bottombox').classList.add('goaway');


  document.querySelector('.bottombox').classList.remove('animated', 'fadeInUpBig');

  document.querySelector('.bottombox').classList.add('animated', 'fadeOutDownBig');

})




/*

Cipher

A B C D E F G H I J K L M
1 2 3 4 5 6 7 6 5 4 3 2 1
N O P Q R S T U V W X Y Z

*/


const cipher = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 6,
  I: 5,
  J: 4,
  K: 3,
  L: 2,
  M: 1,
  N: 1,
  O: 2,
  P: 3,
  Q: 4,
  R: 5,
  S: 6,
  T: 7,
  U: 6,
  V: 5,
  W: 4,
  X: 3,
  Y: 2,
  Z: 1
}
