// const nowTime = document.querySelector(".now_time");
const time = document.querySelector(".content__nowtime");
const texdt = document.querySelector("form");

const inputYear = document.querySelector(".input__year");






function getTime() {
    const nowTime = new Date();

    const inputDay = new Date("2021-06-00:00:00:00+0900");
    // console.log(inputDay);


    const test = document.getElementById("input__year").value;
    const test1 = document.getElementById("form_submit");

    

    const nowYear = nowTime.getFullYear();
    const nowMonth = nowTime.getMonth() + 1;
    const nowDay = nowTime.getDate();
    const nowHours = nowTime.getHours();
    const nowMinutes = nowTime.getMinutes();
    const nowSeconds = nowTime.getSeconds();
    
    time.innerText = `${nowYear}년\
    ${nowMonth < 10 ? `0${nowMonth}월` : `${nowMonth}월`}\
    ${nowDay < 10 ? `0${nowDay}일` : `${nowDay}일`}\
    ${nowHours < 10 ? `0${nowHours}시` : `${nowHours}시`}\
    ${nowMinutes < 10 ? `0${nowMinutes}분` : `${nowMinutes}분`}\
    ${nowSeconds < 10 ? `0${nowSeconds}초` : `${nowSeconds}초`}`;

}

function init() {
    getTime();
    setInterval(getTime,1000);
}


init();