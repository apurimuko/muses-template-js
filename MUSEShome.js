fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data;

    // 再度scriptを読み込む
    const script = document.createElement("script");
    script.src = "header.js";
    document.body.appendChild(script);
  });
