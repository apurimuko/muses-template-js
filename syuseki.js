"use strict";

fetch("syuseki.json") // JSONファイルのパスを指定
  .then((response) => {
    if (!response.ok) throw new Error("読み込みに失敗しました");
    return response.json();
  })
  .then((data) => {
    const table = document.createElement("table");
    table.id = "date_list";
    table.border = "1";
    table.style.borderCollapse = "collapse";

    // ヘッダー行の作成
    const header = document.createElement("tr");
    ["回数", "授業日", "時限", "出欠情報"].forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.padding = "4px";
      header.appendChild(th);
    });
    table.appendChild(header);

    // データ行の作成
    data.list.forEach((item) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = item.id;

      const dateCell = document.createElement("td");
      dateCell.textContent = item.date;

      const periodCell = document.createElement("td");
      periodCell.textContent = item.period;

      const impCell = document.createElement("td");
      impCell.textContent = item.imp || item.input || "—"; // フォールバック対応

      [idCell, dateCell, periodCell, impCell].forEach((cell) => {
        cell.style.padding = "4px";
        row.appendChild(cell);
      });

      table.appendChild(row);
    });

    // 表を表示する場所（例：#container）に追加
    const container = document.getElementById("container");
    container.innerHTML = ""; // 前の内容があれば消す
    container.appendChild(table);
  })
  .catch((error) => console.error("エラー:", error));

// ヘッダーを取り込むスクリプト
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data))
  // .then((data) => console.log(data))
  .then(() => loadHeaderData());
