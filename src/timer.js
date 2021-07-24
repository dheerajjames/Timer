let startTimerButton = document.querySelector('.startTimer');
let pauseTimerButton = document.querySelector('.pauseTimer');
let timerDisplay = document.querySelector('.timer');
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;


const startTimer = () => {
    if(!running){
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);     
        paused = 0;
        running = 1;
    }
}

const pauseTimer = () => {
    if (!difference){
      } else if (!paused) {
        clearInterval(tInterval);
        savedTime = difference;
        paused = 1;
        running = 0;
      } else {
    startTimer();
      }
}
const resetTimer = () => {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    timerDisplay.innerHTML = 'Start Timer!';
}

const getShowTime = () => {
    updatedTime = new Date().getTime();
    if (savedTime){
      difference = (updatedTime - startTime) + savedTime;
    } else {
      difference =  updatedTime - startTime;
    }
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds  ;
}