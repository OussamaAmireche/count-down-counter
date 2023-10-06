let days = document.querySelector('#days p');
let hours = document.querySelector('#hours p');
let minutes = document.querySelector('#minutes p');
let seconds = document.querySelector('#seconds p');

let counter = setInterval(() => {
    let time = new Date('december 31, 2024 23:59:59').getTime() - new Date().getTime();
    let day = Math.floor(time / (1000 * 3600 * 24));
    let hour = Math.floor(time % (1000 * 3600 * 24) / (1000 * 3600));
    let minute = Math.floor((time % (1000 * 3600 * 24)) % (1000 * 3600) / (1000 * 60));
    let second = Math.floor(((time % (1000 * 3600 * 24)) % (1000 * 3600)) % (1000 * 60) / 1000);
    days.textContent = day < 10 ? `0${day}` : day;
    hours.textContent = hour < 10 ? `0${hour}` : hour;
    minutes.textContent = minute < 10 ? `0${minute}` : minute;
    seconds.textContent = second < 10 ? `0${second}` : second;
}, 1000);
