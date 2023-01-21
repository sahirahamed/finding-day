const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const result = document.getElementById('result');
const getDay = document.getElementById('getDay');

getDay.addEventListener("click", () =>{
    let dateObj =new Date(`${date.value} ${month.value} ${year.value}`);
let day = dateObj.toString();
day = day.slice(0,3);
result.innerText = day
})

