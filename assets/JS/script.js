//declared variables
var currentDay = $('#currentDay');
var currentTime = moment().startOf('hour');
var beforeTime = moment().startOf('day').add(9, 'hours');
var time9 = $('#time9');

var time13 = $('#time13');

// function to activate the time clock on page start
var timeInterval = setInterval(function() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(time);
},1000);
// betweenTime();


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










// function betweenTime(){
//     if ( nineAm === currentTime) {
//     time9.addClass('present');
//     } else if (nineAm < beforeTime) {
//     time9.addClass('past');
//     } else {
//     time9.addClass('future');
//     };


//     beforeTime =  moment().startOf('day').add(13, 'hours').format('LT');
//     $('timeEl2').text(onePm);
//     var onePm = beforeTime;
//     if ( onePm === currentTime) {
//     time13.addClass('present');
//     } else if (onePm < beforeTime) {
//     time13.addClass('past');
//     } else {
//     time9.addClass('future');
//     };


// };
// console.log(currentTime);
