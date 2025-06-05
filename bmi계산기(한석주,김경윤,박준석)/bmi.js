
let name_;
let appStarted = false; // 실행 여부 체크 변수

function startApp() {
  if (appStarted) return; // 이미 실행했으면 종료
  appStarted = true;

  const nameInput = document.getElementById("username");
  name_ = nameInput.value.trim();

  if (!name_) {
    alert("이름을 입력해주세요.");
    appStarted = false; // 실패했으면 다시 실행 허용
    return;
  }

  alert(`어서오세요 ${name_}씨`);
  document.getElementById("nameModal").style.display = "none";
  document.getElementById("bmiForm").style.display = "block";
  document.getElementById("img").style.display = "block"
}
function showResult(event) {
  event.preventDefault(); // 폼 자동 제출 방지
  const height = document.getElementById("height").value.trim();
  const weight = document.getElementById("weight").value.trim();

  if (!height || !weight) {
    alert("키와 몸무게를 모두 입력해주세요.");
    return; // 아무 값 없으면 종료
  }

  // 모든 값이 있을 때만 폼 숨기기
  document.getElementById("bmiForm").style.display = "none";
  document.getElementById("img").style.display = "none";
  
}
// Enter 키 눌렀을 때 실행
document.getElementById("username").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // 폼 제출 막기
    startApp();
  }
});
