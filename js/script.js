const btn = document.querySelector(".switch"),
  s2 = document.querySelector(".switch"),
  s4 = document.querySelector(".circle"),
  dollar = document.querySelectorAll(".dollar"),
  xdollar = document.querySelectorAll(".xdollar");

btn.addEventListener("click", function () {
  //switch button
  s2.classList.toggle("switch2");
  s2.classList.toggle("colour");
  s4.classList.toggle("cir");

  for(let i = 0;i < dollar.length ;i++){
  dollar[i].classList.toggle("hidden");
  xdollar[i].classList.toggle("hidden");
  }
});
