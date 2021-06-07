// const nowTime = document.querySelector(".now_time");
const time = document.querySelector(".js-nowTime");
const form = document.querySelector(".js-form");
const inputYear = document.querySelector('.input__year');

let nowTime;
let setTime;
let resultbox;

inputYear.focus();

function getTime() {
    nowTime = new Date();

    // nowtime
    const nowYear = nowTime.getFullYear();
    const nowMonth = nowTime.getMonth() + 1;
    const nowDay = nowTime.getDate();
    const nowHours = nowTime.getHours();
    const nowMinutes = nowTime.getMinutes();
    const nowSeconds = nowTime.getSeconds();

    time.innerText = `${nowYear}년\
    ${nowMonth < 10
        ? `0${nowMonth}월`
        : `${nowMonth}월`}\
    ${nowDay < 10
            ? `0${nowDay}일`
            : `${nowDay}일`}\
    ${nowHours < 10
                ? `0${nowHours}시`
                : `${nowHours}시`}\
    ${nowMinutes < 10
                    ? `0${nowMinutes}분`
                    : `${nowMinutes}분`}\
    ${nowSeconds < 10
                        ? `0${nowSeconds}초`
                        : `${nowSeconds}초`}`;

    // Timegap calculator

}

function newGetTime() {

    const setYear = Number(document.getElementById("input__year").value);
    const setMonth = Number(document.getElementById("input__month").value) - 1;
    const setDate = Number(document.getElementById("input__date").value);

    setTime = new Date(setYear, setMonth, setDate);

    console.log(setMonth);

    textAreaClear();

    if (setYear && setMonth && setDate || (setMonth === 0)) {
        if (((1 <= setYear) && (setYear <= 9999)) && ((0 <= setMonth) && (setMonth <= 12)) && ((1 <= setDate) && (setDate <= 31))) {

            const timeGap = (setTime.getTime() - nowTime.getTime()) / 1000;

            const datesGap = timeGap / 31536000 * 365;
            const hoursGap = (datesGap % 1) * 24;
            const minutesGap = (hoursGap % 1) * 60;
            const secondsGap = (minutesGap % 1) * 60;

            const resultbox = document.createElement("div");
            const cancelBtn = document.createElement("button");
            const span = document.createElement("span");
            resultbox.className = "resultbox";
            cancelBtn.className = "cancelBtn";
            span.className = "timeRemaining";
            cancelBtn.innerText = "❌";

            form.appendChild(resultbox);
            resultbox.appendChild(cancelBtn);
            resultbox.appendChild(span);

            if (timeGap >= 0) {

                span.innerText = Math.floor(datesGap) + "일 " + Math.floor(hoursGap) + "시간 " +
                        Math.floor(minutesGap) + "분 " + Math.floor(secondsGap) + "초 남았습니다.";
            } else {

                Math.abs(span.innerText);
                span.innerText = Math.abs(Math.floor(datesGap)) + "일 " + Math.abs(
                    Math.floor(hoursGap)
                ) + "시간 " + Math.abs(Math.floor(minutesGap)) + "분 " + Math.abs(
                    Math.floor(secondsGap)
                ) + "초 지났습니다.";
            }

            cancelBtn.addEventListener("click", deletebox);

            function deletebox() {
                form.removeChild(resultbox);
            }
        }
    }

}

function textAreaClear() {

    const year = document.getElementsByClassName('input__year');
    const month = document.getElementsByClassName('input__month');
    const date = document.getElementsByClassName('input__date');

    for (let i = 0; i < year.length; i++) {
        year[i].value = '';
    }
    for (let i = 0; i < month.length; i++) {
        month[i].value = '';
    }
    for (let i = 0; i < date.length; i++) {
        date[i].value = '';
    }

}

form.addEventListener("submit", newGetTime);

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
