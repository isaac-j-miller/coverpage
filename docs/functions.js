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
const profiles = 
[
    {
        name:"Isaac Miller",
        major:"Engineering, Chemistry",
        minor:"Mathematics",
        profile_img_src:"images/profilepics/isaac.png",
        description:"Isaac is a 5<sup>th</sup>-year student at James Madison University,\
                    graduating in May of 2020. He hopes to pursue a career in Software Engineering.",
        personal_website:"https://isaac-j-miller.com"
    },
    {
        name:"Zack DeBey",
        major:"Engineering",
        minor:"Mathematics",
        profile_img_src:"images/profilepics/zack.jpg",
        description:"Zack is a 4<sup>th</sup>-year student at James Madison University.",
        personal_website:"https://linkedin.com/in/zachary-debey"
    },
    {
        name:"Jacob Ortiz",
        major:"Engineering",
        minor:"Something",
        profile_img_src:"images/profilepics/jacob.jpg",
        description:"Jacob is a certified master expert Microsoft Office Certified expert at James Madison University,\
                    graduating in May of 2020. He hopes to pursue a career in getting certs.",
        personal_website:"https://linkedin.com/in/jacob-ortiz-474941129"
    },
    {
        name:"Parth Patel",
        major:"Engineering",
        minor:"Something",
        profile_img_src:"images/profilepics/parth.jpg",
        description:"Parth is a student at James Madison University.",
        personal_website:"https://linkedin.com/in/parth-patel-692656178"
    },
    {
        name:"Justyn Girdner",
        major:"Engineering",
        minor:"Robotics",
        profile_img_src:"images/profilepics/justyn.jpg",
        description:"Justyn is a 4<sup>th</sup>-year student at James Madison University,\
                    graduating in May of 2020. He hopes to pursue a career in something.",
        personal_website:"https://www.linkedin.com/in/justyn-girdner-2020"
    },
    {
        name:"Brian Schieber",
        major:"Engineering",
        minor:"Something",
        profile_img_src:"images/profilepics/brian.jpg",
        description:"Brian is a 47<sup>th</sup>-year student at James Madison University. He hopes to graduate.",
        personal_website:"https://www.linkedin.com/in/brian-schieber-55505879"
    },
    {
        name:"Ernie Benner",
        major:"Engineering",
        minor:"Something",
        profile_img_src:"images/profilepics/ernie.png",
        description:"Ernie is a 4<sup>th</sup>-year student at James Madison University,\
                    graduating in May of 2020. He hopes to pursue a career in something.",
        personal_website:"https://www.linkedin.com/in/ernest-benner-b58b30108"
    },
    {
        name:"Dominic Coradazzi",
        major:"Engineering",
        minor:"Robotics",
        profile_img_src:"images/profilepics/dominic.jpg",
        description:"Dominic is a 5<sup>th</sup>-year student at James Madison University.",
        personal_website:"https://www.linkedin.com/in/dominic-coradazzi-5bb976184"
    },
]
var slidesIndex = -1;

$(document).ready(function(){
    // Add smooth scrolling to all links
   
    populateProfiles();
    setTimeout(function() {
        $("#downarrow-container").css("opacity",".35");
        }, 5600);
    $("#downarrow-container").mouseover(function(event){
            $("#downarrow-container").css("height","12vh");
            $("#downarrow-container").css("opacity","0.5");
            setTimeout(function() {
                $("#downarrow-container").css("opacity",".35");
                $("#downarrow-container").css("height","10vh");
                }, 500);
        });
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
    //$("#gallery-slideshow-image").fadeTo(100,.5);
    $("#gallery-slideshow-image").attr('src',slides[slidesIndex].src);
    //$("#gallery-slideshow-image").fadeTo(100, 1);
    $("#image-caption").text(slides[slidesIndex].caption + " ("+(slidesIndex+1).toString()+"/"+slides.length.toString()+")");

}

function populateProfiles(){
    let numProfiles =profiles.length;
    for(let i=0;i<numProfiles;i++){
        //let websiteDisplay = profiles[i].personal_website.replace('https://','').replace('www.','');
        let spanOpen='<span class="profile">';
        let spanClose='</span>';
        let img=`<img src=${profiles[i].profile_img_src} class="profile-pic">`;
        let name=`<h3 class="profile-name">${profiles[i].name}</h3>`;
        let major=`<p class="profile-major"><b>Major: </b><i class="profile-interior">${profiles[i].major}</i></p>`;
        let minor=`<p class="profile-major"><b>Minor: </b><i class="profile-interior">${profiles[i].minor}</i></p>`;
        let description=`<p class="profile-description">${profiles[i].description}</p>`;
        let website=`<a class="profile-website" href=${profiles[i].personal_website}><b>e-portfolio link</b></a>`;
        let htmlProfile= spanOpen+img+name+major+minor+description+website+spanClose;
        $("#profile-container").append(htmlProfile);
    }
}