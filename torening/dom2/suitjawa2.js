// player varible
const gajah = document.getElementById("gajah");
const semut = document.getElementById("semut");
const orang = document.getElementById("orang");

// img
const img = document.getElementsByTagName("img");

// innerHtml
const resultEx = document.getElementById("winBanner");
const result = document.getElementById("winExplanation");

function compSelection() {
  const comp = Math.floor(Math.random("") * 3);

  if (comp == 0) return "Gajah";
  if (comp == 1) return "Semut";
  if (comp == 2) return "Orang";
}

function results(player, comp) {
  if (player == comp) return "Seri";
  if (player == "Gajah") return comp == "Orang" ? "Kamu Menang" : "Kamu Kalah";
  if (player == "Semut") return comp == "Gajah" ? "Kamu Menang" : "Kamu Kalah";
  if (player == "Orang") return comp == "Semut" ? "Kamu Menang" : "Kamu Kalah";
}

var Hasil = results();
function imeji(Hasil) {
  if (Hasil == "Seri") {
    img[1].classList.remove("ely");
    img[0].classList.remove("ely");
    img[2].setAttribute("class", "ely");
  } else if (Hasil == "Kamu Menang") {
    img[2].classList.remove("ely");
    img[1].classList.remove("ely");
    img[0].setAttribute("class", "ely");
  } else if (Hasil == "Kamu Kalah") {
    img[2].classList.remove("ely");
    img[0].classList.remove("ely");
    img[1].setAttribute("class", "ely");
  }
}

gajah.addEventListener("click", function () {
  var player = "Gajah";
  var bot = compSelection();
  Hasil = results(player, bot);
  result.innerHTML = Hasil;
  resultEx.innerHTML = `Kamu Memilih ${player} dan Comp memilih ${bot}`;
  imeji(Hasil);
  console.log(Hasil);
});

semut.addEventListener("click", function () {
  var player = "Semut";
  var bot = compSelection();
  Hasil = results(player, bot);
  result.innerHTML = Hasil;
  resultEx.innerHTML = `Kamu Memilih ${player} dan Comp memilih ${bot}`;
  imeji(Hasil);
  console.log(Hasil);
});

orang.addEventListener("click", function () {
  var player = "Orang";
  var bot = compSelection();
  Hasil = results(player, bot);
  result.innerHTML = Hasil;
  resultEx.innerHTML = `Kamu Memilih ${player} dan Comp memilih ${bot}`;
  imeji(Hasil);
  console.log(Hasil);
});
