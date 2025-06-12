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
  const formData = new FormData();
  formData.append("height", height);
  formData.append("weight", weight);

  fetch("/bmi", {
    method: "POST",
    body: formData
  })
    .then((response) => {
      if (!response.ok) throw new Error("서버 오류 발생");
      return response.json();
    })
    .then((data) => {
      const bmi = data.bmi;
      document.getElementById("bmiForm").style.display = "none";
      document.getElementById("img").style.display = "none";
      document.querySelector(".main").style.display = "flex";
      document.querySelector(".END").innerHTML = `<h2>${name_}님의 BMI는 ${bmi}입니다.</h2><br>`;

      if (bmi<=18.5) {
        document.querySelector(".BMI h2").innerText = "저체중입니다.";
      } else if (bmi<=23) {
        document.querySelector(".BMI h2").innerText = "정상입니다.";
      } else if (bmi<=25) {
        document.querySelector(".BMI h2").innerText = "과체중입니다.";
      } else if (bmi<= 30) {
        document.querySelector(".BMI h2").innerText = "비만입니다.";
      } else {
        document.querySelector(".BMI h2").innerText = "병원에 한번가보세요.";
      }
    })

    .catch((error) => {
      console.error(error);
      alert("BMI 계산 실패: 서버에 문제가 있습니다.");
    });


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
const Button = document.querySelector(".BACK");
function EoE(){
  document.querySelector(".main").style.display = "none";
  document.getElementById("img").style.display = "block";
  document.getElementById("bmiForm").style.display = "block";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

}
Button.addEventListener("click",EoE)
