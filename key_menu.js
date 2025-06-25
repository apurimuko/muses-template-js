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

      const dataDiv = document.createElement("div");
      dataDiv.className = "data";

      const semesterLabel = document.createElement("div");
      semesterLabel.textContent = "学期";
      const semesterValue = document.createElement("div");
      semesterValue.textContent = "前期";

      const codeLabel = document.createElement("div");
      codeLabel.textContent = "時間割コード";
      const codeValue = document.createElement("div");
      codeValue.textContent = subject.code;

      const youbiLabel = document.createElement("div");
      youbiLabel.textContent = "曜日時限";
      const youbiValue = document.createElement("div");
      youbiValue.textContent = subject.youbi;

      dataDiv.appendChild(semesterLabel);
      dataDiv.appendChild(semesterValue);
      dataDiv.appendChild(codeLabel);
      dataDiv.appendChild(codeValue);
      dataDiv.appendChild(youbiLabel);
      dataDiv.appendChild(youbiValue);

      kamokuDiv.appendChild(dataDiv);
      container.appendChild(kamokuDiv);
    });
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#header").innerHTML = data));
