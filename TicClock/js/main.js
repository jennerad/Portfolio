// main function


var hClass;
var mClass;
var sClass;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
        //change to 12 hour clock
    h = twelveHourClock(h);
        //add leading 0 if needed for < 10
    h = addZeroToTime(h);
    m = addZeroToTime(m);
      // if (m = 00 || m = 10 || m = 20 || m = 30 || m = 40 || m = 50) {
      //   changeBgColor();
      // }
    s = addZeroToTime(s);
    hClass = "time" + h;
    mClass = "time" + m;
    sClass = "time" + s;
    if (h == 0) {
        s = "12";
        sClass = "time12";
        // changeBgColor();
    };
    if (s == 0) {
        s = "60";
        sClass = "time60";
        // changeBgColor();
    };
    if (m == 0) {
        m = "60";
        mClass = "time60";
        // changeBgColor();
    };
        // console.log(s);
        // console.log(sClass);
    document.getElementById('timeHours').className = hClass;
    document.getElementById('timeMinutes').className = mClass;
    document.getElementById('timeSeconds').className = sClass;
    setTimeout(function(){startTime()},500);
}

function addZeroToTime(i) {
    if (i<10) {
        i = "0" + i
    }; 
    return i;
}

function twelveHourClock(i) {
    if (i > 12) {
        i = i - 12;
    };
    return i
}

function changeBgColor() {
    var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.5)';
    // console.log(hue);
    document.body.style.background = hue;
}

$(document).ready(function(){
 setInterval(changeBgColor, 6000);
});




//replace hour/minutes/seconds with sprite

//display sprite in html


// function update() {
    // get current time
    //get hour
    //get minutes
    //get seconds
