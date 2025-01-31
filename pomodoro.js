let time = document.getElementById("time");
let minutes = 24;
let seconds = 60;
let isrunning = false;
let countdown;


function myfunction() {
    if (isrunning) {
        clearInterval(countdown);
        document.getElementById("start-timer").innerText = "Start";
    }
    else {
        countdown = setInterval(() => {
            seconds--;
            if (seconds == 0) {
                seconds = 59;
                minutes--;
            }
            time.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        , 1000)
        document.getElementById("start-timer").innerText = "Stop";
    }
    isrunning = !isrunning;
}

