const displayTime = document.querySelector('.display-container');

const rstBtn = document.getElementsByClassName('reset')[0];
const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');

let timeStatus = false;
let newSec=0;
let newMin = 0;
let newHr = 0;

const timer = () => {
    if(timeStatus === false){
        newSec = parseInt(newSec);
        newMin = parseInt(newMin);
        newHr = parseInt(newHr);
        newSec += 1;
        if(newSec == 60){
            newMin += 1;
            newSec = 0;
        }
        if(newMin == 60){
            newHr += 1;
            newMin = 0;
            newSec = 0;
        }
        if(newSec < 10){
            newSec = '0'+newSec;
        }
        if(newMin < 10){
            newMin = '0'+newMin;
        }
        if(newHr < 10){
            newHr = '0'+newHr;
        }
        setTimeout(timer,1000);
        displayTime.textContent = `${newHr} : ${newMin} :  ${newSec}`;
    }

}
const stopTimer = () => {
    if(timeStatus === false){
        timeStatus = true;
    }
}
const startTimer = () => {
    if(timeStatus === false){
        timer();
    }else{
        timeStatus = false;
        timer();
    }
}
startBtn.addEventListener('click',startTimer);

stopBtn.addEventListener('click',stopTimer);

rstBtn.addEventListener('click', (event)=>{
    displayTime.innerHTML = '00 : 00 : 00';
    timeStatus = true;
    newHr = 0;
    newMin = 0;
    newSec = 0;
})