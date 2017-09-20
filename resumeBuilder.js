/*
$("#main").append("Doctor");
var awesomeThoughts = 'My name Dmitriy and I am AWESOME';
var funThoughts = awesomeThoughts.replace('AWESOME','FUN');
$("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace('%data%','Dmitriy Drozhzhin');
var formattedRole = HTMLheaderRole.replace('%data%','Beginner');
$("#header").append(formattedName);
$("#header").append(formattedRole);*/
/*var bio = {
    name : 'Dmitriy',
    role : 'Beginner',
    info : 'Moscow City',
    picture : 'images/my.jpg',
    welcomeMessage : 'Hi MrFreeman!',
    skills : ['patient', 'persistent', 'team player']
};
$("#header").prepend(bio.info);
$("#header").prepend(bio.picture);
var work = {};
work.jobPosition = 'employer';
work.yearsWorked = 'Not me';
work.cityB = 'Moscow';
var education = {};
education['school'] = 'School 862';
education['yearsSchool'] = 11;
education['citySchool'] = 'Moscow Too';
$("#header").prepend(work.jobPosition,education.citySchool);*/
/*var education = {
	"schools": [{
			"name": "862",
			"city": "Moscow",
			"majors": "Some one",
			"years": 11,
			"info": "six"
		},
		{
			"name": "861",
			"city": "Moscow",
			"majors": "Some two",
			"years": 1,
			"info": "ten"
		}
	]
}*/

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
var projects = {
    "projects": [
    {
        "title": "11",
        "dates": "22",
        "description": "33",
        "images": ["img1","img2","img3"]
    },
    {
        "title": "11",
        "dates": "22",
        "description": "33",
        "images": ["img1","img2","img3"]
    },
    {
        "title": "11",
        "dates": "22",
        "description": "33",
        "images": ["images/fry.jpg","img2","img3"]
    }
    ]
}
var bio = {
    "name": "1",
    "role": "2",
    "welcomeMessage": "3",
    "biopic": "4",
    "contacts": {
        "mobile": 123,
        "email": "address",
        "github": "username",
        "twitter": "handle",
        "location": "place"
    },
    "skills": ["1","2","3","4"]
}
var education = {
    "schools": [
        {
            "name":"Dmitriy",
            "location": "Moscow",
            "degree dates": "123",
            "url": "someurl1"
        },
        {
            "name":"Dmitriy",
            "location": "Moscow",
            "degree dates": "123",
            "url": "someurl1"
        },
        {
            "name":"Dmitriy",
            "location": "Moscow",
            "degree dates": "123",
            "url": "someurl1"
        }
    ],
    "majors": ["aaa","bbb","ccc"],
    "onlineCourses": [
        {
            "title": "ss1",
            "school": "dd2",
            "dates": "11-22",
            "url": "kkk"
        },
        {
            "title": "ss1",
            "school": "dd2",
            "dates": "11-22",
            "url": "kkk"
        },
        {
            "title": "ss1",
            "school": "dd2",
            "dates": "11-22",
            "url": "kkk"
        }
    ]
}


    if (bio.skills>0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%".bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
function displayWork(){
for (item in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
    var formattedTitle = HTMLworkEmployer.replace("%data%",work.jobs[item].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[item].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[item].description);
    $(".work-entry:last").append(formattedDescription);
}
}
displayWork();
$(document).click(function(loc){
    console.log(loc.pageX);
    console.log(loc.pageY);
     logClicks(loc.pageX,loc.pageY);
})

function inName(str1) {
    str1 = str1.trim().split(" ");
    console.log(str1);
    str1[1] = str1[1].toUpperCase();
    str1[0] = str1[0].slice(0,1).toUpperCase()+str1[0].slice(1).toLowerCase();
    str1 = str1[0]+" "+str1[1];
    return str1;
}
$("#main").append(internationalizeButton);

projects.display = function(){
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDiscription.replace("%data%", projects.projects[project].discription);
        $(".project-entry:last").append(formattedDiscription);
        
        if (projects.projects[project].images.length>0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
$("#mapDiv").append(googleMap);
*/
