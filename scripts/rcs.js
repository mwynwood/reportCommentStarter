var studentName;
var course;

function generateReport() {
    studentName = document.options.studentname.value;
    course = document.options.course.value;
    var lineBreak = "\n\n";
    var theReport = "";
    theReport += generateOpeningComment(document.querySelector("#opening").value) + lineBreak;
    theReport += generateParticipationComment(document.querySelector("#participation").value) + lineBreak;
    theReport += generateAttendanceComment(document.querySelector("#attendance").value) + lineBreak;
    theReport += generateCompletionComment(document.querySelector("#completion").value) + lineBreak;
    theReport += generateAttitudeComment(document.querySelector("#attitude").value) + lineBreak;
    theReport += generateClosingComment(document.querySelector("#closing").value);
    document.querySelector('#outputReport').value = theReport;
 }
 
 function generateOpeningComment(rating) {
  switch (rating) {
   case "1":
    var comments =
    [
     studentName + ", you are making slow progress in the " + course + " course so far this year."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2": 
    var comments =
    [
     studentName + ", you are doing very well at the " + course + " course so far this year."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
      
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }
 
 function generateParticipationComment(rating) { 
  switch (rating) {
   case "1":
    var comments =
    [
     "I would like you to focus more on taking part in class activities.", 
     "You need to focus on taking a more active part in class activities."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2":
    var comments =
    [
     "You occasionally participate in class activities, but I would like to see you become more involved.", 
     "When you do participate in class activities your input is valued, but you need to be more focused.",
     "You have continued to apply yourself well to most aspects of your work in this course."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "3": 
    var comments =
    [
     "You are a valued member of the class who always takes part in group activities.", 
     "You are a highly motivated member of the class who always contributes in class activities."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
      
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }
 
 function generateAttendanceComment(rating) {
  switch (rating) {
   case "1":
    var comments =
    [
     "You are often absent or late for class which means you have missed some work which you will need to catch up on.",
     "As a result of your poor attendance and punctuality it is likely that you are not going to catch up with the work required to complete this course.",
     "Your attendance in this class has been quite poor, and when you do turn up you are a distraction to others."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2":
    var comments =
    [
     "Your attendance is good and you are seldem late for class.",
     "If you can be more consistent with your attendance, you should have no problems succeeding in this course."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "3": 
    var comments =
    [
     "Your attendance has been excellent.",
     "If you can keep your excellent attendance rate up, you should have no problems succeeding in this course."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }
 
 function generateCompletionComment(rating) {
  switch (rating) {
   case "1":
    var comments =
    [
     "You have skills and ability, but you need to show much more self-discipline and determination if you wish to be successful.",
     "You can be easily distracted so try to stay more focused on the tasks you're working on rather than others in the class.",
     "You need to focus on tasks and complete them earlier, rather than having to spend lots of time catching up when reminded."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2":
    var comments =
    [
     "You can work well at times but you need to show more enthusiasm and determination when completing tasks.",
     "Continue to focus on the task at hand and try not to be distracted."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "3": 
    var comments =
    [
     "I am pleased with your continued dedication to this course. You apply yourself well and you hand in assignments on time.",
     "So far you have completed everything required in this class. Quite often you are the first in the class to complete tasks.",
     "It is difficult to suggest how you might improve in this class. So far you have completed everything required. Well done.",
     "You put a lot of effort into your work as complete assignments with quality in mind."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }
 
 function generateAttitudeComment(rating) {
  switch (rating) {
   case "1":
    var comments =
    [
     "You can sometimes work very well on tasks but there are other times where you show little self-motivation and poor concentration. This can sometimes make you a distraction to others."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2":
    var comments =
    [
     "You are friendly, matire and have a great sense of humour.", 
     "You are a quiet achiever and have shown maturity towards your work as the year has progressed.",
     "Your enthusiasm and energy when focused on the task will be a great asset for you in your future studies."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "3": 
    var comments =
    [
     "Your success is largly due to your mature and intelligent attitiude toward your work.", 
     "Your practical, down-to-earth nature and strong work ethic will ensure you success in whatever career you choose.",
     "You are a role model for the class and always display good behavior."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }

 function generateClosingComment(rating) {
  switch (rating) {
   case "1":
    var comments =
    [
     "If you try not to become distrated and focus more on your work, you will be successful in this course.", 
     "You have the potential to achieve at a high level, but you are too easily distracted."
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   case "2": 
    var comments =
    [
     "You are a pleasure to have in the class " + studentName + ", keep up the good work.", 
     "Keep up the good work " + studentName + " and you will be successful in this course.",
     "You should be proud of all you have accomplished. Keep up the wonderful things you are doing " + studentName + "!"
    ];
    var selectedComment = comments[Math.floor(Math.random()*comments.length)];
    break;
    
   default : var selectedComment = "Error!'";
  }
  return selectedComment;
 }
