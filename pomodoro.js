
let time = document.getElementById("time");
let alarmsound = document.getElementById("alarm")
let minutes = localStorage.getItem("selectedminutes") || 1;
let min = (minutes>59) ? "0" : minutes
let seconds = 0;
let hour = Math.floor(minutes / 60)
time.innerText = `${hour > 0 ? hour + ":" : ""}${min < 10 ? "0" : ""}${min}:${seconds < 10 ? "0" : ""}${seconds}`;
let isrunning = false;
let countdown;

// Start and stop timer function
function myfunction() {
    if (isrunning) {
        clearInterval(countdown);
        document.getElementById("start-timer").innerText = "Start";
    }
    else {
        countdown = setInterval(() => {
            if (seconds ===0 && min === 0 && hour ===0){
            alarmsound.play();
            clearInterval(countdown);
            minutes= localStorage.getItem("selectedminutes") || 1;
            seconds = 10;
            time.innerText = `${hour > 0 ? hour + ":" : ""}${min < 10 ? "0" : ""}${min}:${seconds < 10 ? "0" : ""}${seconds}`;
            document.getElementById("start-timer").innerText = "Start";
            isrunning = false;
            }
            seconds--;
            if (seconds < 0) {
                seconds = 59;
               min--;
               if(min< 0){
                min = 59
                hour--
                }
            }
            time.innerText = `${hour > 0 ? hour + ":" : ""}${min < 10 ? "0" : ""}${min}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        , 1000)
        document.getElementById("start-timer").innerText = "Stop";
    }
    isrunning = !isrunning;  
}

// Reset timer function
function resetbutton() {
        clearInterval(countdown);
        minutes = localStorage.getItem("selectedminutes") || 1;
        let min = (minutes>59) ? "0" : minutes
        seconds =0;
        let hour = Math.floor(minutes / 60)
        time.innerText = `${hour > 0 ? hour + ":" : ""}${min < 10 ? "0" : ""}${min}:${seconds < 10 ? "0" : ""}${seconds}`;
        document.getElementById("start-timer").innerText = "Start";
        alarmsound.pause(); 
        alarmsound.currentTime = 0;
        isrunning = false;
    }
