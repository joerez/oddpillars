<head>
  <title>OddPillars Clubhouse</title>

  <script src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
  <script src="https://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>

  <script src="jquery.ui.touch-punch.min.js"></script>






  <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"/>



  <link rel="stylesheet" type="text/css" href="style.css" />


</head>
<body>

  <script src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
  <script src="https://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>

  <script src="jquery.ui.touch-punch.min.js"></script>

  <div class="clubhouse">

    <button id="button1">Add Box 1</button>
    <button id="button2">Add Box 2</button>
    <button id="button3">Add Box 3</button>


    <div class="box" id="box1">
      <div class="boxtext">
        Drag me or resize me
        <span class="point" id="close1">X</span>
      </div>
    </div>

    <div class="box" id="box2">
      <div class="boxtext">
        Clubhouse under development.
        <span class="point" id="close2">X</span>

      </div>
    </div>

    <div class="box" id="box3">
      <div class="boxtext">
        Come back soon
        <span class="point" id="close3">X</span>
      </div>
    </div>


  </div>

<script>




$( function() {


  $('.box').draggable({ stack: ".box"});

  $('.box').resizable();

  $('#button1').click(function(){
    $('#box1').css("display", "block");
    $.notify("Box 1 Created", "success");
  })

  $('#button2').click(function(){
    $('#box2').css("display", "block");
    $.notify("Box 2 Created", "success");

  })

  $('#button3').click(function(){
    $('#box3').css("display", "block");
    $.notify("Box 3 Created", "success");

  })

  $('#close1').click(function(){
    $('#box1').css("display", "none");
    $.notify("Box 1 Deleted", "error");

  })

  $('#close2').click(function(){
    $('#box2').css("display", "none");
    $.notify("Box 2 Deleted", "error");

  })

  $('#close3').click(function(){
    $('#box3').css("display", "none");
    $.notify("Box 3 Deleted", "error");

  })



} );



</script>









  <script src="notify.min.js"></script>
  <script src="../scroll.js"></script>

</body>
