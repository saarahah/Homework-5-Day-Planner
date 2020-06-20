var container = $(".container");
var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
// var words = localStorage.getItem("fields");
 var storedFields = localStorage.getItem("storedResponses");
// var storedFields=[];
console.log("this is stored fields: " + storedFields);


var tk = times.keys();

for (x of tk) {

  $("#individualForms" + x).text(function() {
    console.log("ran that boi");
    console.log("x is " + x);
    return storedFields;
    // console.log("ran that boi");
    // console.log(x);
  });
}



// if (storedFields) {

//storedFields = JSON.parse(storedFields);

// } else {

//   storedFields = {}   // hour: info

// }



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
 
$('#savebutton' + i).append("SAVE");
  }
for(i=0; i<times.length; i++){
  if(localStorage.getItem(i)!=null){
$('#individualForms'+i).text(localStorage.getItem(i))
  }
}

////////////////////////////////////////////////////////////////////
  $(document).on("click", ".saveBtn", function(e) {  
    alert("hello");

   //var buttonID= $(this).attr('id') + "fields";

    var input = $(this).siblings("textarea").val();

  //var input = JSON.stringify($(this).siblings("textarea").val());

   var hour = $(this).attr("id")
   localStorage.setItem(hour, input);
   console.log("trying this shit: " + localStorage.getItem(hour));



  // storedFields[hour] = input;

  //  console.log(tasks)

  // localStorage.setItem("storedResponses", JSON.stringify(storedFields));
    

 localStorage.setItem("storedResponses", JSON.stringify($(this).siblings("textarea").val()));


//console.log(JSON.parse(localStorage.getItem("savebutton0fields")));
// $('fields').textContent = words;

   //console.log($(this).siblings("textarea").val());
   //console.log("local store item 0 is: " + localStorage.getItem("savebutton0fields"));
//var storedFields = JSON.parse(localStorage.getItem("fields"));
//$(this).Text(storedFields);
   
});


console.log(moment('MMMM Do, YYYY'));

console.log(moment().hour());





