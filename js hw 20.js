let getId = x => document.getElementById(x);

getId('add').addEventListener('click', function () { 
    let setTime = +prompt('Set the time in seconds', '10');
    if (setTime) {
        let setHours = Math.floor(setTime / 3600);
        setHours = checkTime(setHours)
        getId('hours').innerHTML = setHours;
        let setMinutes = Math.floor(setTime % 3600 / 60);
        setMinutes = checkTime(setMinutes)
        getId('minutes').innerHTML = setMinutes;
        let setSeconds = Math.floor(setTime - setHours * 3600 - setMinutes * 60);
        setSeconds = checkTime(setSeconds)
        getId('seconds').innerHTML = setSeconds;
    } else {
        alert("Set the time");
    }
})

getId('start').addEventListener('click', function () {
    let hours = +getId('hours').innerHTML;
    let minutes = +getId('minutes').innerHTML;
    let seconds = +getId('seconds').innerHTML;
    let count;
	
    getId('stop').addEventListener('click', function () { 
        clearInterval(count);
    })
    count = setInterval(function () {
        if (seconds != 0 || minutes != 0 || hours != 0) {
            if (seconds > 0) {
                seconds -= 1;
                seconds = checkTime(seconds);
                getId('seconds').innerHTML = seconds;
               
            } else if (minutes > 0 && seconds == '00') {
                minutes -= 1;
                minutes = checkTime(minutes); 
                getId('minutes').innerHTML = minutes;
                seconds = 59;
                getId('seconds').innerHTML = seconds;
                
            } else if (hours > 0 && minutes == '00' && seconds == '00') {
                hours -= 1;
                hours = checkTime(hours); 
                minutes = checkTime(minutes);
                getId('hours').innerHTML = hours;
                minutes = 59;
                getId('minutes').innerHTML = minutes;
                seconds = 59;
                getId('seconds').innerHTML = seconds;
               
            }
			if (hours == 0 && minutes==0 && seconds==0){
		getId('big').style.display = 'none';
		getId('boom').style.display = 'block';
	}
        }
    }, 1000)
	
   
})

function checkTime(time) {
    if (time < 10) time = "0" + time 
    return time;
}

    

