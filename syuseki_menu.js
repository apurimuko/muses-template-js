"use strict";
fetch("key_menu.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("読み込みに失敗しました");
    }
    return response.json(); // 一度だけ呼ぶ
  })
  .then((data) => {
    const container = document.getElementById("container");

    data.list.forEach((subject) => {
      const kamokuDiv = document.createElement("div");
      kamokuDiv.className = "kamoku";

      const nameDiv = document.createElement("div");
      nameDiv.className = "kamoku_name";
      nameDiv.textContent = subject.name;
      kamokuDiv.appendChild(nameDiv);

      container.appendChild(kamokuDiv);
    });
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// ヘッダーを取り込むスクリプト
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data))
  // .then((data) => console.log(data))
  .then(() => loadHeaderData());
