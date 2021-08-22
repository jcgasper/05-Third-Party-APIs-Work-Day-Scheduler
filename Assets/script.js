//query selectors
//var timeDisplayEl = $('#time-display');
let hour9 = $("#hour9");
let hour10 = $("#hour10");
let hour11 = $("#hour11");
let hour12 = $("#hour12");
let hour1 = $("#hour1");
let hour2 = $("#hour2");
let hour3 = $("#hour3");
let hour4 = $("#hour4");
let hour5 = $("#hour5");

let hourArray  = [hour9,hour10,hour11,hour12,hour1,hour2,hour3,hour4,hour5];

//Display current day/month
function displayDate() {
    let date = moment().format("dddd, MMM Do ");
    $("#currentDay").text(date); 
}





function checkTime() {
    let time = moment().hour()
    
    
   // time = (time-12);
   console.log(time);
    //if (time <0) {
    // time = Math.abs(time);  
   // }
    //hour9.addClass("future");

    for (let i = 0; i <hourArray.length; i++) {
        if (time >i+9) {
            hourArray[i].removeClass("future");
            hourArray[i].removeClass("present");
            hourArray[i].addClass("past");

        }
        else if (time == i+9) {
            hourArray[i].removeClass("future");
            hourArray[i].removeClass("past");
            hourArray[i].addClass("present");
        }
        
        else {
        hourArray[i].removeClass("past");
        hourArray[i].removeClass("present");
        hourArray[i].addClass("future")

        }
    }

}



//loads previous entries from storage
function loadLocalStorage() {
$("#hour9 .description").text(localStorage.getItem("hour9"));
$("#hour10 .description").text(localStorage.getItem("hour10"));
$("#hour11 .description").text(localStorage.getItem("hour11"));
$("#hour12 .description").text(localStorage.getItem("hour12"));
$("#hour1 .description").text(localStorage.getItem("hour1"));
$("#hour2 .description").text(localStorage.getItem("hour2"));
$("#hour3 .description").text(localStorage.getItem("hour3"));
$("#hour4 .description").text(localStorage.getItem("hour4"));
$("#hour5 .description").text(localStorage.getItem("hour5"));
}

loadLocalStorage();


//EVENT LISTENERS
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})


$(".clearStorage").on("click", function () {
    localStorage.clear();
    $("#hour9 .description").text("");
    $("#hour10 .description").text("");
    $("#hour11 .description").text("");
    $("#hour12 .description").text("");
    $("#hour1 .description").text("");
    $("#hour2 .description").text("");
    $("#hour3 .description").text("");
    $("#hour4 .description").text("");
    $("#hour5 .description").text("");
})
//initialize function ran when page loads
function init() {
    displayDate();
    loadLocalStorage(); 
    checkTime();
}
   
   
//run init at end of JS
init();