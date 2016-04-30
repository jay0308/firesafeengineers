/* slider*/
$(window).load(function() {           
  var i =0; 
  var images = ['images1.jpg','images2.jpg','images3.png'];
  var image = $('#slideit');
                //Initial Background image setup
  image.css('background-image', 'url(image1.jpg)');
                //Change image at regular intervals
  setInterval(function(){   
   image.fadeOut(1000, function () {
   image.css('background-image', 'url(' + images [i++] +')');
   image.fadeIn(1000);
   });
   if(i == images.length)
    i = 0;
  }, 5000);            
 });