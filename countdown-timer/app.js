const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// ==================== //

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2020, 8, 20, 10, 30);
// console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month]);
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent = `Giveaway Ends on ${weekday}, ${date} ${month} ${year}, ${hour}:${minutes}pm`;

// FUTURE TIME IN MS

const futureTime = futureDate.getTime();
// console.log(futureTime);

getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log(today);

  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 6ps
  // 1hr = 60min
  // 1d = 24hr

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let mins = Math.floor((t % oneHour) / oneMin);
  // console.log(mins);
  let secs = Math.floor((t % oneMin) / 1000);
  // console.log(secs);

  // SET VALUES ARRAY
  const values = [days, hours, mins, secs];

  format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, i) => {
    item.innerHTML = format(values[i]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired</h4>`;
  }
};

// COUNTDOWN
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
