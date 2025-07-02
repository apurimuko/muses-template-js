"use strict";

fetch("key_menu.json")
  .then((response) => {
    if (!response.ok) throw new Error("読み込みに失敗しました");
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("container");
    container.innerHTML = ""; // 前回の内容が残っている場合に備え、初期化

    data.list.forEach((subject) => {
      const kamokuDiv = document.createElement("div");
      kamokuDiv.className = "kamoku";
      kamokuDiv.style.cursor = "pointer"; // カーソルを手の形に

      // クリックで syuseki.html に移動
      kamokuDiv.addEventListener("click", () => {
        window.location.href = "syuseki.html";
      });

      const nameDiv = document.createElement("div");
      nameDiv.className = "kamoku_name";
      nameDiv.textContent = subject.name;
      kamokuDiv.appendChild(nameDiv);

      const dataDiv = document.createElement("div");
      dataDiv.className = "data";
      dataDiv.style.justifyItems = "start"; // CSSグリッド内の左揃え

      // 学期ラベル・値のペア
      const semesterLabel = document.createElement("div");
      semesterLabel.textContent = "学期";
      const semesterValue = document.createElement("div");
      semesterValue.textContent = subject.semester || "前期";
      semesterValue.style.justifySelf = "start";

      // 曜日ラベル・値のペア
      const youbiLabel = document.createElement("div");
      youbiLabel.textContent = "曜日";
      const youbiValue = document.createElement("div");
      youbiValue.textContent = subject.youbi;
      youbiValue.style.justifySelf = "start";

      dataDiv.appendChild(semesterLabel);
      dataDiv.appendChild(semesterValue);
      dataDiv.appendChild(youbiLabel);
      dataDiv.appendChild(youbiValue);

      kamokuDiv.appendChild(dataDiv);
      container.appendChild(kamokuDiv);
    });
  })
  .catch((error) => console.error("エラー:", error));

// ヘッダーを取り込むスクリプト
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data))
  // .then((data) => console.log(data))
  .then(() => loadHeaderData());
