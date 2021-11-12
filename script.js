var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function () { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
var today = dayOfWeek + ", ";
var date = curMonth + " " + dayOfMonth + ", " + curYear;

document.getElementsByTagName('h1')[0].textContent = today;
document.getElementsByTagName('h2')[0].textContent = date;

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function startTime() {
    var time = new Date(),
                    h = checkTime(time.getHours()),
                    m = checkTime(time.getMinutes());
    document.getElementById("time").innerHTML = h + ":" + m;
    t = setTimeout(function() {
        startTime()
    }, 500);
}
startTime();