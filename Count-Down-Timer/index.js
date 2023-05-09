let hour = document.getElementById("hour")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let countDownHr = document.getElementById("countDownHr")
let countDownMin = document.getElementById("countDownMin")
let countDownSec = document.getElementById("countDownSec")

const countTimerStart = ()=>{
    if(countDownHr.innerHTML != "00" 
    || countDownMin.innerHTML != "00" 
    || countDownSec.innerHTML != "00"){
        if(countDownSec.innerHTML != "00"){
            countDownSec.innerHTML--
            if(countDownSec.innerHTML < 10){
                countDownSec.innerHTML = "0" + countDownSec.innerHTML
            }
        }
        if(countDownSec.innerHTML == "00" && countDownMin.innerHTML > "00"){
            countDownMin.innerHTML--
            countDownSec.innerHTML = "59"
            if(countDownMin.innerHTML < 10){
                countDownMin.innerHTML = "0" + countDownMin.innerHTML
            }
        }
        if(countDownMin.innerHTML == "00" && countDownHr.innerHTML > "00"){
            countDownHr.innerHTML--
            countDownMin.innerHTML = "60"
            if(countDownHr.innerHTML < 10){
                countDownHr.innerHTML = "0" + countDownHr.innerHTML
            }
        }
        setTimeout(countTimerStart,1000)
    }
}

const changeTimer = ()=>{
    if(!hour.value){hour.value = "00"}
    if(!minutes.value){minutes.value = "00"}
    if(!seconds.value){seconds.value = "00"}
    countDownHr.innerHTML = hour.value
    countDownMin.innerHTML = minutes.value
    countDownSec.innerHTML = seconds.value
    countTimerStart()
}
const countTimerStop = () =>{
    countDownHr.innerHTML = "00"
    countDownMin.innerHTML = "00"
    countDownSec.innerHTML = "00"
}
addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        changeTimer()
    }
})