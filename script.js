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

