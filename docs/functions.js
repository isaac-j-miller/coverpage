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
        description:"Parth is a senior at James Madison University. He graduated recently from Blue Ridge Community College with an associate in science and \
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
                     He switched majors from Computer Science to Engineering and has lots of hands-on experience in fabrication and electronics. ",
        personal_website:"https://www.linkedin.com/in/brian-schieber-55505879"
    },
    {
        name:"Ernie Benner",
        major:"Engineering",
        minor: "Mathematics",
        profile_img_src:"images/profilepics/ernie.jpg",
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
        description:"Dominic is a 5<sup>th</sup>-year student at James Madison University. He hopes to follow a career that synthesizes his passion for electrical and mechanical systems",
        personal_website:"https://www.linkedin.com/in/dominic-coradazzi-5bb976184"
    },
]
const milestones = 
[
    {
        x: 20,
        y: 50,
        date: "October 2018",
        text: "Team formation",
        img: "images/milestones/formation.jpg"
    },
    {
        x: 40,
        y: 60,
        date: null,
        text: "Explored LiDAR applications",
        img: "images/milestones/cropped_justyn_drone.jpg"
    },
    {
        x: 60,
        y: 50,
        date: null,
        text: "Explored multispectral imagery applications",
        img: null,
    },
    {
        x: 80,
        y: 70,
        date: "November 2018",
        text: "Focused on eutrophication",
        img: "images/milestones/data1.png"
    },
    {
        x: 100,
        y: 60,
        date: null,
        text: "Built 1<sup>st</sup> iteration of drone",
        img: "images/milestones/cropped_brian_jacob_drone.png"
    },
    {
        x: 120,
        y: 60,
        date: "December 2018",
        text: "Submitted EPA P-3 application",
        img: null
    },
    {
        x: 140,
        y: 70,
        date: "February 2019",
        text: "Built 2<sup>nd</sup> iteration of drone",
        img: "images/milestones/dronepic.png"
    },
    {
        x: 160,
        y: 50,
        date: "March 2019",
        text: "Failed to find clients",
        img: null,
    },
    {
        x: 180,
        y: 40,
        date: "May 2019",
        text: "Discovered severe feasibility issues with eutrophication detection",
        img: null
    },
    {
        x: 200,
        y: 35,
        date: "September 2019",
        text: "Pivoted to crop health analysis",
        img: "images/milestones/blenheim.jpg"
    },
    {
        x: 220,
        y: 30,
        date: null,
        text: "Acquired new equipment and client",
        img: null
    },
    {
        x: 240,
        y: 20,
        date: "October 2019",
        text: "Developed image processing software",
        img: null,
    },
    {
        x: 260,
        y: 15,
        date: null,
        text: "Began development of web app",
        img: "images/milestones/whiteboard.jpg"
    }
    ,
    {
        x: 280,
        y: 30,
        date: null,
        text: "Acquired server",
        img: null
    },
    {
        x: 300,
        y: 20,
        date: "November 2019",
        text: "Built 1<sup>st</sup> iteration of web app",
        img: "images/milestones/webapp.png"
    }
]
const stepsPerMilestone = 10;
const mSecsPerMilestone = 1000;
var nodesPerWindow = 5;

var xDiff = 0;
var accumulatedShift = 0;
var milestonesIndex =0;
var slidesIndex = -1;
var advanceMilestoneAllowed = true;


$(document).ready(function(){
    let width = $(window).width();
    console.log(width);
    if(width < 468){
        nodesPerWindow = 3;
    }
    xDiff=100/(nodesPerWindow-1);
    accumulatedShift=xDiff/2;
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
    $("#journey-interactive").click(advanceMilestone);
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
    $("#gallery-slideshow-image").attr('src',slides[slidesIndex].src);
    $("#image-caption").text(slides[slidesIndex].caption + " ("+(slidesIndex+1).toString()+"/"+slides.length.toString()+")");

}

function populateProfiles(){
    let numProfiles =profiles.length;
    for(let i=0;i<numProfiles;i++){
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
function advanceMilestone(){
    if(advanceMilestoneAllowed){
        if(milestonesIndex < milestones.length){
            let ms=milestones[milestonesIndex];
            ms.x = (milestonesIndex+1)*xDiff;
            let circle = `<div id="milestone${milestonesIndex}" class="milestone-node" style="left:${ms.x-accumulatedShift}%;top:${ms.y}%">`;
            let delay = 0;
            if (milestonesIndex > 0){
                let ms_prev=milestones[milestonesIndex-1];
                ms_prev.x = (milestonesIndex)*xDiff;
                //let xDiff = (ms.x-ms_prev.x);
                let path =`<svg id=path${milestonesIndex} class="milestone-path"><line id="line${milestonesIndex}" x1=${ms_prev.x-accumulatedShift}% y1=${ms_prev.y}% x2=${ms.x-accumulatedShift}% y2=${ms.y}%/></svg>`;
                if(milestonesIndex==nodesPerWindow-1){accumulatedShift-=xDiff/2}
                if(milestonesIndex>=nodesPerWindow-1){
                    delay = 750;
                    accumulatedShift+=xDiff;
                    circle = `<div id="milestone${milestonesIndex}" class="milestone-node" style="left:${ms.x-accumulatedShift-xDiff/2}%;top:${ms.y}%">`;
                    path =`<svg id=path${milestonesIndex} class="milestone-path" style="left:${-accumulatedShift-xDiff/2}%;"><line id="line${milestonesIndex}" x1=${ms_prev.x}% y1=${ms_prev.y}% x2=${ms.x}% y2=${ms.y}%/></svg>`;   
                    for(let i = 1; i <nodesPerWindow+1; i++){
                        let index = milestonesIndex-nodesPerWindow+i;
                        let ms_prev_i = milestones[index];
                        $(`#milestone${index}`).css('left',`${ms_prev_i.x-accumulatedShift-xDiff/2}%`);
                        if(index >1){
                            
                            $(`#path${index-1}`).css('left',`${-accumulatedShift-(index>=nodesPerWindow?xDiff/2:0)}%`);
                        }
                    }
                }
                if(milestonesIndex>nodesPerWindow-2){
                    $(`#milestone${milestonesIndex-nodesPerWindow+1}`).css('transition-duration','1s');
                    $(`#milestone${milestonesIndex-nodesPerWindow+1}`).css('animation-fill-mode','initial');
                
                    $(`#milestone${milestonesIndex-nodesPerWindow+1}`).css('opacity','0');
                    $(`#path${milestonesIndex-nodesPerWindow+2}`).css('opacity','0');
                    window.setTimeout(function(){
                        $(`#milestone${milestonesIndex-nodesPerWindow}`).remove();
                        $(`#path${milestonesIndex-nodesPerWindow+1}`).remove();
                    },1000);
                }
                advanceMilestoneAllowed=false;
                window.setTimeout(function(){
                    $("#journey-interactive").append(path);
                    advanceMilestoneAllowed = true;
                },delay);
            }
            if(ms.date!=null){
                circle+=`<div class="milestone-date"><p class="milestone-interior">${ms.date}</p></div>`;
            }
            circle+=`<div class="milestone-text"><p class="milestone-interior">${ms.text}</p></div></div>`;
            $("#journey-interactive").append(circle);
            if(ms.img!=null){
                $("#journey-interactive").css("background-image",`url(${ms.img})`);
            }
            milestonesIndex+=1;
        }
        else{
            $("#journey-interactive").empty();
            accumulatedShift=xDiff/2;
            milestonesIndex=0;
            $("#journey-interactive").css("background-image",`url(${milestones[0].img})`);
            //advanceMilestone();
        }
    }
}
