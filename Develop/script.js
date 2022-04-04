var CurrentDate = moment().format('dddd');
 console.log(CurrentDate);
document.getElementById("currentDay").innerHTML = CurrentDate;

var timeForDay = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var timeValue = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var timeBlock;
var hourBlock;
var eventBlock;
var saveButton;

function displaySchedule() {
    $.each(timeForDay, function(index ,time){
      //section for time on left
        timeBlock = $("<section>");
        timeBlock.addClass("row");

        hourBlock = $("<div>");
        hourBlock.addClass("hour col-2 col-lg-1");
        hourBlock.css("text-align","center");
        hourBlock.css("padding-top","31.5px");
        hourBlock.text(time);

        eventBlock = $("<div>");
        eventBlock.addClass("description col-2 col-lg-1")
        
        






        timeBlock.append(hourBlock);

    $(".container").append(timeBlock);

    })
}


displaySchedule();