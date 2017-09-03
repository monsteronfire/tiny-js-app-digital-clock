(function () {
  function getCurrentTime () {
    var currentTime = new Date();
    return currentTime;
  }

  function getHours () {
    return getCurrentTime().getHours();
  }

  function setHours () {
    var hours = getHours();

    if (hours > 12) {
      hours = hours -12;
    }
    return hours;
  }

  function getMinutes () {
    return getCurrentTime().getMinutes();
  }

  function setMinutes () {
    var minutes = getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes;
  }

  function getSeconds () {
    return getCurrentTime().getSeconds();
  }

  function setSeconds () {
    var seconds = getCurrentTime.getSeconds();

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return seconds;
  }

  function setMeridian () {
    var meridian;

    if (getHours() >= 12) {
      meridian = "PM";
    } else {
      meridian = "AM";
    }

     return meridian;
  }

  function printtime () {
    var clockTime = getHours() + ":" + getMinutes() + ":" + getSeconds() + " " + setMeridian();
    var clock = document.querySelector('#clock');
    clock.innerText = clockTime;
  }

  setInterval(printtime, 1000);
})();
