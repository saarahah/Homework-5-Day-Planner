var container = $(".container");
var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var words = localStorage.getItem("fields");
///makes rows///////////////////////////////////////////
for (var i = 0; i < times.length; i++) {
var hourName = "hour" + i;
var textInput= "form" +i;
var savebutton= "savebutton" +i;
var formsDiv = "individualForms" +i;

    console.log(hourName);

var $hourInput = $('.container').append('<div class="time-block">' +
    '<div class="row">' +
    '<div class="col-sm hour" id='+hourName+ '></div>' + '<textarea class="textarea col-md-10" id='+formsDiv+'></textarea>' +
    '<div class="col-sm saveBtn" id='+savebutton+'></div>'
  );

    console.log(savebutton);

$('#hour' + i).append('<p>'+times[i]+'</p>');
 
$('#savebutton' + i).append("SAVE");
  }
////////////////////////////////////////////////////////////////////
  $(document).on("click", ".saveBtn", function(e) {  
    alert("hello");
    

localStorage.setItem("fields", JSON.stringify($(this).siblings("textarea").val()));
$('fields').textContent = words;

   console.log($(this).siblings("textarea").val());
   console.log(localStorage.fields);
var storedFields = JSON.parse(localStorage.getItem("fields"));

   
});


console.log(moment('MMMM Do, YYYY'));

console.log(moment().hour());





