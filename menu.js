"use strict";

// ページ読み込み完了時の処理
document.addEventListener("DOMContentLoaded", async () => {
  // セッション情報からユーザー名を取得
  const username = sessionStorage.username;
  if (!username) {
    // ユーザー名が存在しない場合はログインページにリダイレクト
    window.alert("ログインしてください");
    location.href = "login.html";
  }
  // ユーザー名を画面に表示
  document.querySelector("#user_name span").textContent = username;

  // JSONファイル（data.json）を取得し、データを解析
  const res = await fetch("data.json"); // 非同期で取得
  const obj = await res.json(); // JSONとしてパース
  const data = obj.list; // 配列データを取得
  console.log(data); // デバッグ用出力

  // 未読件数をすべての該当要素に反映
  document
    .querySelectorAll("span.unread")
    .forEach((el) => (el.textContent = data.length));

  // infoリストを表示するコンテナを取得
  const info_list = document.querySelector("div#info_list");

  // データごとにinfoの要素を作成
  for (const item of data) {
    const record = document.createElement("div");
    record.className = "record";
    // 各プロパティ（from, date, subjectなど）ごとにdivを生成
    for (const [prop, val] of Object.entries(item)) {
      const el = document.createElement("div");
      // 'from' だけはHTMLをそのまま挿入（リンクなど含むため）
      if (prop == "from") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
      el.className = prop; // クラス名をプロパティ名に設定（例：from, date, subjectなど）

      // 件名（subject）の場合、アイコンや装飾を追加
      if (prop == "subject") {
        // 三角マークの追加（装飾用）
        const tri = document.createElement("div");
        tri.textContent = "&nbsp;";
        tri.className = "tri";
        record.appendChild(tri);
        // 未読マーク「！」の追加
        const mark = document.createElement("div");
        mark.className = "mark";
        const span = document.createElement("span");
        span.textContent = "!";
        span.className = "exmark";
        mark.appendChild(span);
        record.appendChild(mark);
      }
      // 各項目をレコードに追加
      record.appendChild(el);
    }
    // レコード全体をinfo_listに追加
    info_list.appendChild(record);
  }
});
