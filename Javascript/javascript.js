const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day_name");
const dayNumber = document.getElementById("day_number");
const fullYearr = document.getElementById("year");

const date = new Date();
// console.log(date.getMonth());

// @ts-ignore
const month = date.getMonth();

// @ts-ignore
monthName.innerHTML = date.toLocaleString("en", {
  month: "long",
});

// @ts-ignore
dayName.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});

// @ts-ignore
dayNumber.innerHTML = date.getDate();
// @ts-ignore
fullYearr.innerHTML = date.getFullYear();
