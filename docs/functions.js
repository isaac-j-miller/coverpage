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
        description:"Zack is a 4<sup>th</sup>-year student at James Madison University.\
                     He has become heavily involved with the MADE over the past 2 years, \
                     giving tours to prospective students as well as opting-in to mentor first-year engineering students as part of the MADE Leadership Program.",
        personal_website:"https://linkedin.com/in/zachary-debey"
    },
    {
        name:"Jacob Ortiz",
        major:"Engineering",
        minor: null,
        profile_img_src:"images/profilepics/jacob.jpg",
        description:"4th-year engineering student at James Madison University. \
                     Driven innovator and avid hackathoner, I enjoy rapid prototyping as a project-based learner. \
                     Currently takes my interests outside of the project with a home-lab testing new emerging technologies in cloud computing and automation.",
        personal_website:"https://jacobortiz.net"
    },
    {
        name:"Parth Patel",
        major:"Engineering",
        minor:null,
        profile_img_src:"images/profilepics/parth.jpg",
        description:"Parth is a junior at James Madison University. He graduated recently from Blue Ridge Community College with an associate in science and \
                     is on track to earn a B.S. in Engineering. His main interests are electrical systems and software development. ",
        personal_website:"https://linkedin.com/in/parth-patel-692656178"
    },
    {
        name:"Justyn Girdner",
        major:"Engineering",
        minor:"Robotics",
        profile_img_src:"images/profilepics/justyn.jpg",
        description:"Justyn is passionate about fostering meaningful interpersonal connections and works to do this by leading a smallgroup in InterVarsity. \
                     He has been involved in Electroencephalography research since his first year at JMU and has presented at ASEE-SE and contributed to multiple publications.",
        personal_website:"https://www.linkedin.com/in/justyn-girdner-2020"
    },
    {
        name:"Brian Schieber",
        major:"Engineering",
        minor:"Robotics",
        profile_img_src:"images/profilepics/brian.jpg",
        description:"Brian is a 6<sup>th</sup>-year student at James Madison University. \
                     He switched majors from Computer Science to Engineering and has lots of hands on experience in fabrication and electronics. ",
        personal_website:"https://www.linkedin.com/in/brian-schieber-55505879"
    },
    {
        name:"Ernie Benner",
        major:"Engineering",
        minor:"Something",
        profile_img_src:"images/profilepics/ernie.png",
        description:"Ernie is a 4<sup>th</sup>-year student at James Madison University,\
                    graduating in May of 2020. He wants to work as a data scientist in the future and is excited to apply machine learning techniques to analyze \
                    gathered data. He is currently working as a research assistant studying wearable computers for physical therapy.",
        personal_website:"https://www.linkedin.com/in/ernest-benner-b58b30108"
    },
    {
        name:"Dominic Coradazzi",
        major:"Engineering",
        minor:"Mathematics, Robotics",
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
        let minor = null;
        if (profiles[i].minor){
            minor= `<p class="profile-major"><b>Minor: </b><i class="profile-interior">${profiles[i].minor}</i></p>`;
        }
        let description=`<p class="profile-description">${profiles[i].description}</p>`;
        let website=`<a class="profile-website" href=${profiles[i].personal_website}><b>e-portfolio link</b></a>`;
        let htmlProfile= spanOpen+img+name+major;
        if(minor){
            htmlProfile += minor;
        }
        htmlProfile +=description+website+spanClose;
        $("#profile-container").append(htmlProfile);
    }
}
