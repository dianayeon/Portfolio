/**
 * const html = {
 *  getElementById: function(){},
 * }
 */

// marketing 동적 기능 추가
const marketing = document.getElementById("marketing");
const marketing_des = document.getElementById("keywords_des_marketing");
const marketing_closeBtn = document.getElementById("marketing_closeBtn");

marketing.addEventListener("click", function () {
    marketing_des.className = "show";
});

marketing_closeBtn.addEventListener("click", function () {
    marketing_des.className = "hide";
});

// reading 동적 기능 추가
const reading = document.getElementById("reading");
const reading_des = document.getElementById("keywords_des_reading");
const reading_closeBtn = document.getElementById("reading_closeBtn");

reading.addEventListener("click", function () {
    reading_des.className = "show";
});

reading_closeBtn.addEventListener("click", function () {
    reading_des.className = "hide";
});

// challenge 동적 기능 추가
const challenge = document.getElementById("challenge");
const challenge_des = document.getElementById("keywords_des_challenge");
const challenge_closeBtn = document.getElementById("challenge_closeBtn");

challenge.addEventListener("click", function () {
    challenge_des.className = "show";
});

challenge_closeBtn.addEventListener("click", function () {
    challenge_des.className = "hide";
});