// ハンバーガーメニューの操作（必要ならメニューを表示）
function toggleMenu() {
  alert("メニューを開く処理をここに追加");
}

// ログアウト処理
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout");

  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("username"); // セッション情報削除（任意）
    location.href = "login copy.html"; // login.htmlに遷移
  });
});

// 残り時間のタイマー表示
let remainingSeconds = 2400; // 40分

function updateTime() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.getElementById("clock").textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (remainingSeconds > 0) {
    remainingSeconds--;
    setTimeout(updateTime, 1000);
  }
}

updateTime();
