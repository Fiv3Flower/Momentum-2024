const fullDate = document.querySelector("#date");

function getDate() {
    const fullDates = new Date();
    const year = String(fullDates.getFullYear());
    const month = String(fullDates.getMonth() + 1); 
    const date = String(fullDates.getDate());
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[fullDates.getDay()];

    fullDate.innerText = `${year}-${month}-${date} ${day}`;
}

getDate();
setInterval(getDate, 1000);