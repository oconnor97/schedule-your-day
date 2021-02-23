//declared variables
var currentDay = $('#currentDay');
var currentTime = moment().startOf('hour').format('LT');
var beforeTime = moment().startOf('day').add(9, 'hours');
var time9 = $('#time9');
var time10 = $('#time10');
var time11 = $('#time11');
var time12 = $('#time12');
var time1 = $('#time1');
var time2 = $('#time2');
var time3 = $('#time3');
var time4 = $('#time4');
var time5 = $('#time5');

// function to activate the time clock on page start
var timeInterval = setInterval(function() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
    timeCompare();
},1000);

// setting text content of each time row
var nineAm = beforeTime.add(0, 'hour').format('LT');
$('#nineAm').text(nineAm);

var tenAm = beforeTime.add(1, 'hour').format('LT');
$('#tenAm').text(tenAm);

var elevenAm = beforeTime.add(1, 'hour').format('LT');
$('#elevenAm').text(elevenAm);

var noon = beforeTime.add(1, 'hour').format('LT');
$('#noon').text(noon);

var onePm = beforeTime.add(1, 'hour').format('LT');
$('#onePm').text(onePm);

var twoPm = beforeTime.add(1, 'hour').format('LT');
$('#twoPm').text(twoPm);

var threePm = beforeTime.add(1, 'hour').format('LT');
$('#threePm').text(threePm);

var fourPm = beforeTime.add(1, 'hour').format('LT');
$('#fourPm').text(fourPm);

var fivePm = beforeTime.add(1, 'hour').format('LT');
$('#fivePm').text(fivePm);


console.log(fivePm)
console.log(currentTime)
function timeCompare() {
    // 9am
    if (nineAm === currentTime) {
        time9.addClass('present');
    } else if (nineAm < currentTime) {
        time9.addClass('past');
    } else time9.addClass('future');



    // 10am
    if (tenAm === currentTime) {
        time10.addClass('present');
    } else if (tenAm < currentTime) {
        time10.addClass('past');
    } else time10.addClass('future');

    // 11am
    if (elevenAm === currentTime) {
        time11.addClass('present');
    } else if (elevenAm < currentTime) {
        time11.addClass('past');
    } else time11.addClass('future');

    // 12pm
    if (noon === currentTime) {
        time12.addClass('present');
    } else if (noon < currentTime) {
        time12.addClass('past');
    } else time12.addClass('future');

    // 1pm
    if (onePm === currentTime) {
        time1.addClass('present');
    } else if (onePm < currentTime) {
        time1.addClass('past');
    } else time1.addClass('future');

    // 2pm
    if (twoPm === currentTime) {
        time2.addClass('present');
    } else if (twoPm < currentTime) {
        time2.addClass('past');
    } else time2.addClass('future');

    // 3pm
    if (threePm === currentTime) {
        time3.addClass('present');
    } else if (threePm < currentTime) {
        time3.addClass('past');
    } else time3.addClass('future');

    // 4pm
    if (fourPm === currentTime) {
        time4.addClass('present');
    } else if (fourPm < currentTime) {
        time4.addClass('past');
    } else time4.addClass('future');

    // 5pm
    if (fivePm === currentTime) {
        time5.addClass('present');
    } else if (fivePm < currentTime) {
        time5.addClass('past');
    } else time5.addClass('future');
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
   







