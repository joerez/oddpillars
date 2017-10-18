<html>
<head>
  <meta charset="UTF-8">
  <title>OddPillars - Insiders Guide to the Bohemian Grove</title>


  <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>

  <link rel="stylesheet" type="text/css" href="../style.css" />
  <link rel="stylesheet" type="text/css" href="https://codingforkids.us/animate.css" />
  <link rel="stylesheet" type="text/css" href="https://codingforkids.us/styles/jquery-ui-1.10.4.custom.min.css"
  <link rel="stylesheet" type="text/css" href="https://www.oddpillars.com/blog/style.css" />

  <!--<link href="https://fonts.googleapis.com/css?family=Nosifer" rel="stylesheet"> -->
  <link rel="stylesheet" type="text/css" href="./slick/slick.css">
    <link rel="stylesheet" type="text/css" href="./slick/slick-theme.css">
    <style type="text/css">
      html, body {
        margin: 0;
        padding: 0;
      }

      * {
        box-sizing: border-box;
      }

      .slider {
          width: 50%;
          margin: 100px auto;
      }

      .slick-slide {
        margin: 0px 20px;
      }

      .slick-slide img {
        width: 100%;
      }

      .slick-prev:before,
      .slick-next:before {
        color: black;
      }


      .slick-slide {
        transition: all ease-in-out .3s;
        opacity: 1;
      }

      .slick-active {
        opacity: 1;
      }

      .slick-current {
        opacity: 1;
      }

      .blogindex {
        height: 1000px;
        background-color: black;
        color: white;
      }


      .topcon {
        height: 20%;
        background-color: rgba(0, 0, 255, 0.5);
      }

    </style>


</head>

<body>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
  <script src="https://codingforkids.us/javascript/jquery-ui.js"></script>

<script src="../scripts.js"></script>

<script src="../dist/wow.min.js"></script>
      <script>
       new WOW().init();
     </script>



<!---BEGIN WEBSITE CONTENT------------------------------------------------>

<!--Navigation bar-->

  <?php include "../nav.php"; ?>

<!--end of Navigation bar-->

<!--blog page-->
<div class="blogindex">

<div class="container topcon">
  <?php include "blogslide.php"; ?>

<div class="testthis">
  <h1></h1>
</div>
</div> <!--top container-->

</div> <!--blog index-->

<!--End blog page-->

<!--Latest Blog-->

<?php include "../latestblog.php"; ?>

<!--End latest Blog-->





<!--Footer-->

<?php include "../footer.php"; ?>

<!--end of Footer-->


<script src="../scroll.js"></script>

</body>
</html>
