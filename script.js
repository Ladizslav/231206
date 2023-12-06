setInterval(() => {
    const date = new Date();
    const time = "#" + timeToHex(date.getHours())
        + timeToHex(date.getMinutes())
        + timeToHex(date.getSeconds());
        document.querySelector("body").style["background-color"]=time;
        document.querySelector("#centerPart").innerHTML = time;
    },1000)

function timeToHex(digits) {
    return digits.toString().padStart(2,"0")
}

function showTimerInput() {
    document.getElementById('timerInput').style.display = 'inline-block';
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('cancelButton').style.display = 'inline-block';
}

function updateHexClock() {
    const date = new Date();
    const time = "#" + timeToHex(date.getHours())
        + timeToHex(date.getMinutes())
        + timeToHex(date.getSeconds());
    document.body.style.backgroundColor = time;
    document.querySelector("#time").innerHTML = time;
}

function startTimer() {
    const seconds = parseInt(document.getElementById('timerInput').value, 10);
    if (isNaN(seconds) || seconds <= 0) {
        alert('Zadejte platný čas v sekundách.');
        return;
    }

    document.getElementById('timerInput').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('cancelButton').style.display = 'none';

    document.body.style.backgroundColor = '#000';
    document.querySelector("#time").innerHTML = 'Časovač běží...';

    setTimeout(() => {
        updateHexClock();
        showTimerInput();
    }, seconds * 1000);
}

function cancelTimer() {
    document.getElementById('timerInput').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('cancelButton').style.display = 'none';

    updateHexClock();
}