window.resizeTo(300, 200)

const buttons = document.querySelectorAll('.buttons');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milsec = document.getElementById('milsec');
let interval;
let m = 0;
let s = 0;
let ms = 0;

buttons[0].onclick = startWatch;
buttons[1].onclick = stopWatch;
buttons[2].onclick = resetWatch;

function startWatch(){
    interval = setInterval(tictoc, 10)
}
function stopWatch(){
    clearInterval(interval)
}
function resetWatch(){
    clearInterval(interval)
    m = 0;
    s = 0;
    ms = 0;
    minutes.innerHTML = '00'
    seconds.innerHTML = '00'
    milsec.innerHTML = '00'
}

function tictoc(){
    ms++;
    milsec.innerHTML = '0'+ms
    if (ms > 9) {
        milsec.innerHTML = ms
    }
    if (ms >= 99) {
        ms = 0
        s++
        seconds.innerHTML = '0'+s
    }
    if (s > 9) {
        seconds.innerHTML = s
    }
    if (s > 59) {
        s = 0
        seconds.innerHTML = '0'+s
        m++
        minutes.innerHTML = '0'+m
        if (m > 9) {
            minutes.innerHTML = m
        }
    }
}