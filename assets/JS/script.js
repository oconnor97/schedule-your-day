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
$('#timeEl').text(nineAm);


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
