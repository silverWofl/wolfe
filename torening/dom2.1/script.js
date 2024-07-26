// img element
const comp = document.querySelector(".img-komputer");
const img = document.querySelectorAll("li img");

// result element

const info = document.querySelector(".info");

function compSelection() {
  const comp = Math.floor(Math.random("") * 3);

  if (comp == 0) return "Gajah";
  if (comp == 1) return "Semut";
  if (comp == 2) return "Orang";
}

function results(player, comp) {
  if (player == comp) return "Seri";
  if (player == "Gajah") return comp == "Orang" ? "Menang" : "Kalah";
  if (player == "Semut") return comp == "Gajah" ? "Menang" : "Kalah";
  if (player == "Orang") return comp == "Semut" ? "Menang" : "Kalah";
}

function putar() {
  let compu = document.querySelector(".img-komputer");
  const gambar = ["Gajah", "Semut", "Orang"];
  let i = 0;
  const waktuEnd = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuEnd > 1000) {
      clearInterval;
      return;
    }
    compu.setAttribute("src", `img/${gambar[i++]}.png`);
    if(i == gambar.length) i = 0;
  }, 100)
}

img.forEach(function (i) {
  i.addEventListener("click", function () {
    const Pemain = i.className;
    const komputer = compSelection();

    putar();

    setTimeout(function () {
      const hasil = results(Pemain, komputer);
      comp.setAttribute("src", `img/${komputer}.png`);
      info.innerHTML = hasil;
    }, 1000);
  });
});
