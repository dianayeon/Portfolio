// growth 동적 기능 추가
const growth = document.getElementById("growth");
const growth_des = document.getElementById("keywords_des_growth");
const growth_closeBtn = document.getElementById("growth_closeBtn");

growth.addEventListener("click", function () {
  growth_des.className = "show";
});

growth_closeBtn.addEventListener("click", function () {
  growth_des.className = "hide";
});

// leadership 동적 기능 추가
const leadership = document.getElementById("leadership");
const leadership_des = document.getElementById("keywords_des_leadership");
const leadership_closeBtn = document.getElementById("leadership_closeBtn");

leadership.addEventListener("click", function () {
  leadership_des.className = "show";
});

leadership_closeBtn.addEventListener("click", function () {
  leadership_des.className = "hide";
});

// diversity 동적 기능 추가
const diversity = document.getElementById("diversity");
const diversity_des = document.getElementById("keywords_des_diversity");
const diversity_closeBtn = document.getElementById("diversity_closeBtn");

diversity.addEventListener("click", function () {
    diversity_des.className = "show";
});

diversity_closeBtn.addEventListener("click", function () {
    diversity_des.className = "hide";
});