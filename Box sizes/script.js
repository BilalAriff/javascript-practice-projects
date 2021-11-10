

const box = document.getElementById("box");

const large = document.getElementById("large");
const small = document.getElementById("small");
const normal = document.getElementById("normal");
const extraSmall = document.getElementById("extraSmall");

const btnSquare = document.getElementById("square");
const btnRound = document.getElementById("round");

const btnBlack = document.getElementById("black");
const btnBlue = document.getElementById("blue");
const btnRed = document.getElementById("red");

const reset = document.getElementById("reset");

function resetStyle() {
    box.classList.remove("round-box");
    box.classList.remove("square-box");
    box.removeAttribute("style");
}

function makeLarge() {
    box.style.width = "200px";   
    box.style.height = "200px";
    console.log('making it large');
}

function makeSmall() {
    box.style.width = "50px";
    box.style.height = "50px";
    console.log("making it small")
}

function makeNormal() {
    box.style.width = null;
    box.style.height = null;
    console.log("turning it back to normal");
}

function makeExtraSmall() {
    box.style.width = "20px";
    box.style.height = "20px";
    box.style.borderRadius = "2px";
    console.log("making it extra small");
}

function makeItSquare() {
    box.classList.remove("round-box");
    box.classList.add("square-box");
}

function makeItRound() {
    box.classList.remove("square-box");
    box.classList.add("round-box");
}


function makeBlack() {
    box.classList.remove("square-box");
    box.classList.add("round-box");
}


large.addEventListener("click", makeLarge);
small.addEventListener("click", makeSmall);
normal.addEventListener("click", makeNormal);
extraSmall.addEventListener("click", makeExtraSmall);

btnSquare.addEventListener('click', makeItSquare);
btnRound.addEventListener('click', makeItRound);

reset.addEventListener('click', resetStyle);


btnBlack.addEventListener('mouseover', (e) => { box.style.backgroundColor = "black"} )
btnBlue.addEventListener('mouseover', (e) => { box.style.backgroundColor = "blue"} )
btnRed.addEventListener('mouseover', (e) => { box.style.backgroundColor = "red"} )

