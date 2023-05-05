let timer = false
let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let count = document.getElementById('count')
function stopWatch(){
    if(timer){
        count.innerHTML++
        if(count.innerHTML == 100){
            sec.innerHTML++
            if(sec.innerHTML < 10){
                sec.innerHTML = "0" + sec.innerHTML
            }
            count.innerHTML = 0
        }
        if(sec.innerHTML == 60){
            min.innerHTML++
            sec.innerHTML = 0
        }
        if(min.innerHTML == 60){
            hr.innerHTML++
            min.innerHTML = 0
        }
        if(hr.innerHTML == 24){
            hr.innerHTML = 0
            timer = false
        }
        setTimeout(stopWatch,10)
    }
}
function timerStart(){
    if(timer == true){
        return
    }
    else{
        timer = true
        stopWatch()
    }
}
function timerStop(){
    if(timer == false){
        timerReset()
        return
    }
    else{
        timer = false
        stopWatch()
    }
}
function timerReset(){
    timer = false
    hr.innerHTML = "00"
    min.innerHTML = "00"
    sec.innerHTML = "00"
    count.innerHTML ="00"
}
