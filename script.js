var Clock = (function () {
  'use strict';

  var getCurrentTime = function () {
    var currentTime = new Date();
    return currentTime;
  };

  var setLeadingZero = function(unitOfTime) {
    if (unitOfTime < 10) {
      unitOfTime = "0" + unitOfTime;
    }
  };

  var getHours = function () {
    return getCurrentTime().getHours();
  };

  var setHours = function () {
    var hours = getHours();

    if (hours > 12) {
      hours = hours -12;
    } else if (hours < 10) {
      hours = "0" + hours;
    }
    return hours;
  };

  var getMinutes = function () {
    return getCurrentTime().getMinutes();
  };

  var setMinutes = function () {
    var minutes = getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes;
  };

  var getSeconds = function () {
    return getCurrentTime().getSeconds();
  };

  var setSeconds = function () {
    var seconds = getSeconds();

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return seconds;
  };

  var setMeridian = function () {
    var meridian;

    if (getHours() >= 12) {
      meridian = "PM";
    } else {
      meridian = "AM";
    }

     return meridian;
  };

  var printtime = function () {
    var clockTime = setHours() + ":" + setMinutes() + ":" + setSeconds() + " " + setMeridian();
    var clock = document.querySelector('#clock');
    clock.innerText = clockTime;
  };

  return {
    init: printtime
  };

})();
