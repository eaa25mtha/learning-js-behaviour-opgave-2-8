"use strict"

const body = document.body;


function updateBackground() { 
const width = window.innerWidth; 
    if (width < 480){
        body.style.background = "red";
    }
    else if (width < 760){
        body.style.background = "orange";
    }
    else if (width < 960){
        body.style.background = "darkblue"; 
    }
    else if (width < 1024){
        body.style.background = "purple"; 
    }
    else if (width < 1200){
        body.style.background = "black"; 
    }
    else {
        body.style.background = "lightgreen"; 
    }
}
// Kør ved load
updateBackground();


window.addEventListener("resize", updateBackground);


