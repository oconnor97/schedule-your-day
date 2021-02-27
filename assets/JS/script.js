//declared variables
var currentDay = $('#currentDay');
var currentTime = moment().startOf('hour');
var endTime = moment().endOf('day');






// function to activate the time clock on page start
var timeInterval = setInterval(function() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
    timeCompare();
    
    // console.log(time);
    // console.log(endTime);
    if (time === endTime) {
        localStorage.clear();
        
    }
},1000);

// timeCompare();
// setting text content of each time row


var nineAm = moment().startOf('day').add(9, 'hour');
$('#nineAm').text(nineAm.format('LT'));

var tenAm = moment().startOf('day').add(10, 'hour');
$('#tenAm').text(tenAm.format('LT'));

var elevenAm = moment().startOf('day').add(11, 'hour');
$('#elevenAm').text(elevenAm.format('LT'));

var noon = moment().startOf('day').add(12, 'hour');
$('#noon').text(noon.format('LT'));

var onePm = moment().startOf('day').add(13, 'hour');
$('#onePm').text(onePm.format('LT'));

var twoPm = moment().startOf('day').add(14, 'hour');
$('#twoPm').text(twoPm.format('LT'));

var threePm = moment().startOf('day').add(15, 'hour');
$('#threePm').text(threePm.format('LT'));

var fourPm = moment().startOf('day').add(16, 'hour');
$('#fourPm').text(fourPm.format('LT'));

var fivePm = moment().startOf('day').add(17, 'hour');
$('#fivePm').text(fivePm.format('LT'));

// console.log(nineAm);
// console.log(currentTime);


function timeCompare() {
      
  
    // 9am
    if (currentTime.isSame(nineAm, 'hour')) {
        $('#time9').addClass('present');
    } else if (nineAm.isBefore(currentTime, 'hour')) {
        $('#time9').addClass('past');
    } else {
        $('#time9').addClass('future');
    };


    // 10am
    if (currentTime.isSame(tenAm, 'hour')) {
        $('#time10').addClass('present');
    } else if (tenAm.isBefore(currentTime, 'hour')) {
        $('#time10').addClass('past');
    } else {
        $('#time10').addClass('future');
    };

    // 11am
    if (currentTime.isSame(elevenAm, 'hour')) {
        $('#time11').addClass('present');
    } else if (elevenAm.isBefore(currentTime, 'hour')) {
        $('#time11').addClass('past');
    } else {
        $('#time11').addClass('future');
    };

    // 12pm
    if (currentTime.isSame(noon, 'hour')) {
        $('#time12').addClass('present');
    } else if (noon.isBefore(currentTime, 'hour')) {
        $('#time12').addClass('past');
    } else {
        $('#time12').addClass('future');
    };

    // 1pm
    if (currentTime.isSame(onePm, 'hour')) {
        $('#time1').addClass('present');
    } else if (onePm.isBefore(currentTime, 'hour')) {
        $('#time1').addClass('past');
    } else {
        $('#time1').addClass('future');
    };

    // 2pm
    if (currentTime.isSame(twoPm, 'hour')) {
        $('#time2').addClass('present');
    } else if (twoPm.isBefore(currentTime, 'hour')) {
        $('#time2').addClass('past');
    } else {
        $('#time2').addClass('future');
    };

    // 3pm
    if (currentTime.isSame(threePm, 'hour')) {
        $('#time3').addClass('present');
    } else if (threePm.isBefore(currentTime, 'hour')) {
        $('#time3').addClass('past');
    } else {
        $('#time3').addClass('future');
    };

    // 4pm
    if (currentTime.isSame(fourPm, 'hour')) {
        $('#time4').addClass('present');
    } else if (fourPm.isBefore(currentTime, 'hour')) {
        $('#time4').addClass('past');
    } else {
        $('#time4').addClass('future');
    };

    // 5pm
    if (currentTime.isSame(fivePm, 'hour')) {
        $('#time5').addClass('present');
    } else if (fivePm.isBefore(currentTime, 'hour')) {
        $('#time5').addClass('past');
    } else {
        $('#time5').addClass('future');
    };
};


var textArea9 = $('#textArea9');
var textArea10 = $('#textArea10');
var textArea11 = $('#textArea11');
var textArea12 = $('#textArea12');
var textArea1 = $('#textArea1');
var textArea2 = $('#textArea2');
var textArea3 = $('#textArea3');
var textArea4 = $('#textArea4');
var textArea5 = $('#textArea5');


$("#click9").click(function() {
    // event.preventDefault();
    textArea9 = $('#textArea9').val();
    console.log(textArea9);
    localStorage.setItem('textArea9', textArea9);
}); 

$("#click10").click(function() {
    // event.preventDefault();
    textArea10 = $('#textArea10').val();
    console.log(textArea10);
    localStorage.setItem('textArea10', textArea10);
}); 

$("#click11").click(function() {
    // event.preventDefault();
    textArea11 = $('#textArea11').val();
    console.log(textArea11);
    localStorage.setItem('textArea11', textArea11);
}); 

$("#click12").click(function() {
    // event.preventDefault();
    textArea12 = $('#textArea12').val();
    console.log(textArea12);
    localStorage.setItem('textArea12', textArea12);
}); 

$("#click1").click(function() {
    // event.preventDefault();
    textArea1 = $('#textArea1').val();
    console.log(textArea1);
    localStorage.setItem('textArea1', textArea1);
}); 

$("#click2").click(function() {
    // event.preventDefault();
    textArea2 = $('#textArea2').val();
    console.log(textArea2);
    localStorage.setItem('textArea2', textArea2);
}); 

$("#click3").click(function() {
    // event.preventDefault();
    textArea3 = $('#textArea3').val();
    console.log(textArea3);
    localStorage.setItem('textArea3', textArea3);
}); 

$("#click4").click(function() {
    // event.preventDefault();
    textArea4 = $('#textArea4').val();
    console.log(textArea4);
    localStorage.setItem('textArea4', textArea4);
}); 

$("#click5").click(function() {
    // event.preventDefault();
    textArea5 = $('#textArea5').val();
    console.log(textArea5);
    localStorage.setItem('textArea5', textArea5);
}); 


   textArea9.val(localStorage.getItem('textArea9'));
   textArea10.val(localStorage.getItem('textArea10'));
   textArea11.val(localStorage.getItem('textArea11'));
   textArea12.val(localStorage.getItem('textArea12'));
   textArea1.val(localStorage.getItem('textArea1'));
   textArea2.val(localStorage.getItem('textArea2'));
   textArea3.val(localStorage.getItem('textArea3'));
   textArea4.val(localStorage.getItem('textArea4'));
   textArea5.val(localStorage.getItem('textArea5'));
