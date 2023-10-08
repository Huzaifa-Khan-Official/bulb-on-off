var bulbImg = document.querySelector("#bulbImg");
var bulbBtn = document.querySelector("#bulbBtn");

var isBulbOn = false;

bulbBtn.addEventListener("click", function bulbFunc() {
        var bulbImgSrc = isBulbOn ? "./bulbOffImg.jpeg" : "./bulbOnImg.jpeg";
        bulbBtn.innerText = isBulbOn ? "On" : "Off";
        isBulbOn = !isBulbOn
        bulbImg.setAttribute("src", `${bulbImgSrc}`);
    }
);
