var container = $(".container");
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
 var storedFields = localStorage.getItem("storedResponses");
//console.log("this is stored fields: " + storedFields);

setInterval(() => {
  $("p#currentDay").text(moment().format("dddd, MMM Do YYYY"));
}, 1000);


for (var i = 0; i < times.length; i=i+1) {
var hourName = "hour" + i;
var textInput= "form" +i;
var savebutton=  i;
var formsDiv = "individualForms" +i;
//console.log(i);

var $hourInput = $('.container').append('<div class="time-block">' +
    '<div class="row">' +
    '<div class="col-sm hour" id='+hourName+ '></div>' + '<textarea class="textarea col-md-10" id='+formsDiv+'></textarea>' +
    '<div class="col-sm saveBtn" id='+savebutton+'></div>'
  );

    //console.log(savebutton);

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
   //.log("trying this shit: " + localStorage.getItem(hour));
  localStorage.setItem("storedResponses", JSON.stringify($(this).siblings("textarea").val()));
});

function colorHours(){
  var actualHour = moment().format("HH");
  var index = 0;
 // console.log(actualHour + "is time in 24")

  // $(times[0]).siblings("textarea").val();
  for(i=9;i<times.length+9;i++){
    if(i<actualHour){

      $('#individualForms' + index).addClass("past")
      
      //code for recolor
      //console.log(times[index]+" is less than actual hour")
   } else if (i>actualHour){
    //code for recolor
    $('#individualForms' + index).addClass("future")
    //console.log(times[index]+" is greater than actual hour")
   } else {
     //code for 
    // console.log(times[index]+" is equal to actual hour")
    $('#individualForms' + index).addClass("present")
   }
  // console.log("index is: "+index)
   index++;
  }
  // console.log($('#individualForms' + 0).val());

  //console.log(moment().hours())

 }

colorHours();
//console.log(moment('MMMM Do, YYYY'));

//console.log(moment().hour());





