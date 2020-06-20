var container = $(".container");
var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
 var storedFields = localStorage.getItem("storedResponses");
console.log("this is stored fields: " + storedFields);

setInterval(() => {
  $("p#currentDay").text(moment().format("dddd, MMM Do YYYY"));
}, 1000);


for (var i = 0; i < times.length; i=i+1) {
var hourName = "hour" + i;
var textInput= "form" +i;
var savebutton=  i;
var formsDiv = "individualForms" +i;
console.log(i);



var $hourInput = $('.container').append('<div class="time-block">' +
    '<div class="row">' +
    '<div class="col-sm hour" id='+hourName+ '></div>' + '<textarea class="textarea col-md-10" id='+formsDiv+'></textarea>' +
    '<div class="col-sm saveBtn" id='+savebutton+'></div>'
  );

    console.log(savebutton);

$('#hour' + i).append('<p>'+times[i]+'</p>');
  }

$('.saveBtn').append("SAVE");

for(i=0; i<times.length; i++){
  if(localStorage.getItem(i)!=null){
$('#individualForms'+i).text(localStorage.getItem(i))
  }
}

////////////////////////////////////////////////////////////////////
  $(document).on("click", ".saveBtn", function(e) {  
    alert("hello");
    var input = $(this).siblings("textarea").val();

  

   var hour = $(this).attr("id")
   localStorage.setItem(hour, input);
   console.log("trying this shit: " + localStorage.getItem(hour));



    

 localStorage.setItem("storedResponses", JSON.stringify($(this).siblings("textarea").val()));

   
});


console.log(moment('MMMM Do, YYYY'));

console.log(moment().hour());





