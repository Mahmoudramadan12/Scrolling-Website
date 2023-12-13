let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nounil = document.querySelector(".nounil");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3.5 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.2 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 2.5 + "px";
  nounil.style.fontSize = value + "px";

  if (scrollY >= 67) {
    nounil.style.fontSize = 67 + "px";
    nounil.style.position = "fixed";

    if (scrollY >= 478) {
      nounil.style.display = "none";
    } else {
      nounil.style.display = "block";
    }
  }

  if (scrollY >= 127) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};
