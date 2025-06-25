// ハンバーガーメニューの操作（必要ならメニューを表示）
function toggleMenu() {
  alert("メニューを開く処理をここに追加");
}

// ログアウト処理とユーザー名表示
document.addEventListener("DOMContentLoaded", () => {
  // ユーザー名の表示処理
  const username = sessionStorage.getItem("username");

  if (username) {
    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML += `<span>${username}</span>`;
  } else {
    alert("ログインしていません。ログインページに移動します。");
    location.href = "login copy.html"; // ←ログイン画面のファイル名に合わせて修正
    return; // 以下の処理を止める
  }

  // ログアウト処理
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("username"); // セッション情報削除
    location.href = "login copy.html"; // ログインページに戻る
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
