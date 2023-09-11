
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var today = new Date()

const day = weekday[today.getDay()]

var time = today.getTime()

//--setting day in the DOM
document.getElementById("day").innerHTML = day

document.getElementById("time").innerHTML = time

