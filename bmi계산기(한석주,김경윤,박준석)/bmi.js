let name_;
let appStarted = false;

function startApp() {
  if (appStarted) return;
  appStarted = true;

  const nameInput = document.getElementById("username");
  name_ = nameInput.value.trim();

  if (!name_) {
    alert("이름을 입력해주세요.");
    appStarted = false;
    return;
  }

  alert(`어서오세요 ${name_}씨`);
  document.getElementById("nameModal").style.display = "none";
  document.getElementById("bmiForm").style.display = "block";
  document.getElementById("img").style.display = "block";

  document.querySelector(".END").innerHTML = `<h2>${name_}님의 BMI 수치는 파이썬에서 받아올 예정입니다.</h2>`;
}

function showResult(event) {
  event.preventDefault();
  const height = document.getElementById("height").value.trim();
  const weight = document.getElementById("weight").value.trim();

  if (!height || !weight) {
    alert("키와 몸무게를 모두 입력해주세요.");
    return;
  }

  document.getElementById("bmiForm").style.display = "none";
  document.getElementById("img").style.display = "none";
  document.querySelector(".main").style.display = "flex";
}

// 엔터키로도 시작 가능
document.getElementById("username").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    startApp();
  }
});
