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
