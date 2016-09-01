<!DOCTYPE html>
<html>
  <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link href='https://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Francois+One' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="shortcut icon" href="faviconit/favicon.ico">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBu0D-29eYCskZXqbCK2VwoUoz2LJnMELM"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <meta name="decription" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Daniel Coelho">
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <title>Daniel Coelho - Contact</title>
  </head>
  <body class="contact">

  <header>
    <div class="menu" role="navigation">
    
      <!-- Menu icon -->
      <div class="icon-close">
       <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
  
      <!-- Menu -->
      <ul>
        <li><a href="index.html" title="Return to the home page!">Home</a></li> 
        <li><a href="portfolio.html" title="View my portfolio of all my work!">Portfolio</a></li>
        <li><a href="about.html" title="Learn more about me!">About</a></li>
        <li class="active"><a href="contact.html" title="Have a question or comment? Contact me!">Contact</a></li>
       </ul>
    </div>

   <div class="header" role="banner">
      <a href="index.html" title="Home Page"><img src="images/logo_white.png" id="logo" width="498" height="94" alt="logo" /></a>
      <a href="index.html" title="Home Page"><img src="images/dc_logo_white.png" id="smallLogo" width="130" height="130" alt="Small version of my logo for mobile"></a>
      
          <div class="icon-menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
            Menu
          </div>
     </div>     
    </header>
       
    <!-- Main body -->
    <div role="main">

       <div class="row">
      <h2>Contact Me</h2>
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="contactContent clearfix">
         <form method="post" action="contact.php">
                    <?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
  $from = 'From: Daniel Coelho Contact Form'; 
    $to = 'danielncoelho5@hotmail.com'; 
    $subject = 'Daniel Coelho Contact Form';
  $human = $_POST['human'];
  
  $body = "From:\n Name: $name\n E-Mail: $email\n Message:\n $message";
  
    if ($name != '' && $email != '' && $message !='') {
        if ($human == '4') {         
            if (mail ($to, $subject, $body, $from)) { 
          echo '<form><p class="success">Thank you ' . $_POST['name'] . ', your message has been sent!</p><form>';
      } else { 
          echo '<form><p class="error">Something went wrong, go back and please try again!</p><form>'; 
      } 
  } else if ($_POST['submit'] && $human != '4') {
      echo '<form><p class="error">You answered the anti-spam question incorrectly!</p><form>';
  }
    } else {
        echo '<p class="error">You need to fill in all required fields!</p>';
    }
}
?>
            <!--<label for="name">*Name:</label>-->
            <input type="text" id="name" name="name" required="required" placeholder="Your Name"><br /><br />
                    
           <!-- <label for="email">*Email:</label>-->
            <input name="email" id="email" type="email" required="required" placeholder="Your Email"><br /><br />
                    
           <!-- <label for="message">*Message:</label><br />-->
            <textarea name="message" id="message" required placeholder="Your Message" rows="5"></textarea><br />
            
            <label for="spam">What is 2+2?</label><br />
            <input name="human" id="spam" type="number" required="required" placeholder="Your Answer"><br /><br />
                    
            <input id="formSend" name="submit" type="submit" value="Send">
         
        </form>


          <div class="contactInfo clearfix">

          <h3>Get In Touch</h3>

            <div class="col-lg-12 col-md-12 col-sm-12">
            <i class="fa fa-envelope-o" aria-hidden="true"><a href="mailto:danielncoelho5@hotmail.com" title="Click to send me an email!"> danielncoelho5@hotmail.com</a></i>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12">
            <i class="fa fa-skype" aria-hidden="true"><a href="skype:daniel.coelho66?call" title="Click to call me on skype!"> daniel.coelho66</a></i>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12">
            <i class="fa fa-map-marker" aria-hidden="true"> Bradford, Ontario</i>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12">
            <a href="https://github.com/DanielCoelho66?tab=repositories" title="My Github" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i></a>
            <a href="https://ca.linkedin.com/in/danielcoelho5" target="_blank" title="My Linkedin Profile"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>

            </div>

        

       <div class="map">
         <div id="map"></div>
          <script>
          function initialize() {
            var mapProp = {
              center:new google.maps.LatLng(44.1013450,-79.5808060),
              zoom: 10,
              mapTypeId:google.maps.MapTypeId.ROADMAP,
             zoomControl: true,
             mapTypeControl: true,
            scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true
            };
            var map=new google.maps.Map(document.getElementById("map"), mapProp);
          }
          google.maps.event.addDomListener(window, 'load', initialize);
          </script>
           </div><!-- end of map -->

          </div><!-- end of contactcontent -->
          </div>
       </div><!-- end of row -->
       </div><!-- end of main -->
            <footer class="clearfix">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12"><a href="index.html" title="Home Page"><img src="images/dc_logo_white.png" width="50" height="50" alt="Small version of my logo"></a></div>
                <div class="col-lg-2 col-md-2 col-sm-12"><a href="index.html" title="Return to the home page!">Home</a></div>
                <div class="col-lg-2 col-md-2 col-sm-12"><a href="portfolio.html" title="View my portfolio of all my work!">Portfolio</a></div>
                <div class="col-lg-2 col-md-2 col-sm-12"><a href="about.html" title="Learn more about me!">About</a></div>
                <div class="col-lg-2 col-md-2 col-sm-12"><a href="contact.html" title="Have a question or comment? Contact me!">Contact</a></div>
                <div class="col-lg-2 col-md-2 col-sm-12">©2016 Daniel Coelho</div>
            </div>
            <a href="#" class="top" title="Back To Top"><i class="fa fa-arrow-up" aria-hidden="true"></i>
</a>
            </footer>          
  </body>
</html>