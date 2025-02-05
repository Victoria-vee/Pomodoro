let time = document.getElementById("time");
let minutes = 24;
let seconds = 60;
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
            if (seconds ===0 && minutes === 0){
            clearInterval(countdown);
            minutes= 24;
            seconds = 60;
            time.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            document.getElementById("start-timer").innerText = "Start";
            isrunning = false;
            }

            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }

            time.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        , 1000)
        document.getElementById("start-timer").innerText = "Stop";
    }
    isrunning = !isrunning;

    
    
}

// Reset timer function
function resetbutton() {
        clearInterval(countdown);
        minutes = 24;
        seconds = 60;
        time.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        document.getElementById("start-timer").innerText = "Start";
        isrunning = false;
    }