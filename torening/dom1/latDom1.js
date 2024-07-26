const Body = document.body;
const henshin = document.getElementById("henshin");
const h1Color = document.getElementById("hitam");
const elyCantik = document.querySelector("img");


// function Berubah(){
//     h1Color.style.color = "darkblue";
// };
// henshin.onclick = Berubah;

// henshin.addEventListener("click", function(){
//     h1Color.setAttribute("class", "h1toggle-red");
// });

henshin.addEventListener("click", function(){
    h1Color.style.color = "pink"
});

henshin.addEventListener("click", function(){
    Body.style.backgroundColor = "darkblue"
});


henshin.addEventListener("click", function(){
    elyCantik.classList.toggle("elysia")
});

const newButton = document.createElement("button");
const buttonValue = document.createTextNode("Change");

newButton.appendChild(buttonValue);
Body.appendChild(newButton);

newButton.setAttribute("type", "button");
henshin.after(newButton)

newButton.addEventListener("click", function(){
    const C = Math.floor(Math.random("") *256)
    const G = Math.floor(Math.random("") *256)
    const B = Math.floor(Math.random("") *256)

    Body.style.backgroundColor = `rgb(${C}, ${G}, ${B})`
    console.log(Body)
});


// slider

const sMerah = document.querySelector("input[name=sliderM]");
const sHijau = document.querySelector("input[name=sliderH]");
const sBiru = document.querySelector("input[name=sliderB]");





// sMerah.addEventListener("change", function(){
//     const bMerah = document.querySelectorAll("div")[0];
//     const bHijau = document.querySelectorAll("div")[1];
//     const bBiru = document.querySelectorAll("div")[2];
//     const r = sMerah.value;

//     bMerah.style.backgroundColor = `rgb(${r}, 0, 0)`
//     bHijau.style.backgroundColor = `rgb( 0, ${r}, 0)`
//     bBiru.style.backgroundColor = `rgb(0, 0, ${r})`
// });

sMerah.addEventListener("input", function(){
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    Body.style.backgroundColor = `rgb(${r}, ${h}, ${b})`
});
sHijau.addEventListener("input", function(){
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    Body.style.backgroundColor = `rgb(${r}, ${h}, ${b})`
});
sBiru.addEventListener("input", function(){
    const r = sMerah.value;
    const h = sHijau.value;
    const b = sBiru.value;
    Body.style.backgroundColor = `rgb(${r}, ${h}, ${b})`
});

// mouser

const bMerah = document.querySelectorAll("div")[0];
const bHijau = document.querySelectorAll("div")[1];
const bBiru = document.querySelectorAll("div")[2];

bMerah.addEventListener("mouseenter", function(){
    Body.classList.toggle("merah")
});
bMerah.addEventListener("mouseout", function(){
    Body.classList.remove("merah")
});

bHijau.addEventListener("mouseenter", function(){
    Body.classList.toggle("hijau")
});
bHijau.addEventListener("mouseout", function(){
    Body.classList.remove("hijau")
});

bBiru.addEventListener("mouseenter", function(){
    Body.classList.toggle("biru")
});
bBiru.addEventListener("mouseout", function(){
    Body.classList.remove("biru")
});

// mouse body

Body.addEventListener("mousemove", function(event){
    const xPose = Math.round((event.clientX / window.innerWidth) *255);
    const yPose = Math.round((event.clientY / window.innerHeight) *255);

    Body.style.backgroundColor = `rgb(${xPose}, ${yPose}, 100)`
});