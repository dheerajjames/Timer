const timerStart = document.getElementById("start");
const timerPause = document.getElementById("pause");
const timerReset = document.getElementById("t-reset");

const hrSpanTimer = document.getElementById("timer-hour");
const minSpanTimer = document.getElementById("timer-minute");
const secdSpanTimer = document.getElementById("timer-second");

const hrInput = document.getElementById("timer-hrs");
const minInput = document.getElementById("timer-mins");
const secdInput = document.getElementById("timer-secs");

let timerHours = 00;
let timerMinutes = 00;
let timerSeconds = 00;

const displayTimer = () => {
    document.getElementById('timer').style = "display: flex;";
    document.getElementById('main-display').style = "display: none;";
}

let count = 0;
let isTimerPlay = false;


const checkIfPlay = () => {
    if(isTimerPlay){
        timerPause.disabled = false;
        timerReset.disabled = false; 
        timerStart.style.color = "grey";
        timerPause.style.color = "unset";
        timerReset.style.color = "unset";
    }
    else{
        timerPause.disabled = true;
        timerReset.disabled = true; 
        timerStart.style.color = "unset";
        timerPause.style.color = "grey";
        timerReset.style.color = "grey";
    }
}

const startTimerFunc = () => {
    isTimerPlay = true;
    checkIfPlay();

    if(count == 0){
        timerHours = hrInput.value;
        timerMinutes = minInput.value;
        timerSeconds = secdInput.value;
        count += 1;
    }

    if(timerSeconds == "" && timerMinutes == "" && timerHours == ""){
        alert('Enter a value for Timer to Start');
        resetTimerFunc();
    } 
    else if(parseInt(timerSeconds) < 0 || parseInt(timerMinutes) < 0 || parseInt(timerHours) < 0){
        alert('Value for Timer cannot be negative');
        resetTimerFunc();
    }  
    else if(timerSeconds >= 60){
        alert("Seconds should be less than 60");
        resetTimerFunc();
    }
    else if(timerMinutes >= 60){
        alert("Minutes should be less than 60");
        resetTimerFunc();
    }
    else if(timerHours >= 24){
        alert("Hours should be less than 24");
        resetTimerFunc();
    }
    else{
        if(timerHours == ""){
            timerHours = "00";
        }
        if(timerMinutes == ""){
            timerMinutes = "00";
        }

        timerStart.disabled = true;
        hrInput.disabled = true;
        secdInput.disabled = true;
        minInput.disabled = true;

        window.myTimer= setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds -=1;
                if(timerSeconds <= 9){
                    timerSeconds = "0" + timerSeconds;
                }
            }
            else {
                if (timerMinutes > 0) {
                    timerMinutes--;
                    timerSeconds = 59;
                    if(timerMinutes <= 9){
                        timerMinutes = "0" + timerMinutes;
                    }
                }
                else {
                    timerMinutes = 59;
                    timerSeconds = 59;
                    timerHours -=1;
                    if(timerHours <= 9){
                        timerHours = "0" + timerHours;
                    }
                }
            }
    
            if(timerSeconds != 0 || timerMinutes != 0 || timerHours != 0){
        
                if(timerHours <= 9 && timerHours.length <2){
                    timerHours = "0" + timerHours;
                }
                if(timerMinutes <= 9 && timerMinutes.length <2){
                    timerMinutes = "0" + timerMinutes;
                }
                if(timerSeconds <= 9 && timerSeconds.length <2){
                    timerSeconds = "0" + timerSeconds;
                }
            }
            
            if(timerSeconds == 0 && timerMinutes == 0 && timerHours == 0){
                alert("Timer Completed!");
                resetTimerFunc();
            }
    
        hrSpanTimer.innerHTML = timerHours;
        minSpanTimer.innerHTML = timerMinutes;
        secdSpanTimer.innerHTML = timerSeconds;
        }, 1000);
    } 
}

const pauseTimerFunc = () => {
    timerStart.disabled = false;
    timerStart.style.color = "unset";
    timerPause.style.color = "grey";
    
    clearInterval(window.myTimer);
}

const resetTimerFunc = () => {
    count = 0;
    enableFunction();
    isTimerPlay = false;
    checkIfPlay();
    clearInterval(window.myTimer);

    timerHours = "00";
    timerMinutes = "00";
    timerSeconds = "00";
    hrSpanTimer.innerHTML = "00";
    minSpanTimer.innerHTML = "00";
    secdSpanTimer.innerHTML = "00";

    hrInput.value = "";
    minInput.value = "";
    secdInput.value = ""; 
}

timerStart.addEventListener('click', startTimerFunc);
timerPause.addEventListener('click', pauseTimerFunc);
timerReset.addEventListener('click', resetTimerFunc);

const enableFunction = () => {
    timerStart.disabled = false;
    hrInput.disabled = false;
    secdInput.disabled = false;
    minInput.disabled = false;
}


