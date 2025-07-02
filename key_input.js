"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  // JSONファイル（key_input.json）を取得し、データを解析
  const res = await fetch("key_input.json"); // 非同期で取得
  const obj = await res.json(); // JSONとしてパース
  const data = obj.list; // 配列データを取得
  console.log(data); // デバッグ用出力

  // infoリストを表示するコンテナを取得
  const info_list = document.querySelector("div#date_list");

  // データごとにinfoの要素を作成
  for (const item of data) {
    const record = document.createElement("tr");
    //record.className = "data";
    // 各プロパティ（from, date, subjectなど）ごとにdivを生成
    for (const [prop, val] of Object.entries(item)) {
      const el = document.createElement("td");
      // 'from' だけはHTMLをそのまま挿入（リンクなど含むため）
      if (prop == "from") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
      el.className = prop; // クラス名をプロパティ名に設定（例：from, date, subjectなど）

      // 各項目をレコードに追加
      record.appendChild(el);
    }
    // レコード全体をinfo_listに追加
    date_list.appendChild(record);
  }
});

// ヘッダーを取り込むスクリプト
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data))
  // .then((data) => console.log(data))
  .then(() => loadHeaderData());
