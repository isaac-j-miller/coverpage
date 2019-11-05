const slides = 
[
    {
        src:"images/gallery/team.jpg",
        caption:"The team poses for a picture with the first iteration of the drone"
    },
    {
        src:"images/gallery/team_winner.jpg",
        caption:"The team wins 1st place at the Madison Engineering xChange, Spring 2019"
    },
    {
        src:"images/gallery/dog.jpg",
        caption:"Momo, Jacob's dog"
    }
]
var slidesIndex = -1;

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

function plusSlides(increment){
    slidesIndex +=increment;
    if(slidesIndex < 0){
        slidesIndex = slides.length - 1;
    }
    else if (slidesIndex >= slides.length){
        slidesIndex = 0;
    }
    $("#gallery-slideshow").css("background-image", "url("+slides[slidesIndex].src+")");
    $("#image-caption").text(slides[slidesIndex].caption + " ("+(slidesIndex+1).toString()+"/"+slides.length.toString()+")");

}