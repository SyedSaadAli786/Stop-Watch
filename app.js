let min = 0;
let sec = 0;
let mSec = 0;

let minH = document.getElementById("min");
let secH = document.getElementById("sec");
let mSecH = document.getElementById("mSec");

let interval;

function timer(){
    mSec++
    mSecH.innerHTML = mSec;
    if(mSec >= 100){
        sec++
        secH.innerHTML = sec
        mSec = 0
    }else if(sec >= 60){
        min++
        minH.innerHTML = min
        sec = 0
    }
}


function start(){

interval = setInterval(timer,10)

}

function pause(){

    clearInterval(interval)
}

function reset(){
    let min = 0;
    let sec = 0;
    let mSec = 0;

    minH.innerHTML = min
    secH.innerHTML = sec
    mSecH.innerHTML = mSec
    pause()
}