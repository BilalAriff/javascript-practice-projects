
// Select Elements 

let light = document.getElementById("light");
let on = document.getElementById("btnOn");
let off = document.getElementById("btnOff");

// console.log(light);
// console.log(on);
// console.log(off);

// function to turn off the light 

function turnOnLight() {
    light.setAttribute('src', 'img/light-on.png');
    console.log("turning on Light");
}

// function to turn on the light 

function turnOffLight() {
    light.setAttribute('src', 'img/light-off.png');
    console.log("turning off Light");
}

// add events on buttons 

on.addEventListener('click', turnOnLight );
off.addEventListener('click', turnOffLight );
