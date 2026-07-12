let timer = {
    hours: 0,
    min: 0,
    sec: 0
}

let getStartBtn = document.querySelector(".start-btn");
let secPara = document.querySelector('.sec')
let minPara = document.querySelector('.min')
let hourPara = document.querySelector('.hour')
let timeingID;
let isBtn = false

function startTime() {
    getStartBtn.innerHTML = 'Stop Timer';
    getStartBtn.classList.add('stop-btn')
    if (!isBtn) {
        timeingID = setInterval(() => {
            sectime();
        }, 1000)
        isBtn = true
    }
    else {
        clearInterval(timeingID);
         getStartBtn.innerHTML = 'Start Timer';
         isBtn = false
         getStartBtn.classList.remove('stop-btn')
    }
    
}

function sectime() {

    secPara.classList.add('timer-text')
    timer.sec++;
    if(timer.sec === 60){
        timer.sec = 0
        mintime();
    }
    if (timer.sec > 9) {
        secPara.innerHTML = `${timer.sec}`
    } else {
        secPara.innerHTML = `0${timer.sec}`
    }
   
}

function mintime() {
    minPara.classList.add('timer-text')
    timer.min++;
    if(timer.min === 60){
        timer.min = 0
        hourtime();
    }
    if (timer.min > 8) {
        minPara.innerHTML = `${timer.min}:`
    } else {
        minPara.innerHTML = `0${timer.min}:`
    }
   
}

function hourtime() {
    hourPara.classList.add('timer-text')
    timer.hours++

    if (timer.hours > 8) {
        hourPara.innerHTML = `${timer.hours}:`
    } else {
        hourPara.innerHTML = `0${timer.hours}:`
    }
  
}

function resetTimer(){
    timer.hours = 0;
    timer.min = 0;
    timer.sec = 0;
    hourPara.innerHTML = `0${timer.hours}:`
    minPara.innerHTML = `0${timer.min}:`
    secPara.innerHTML = `0${timer.sec}`

}
