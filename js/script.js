var i = 0;
    var txt = 'Border surveillance and security';
    var speed = 75;
    var string ="(By Rakshak)";
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("app").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('date_with_time').innerHTML = today
        var t = setTimeout(startTime, 500);
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }