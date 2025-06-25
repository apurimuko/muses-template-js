// グローバル関数：ハンバーガーメニューの開閉
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("hidden");
  } else {
    alert("メニューが見つかりません");
  }
}

// 必須：ページ読み込み時に呼び出す初期化関数
function loadHeaderData() {
  // ✅ ユーザー名の取得と表示
  const username = sessionStorage.getItem("username");

  if (username) {
    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML += `<span>${username}</span>`;
  } else {
    alert("ログインしていません。ログインページに移動します。");
    location.href = "login copy.html";
    return;
  }

  // ✅ ログアウト処理
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      sessionStorage.removeItem("username");
      location.href = "login copy.html";
    });
  }

  // ✅ 残り時間のタイマー処理
  let remainingSeconds = 2400;

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

  // ✅ 「＋」を押して詳細展開
  const toggleButtons = document.querySelectorAll(".toggle-detail");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      detail.classList.toggle("hidden");
      btn.textContent = detail.classList.contains("hidden") ? "＋" : "−";
    });
  });
}

// ✅ ページ読み込み時に明示的に呼び出し
document.addEventListener("DOMContentLoaded", loadHeaderData);
