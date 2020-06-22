var container = $(".container");
//array of times to add to day slots
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
//get the item stored fields from local storage
 var storedFields = localStorage.getItem("storedResponses");
//console.log("this is stored fields: " + storedFields);


//use moment js to get the current time
setInterval(() => {
  $("p#currentDay").text(moment().format("dddd, MMM Do YYYY"));
}, 1000);

//create variables to give time slot sections unique ids
for (var i = 0; i < times.length; i=i+1) {
var hourName = "hour" + i;
var textInput= "form" +i;
var savebutton=  i;
var formsDiv = "individualForms" +i;

 //create areas for time slots
var $hourInput = $('.container').append('<div class="time-block">' +
    '<div class="row">' +
    '<div class="col-sm hour" id='+hourName+ '></div>' + '<textarea class="textarea col-md-10" id='+formsDiv+'></textarea>' +
    '<div class="col-sm saveBtn" id='+savebutton+'></div>'
  );

 //append text to time slot
$('#hour' + i).append('<p>'+times[i]+'</p>');
  }

//append text to save button
$('.saveBtn').append("SAVE");

//get the text from the individual forms
for(i=0; i<times.length; i++){
  if(localStorage.getItem(i)!=null){
$('#individualForms'+i).text(localStorage.getItem(i))
  }
}

//alert saved when button clicked
  $(document).on("click", ".saveBtn", function(e) {  
    alert("saved!");
    var input = $(this).siblings("textarea").val();

  
//set the text to be stored using siblings method 
   var hour = $(this).attr("id")
   localStorage.setItem(hour, input);
  localStorage.setItem("storedResponses", JSON.stringify($(this).siblings("textarea").val()));
});

//create a function to handle color changes
function colorHours(){
  var actualHour = moment().format("HH");
  var index = 0;

 //if less than actual hour change color
  for(i=9;i<times.length+9;i++){
    if(i<actualHour){
//if greater change color
      $('#individualForms' + index).addClass("past")
   } else if (i>actualHour){
    $('#individualForms' + index).addClass("future")
    //if present display color
   } else {
    $('#individualForms' + index).addClass("present")
   }
   index++;
  }

 }

colorHours();






