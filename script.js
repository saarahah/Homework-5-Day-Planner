var container = $(".container");
var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
// var words = localStorage.getItem("fields");
// var storedFields = JSON.parse(localStorage.getItem("fields"));
var storedFields=[];
///makes rows///////////////////////////////////////////

  // for(var i = 0; i < times.length; i++){
     
             
  //      }

//console.log(localStorage.getItem("savebutton"+[i]+"fields"));
 // }


for (var i = 0; i < times.length; i=i+1) {
var hourName = "hour" + i;
var textInput= "form" +i;
var savebutton= "savebutton" +i;
var formsDiv = "individualForms" +i;


if(localStorage.getItem("savebutton"+[i]+"fields")!= null){
  storedFields[i]=localStorage.getItem("savebutton"+[i]+"fields");
  console.log("local storage variable name is: " + localStorage.getItem("savebutton"+[i]+"fields") + "i value is: " + i);   
} else {
  storedFields[i] = "";
}
  //for(var i = 0; i <storedFields.length; i++){
      // if(localStorage.getItem("savebutton"+[i]+"fields")!= undefined){
      //       storedFields[i]=localStorage.getItem("savebutton"+[i]+"fields");
      // }


 // }

    $( "#individualForms0" ).text(function() {
      return storedFields;
      console.log("ran that boi");
    });

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

   //var buttonID= $(this).attr('id') + "fields";


    

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





