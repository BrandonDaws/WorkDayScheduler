var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = "Todays Date: " + CurrentDate;

var timeForDay = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var timeValue = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var timeBlock;
var hourBlock;
var eventBlock;
var saveButton;
var currentTime = moment().format("HH")




function displaySchedule() {
    $.each(timeForDay, function (index, time) {
        var eventBlock = $("#" + timeValue[index]);

        //section for time on left
        timeBlock = $("<section>");
        timeBlock.addClass("row");

        hourBlock = $("<div>");
        hourBlock.addClass("hour col-2 col-lg-1");
        hourBlock.css("text-align", "center");
        hourBlock.css("padding-top", "31.5px");
        hourBlock.text(time);

        eventBlock = $("<textarea>");
        eventBlock.addClass("description col-8");
        eventBlock.css("padding-right", "31.5px");
        eventBlock.attr("id", timeValue[index]);

        
        saveButton = $("<button>")
        saveButton.addClass("saveBtn fa fa-save col-2")
        saveButton.attr("type", "submit")
        saveButton.attr("id", timeValue[index]);
     //   saveButton.on("click", function(){
          //  localStorage.setItem("task",  )

            
      //  });
        
        timeBlock.append(hourBlock, eventBlock, saveButton);
        $(".container").append(timeBlock,);

    })
}




function checkTime() {
  var now = moment()
    //var currentTime = moment().format('HH');
  
    $.each(timeValue, function (index) {
        eventBlock = $("#" + timeValue[index]);

        if ((parseInt(eventBlock[0].id) < now.hour())) {
            eventBlock.addClass("past");

        } else if ((parseInt(eventBlock[0].id) === now.hour())) {
            eventBlock.addClass("present")
 
        } else {
            eventBlock.addClass("future")
        };
        
        eventBlock.text(localStorage.getItem("eventEntry" + timeValue[index]))
    });
  
}

function saveEvents(event){
    event.preventDefault()
    var itemId = event.currentTarget.id
    var itemValue =  event.currentTarget.previousSibling.value
    localStorage.setItem("eventEntry" + itemId, itemValue);
   // console.log(itemId);
    //console.log(itemValue);

}


//save task function



displaySchedule();
checkTime();
$(".saveBtn").click(saveEvents)