"use strict";


const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");



getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "Zoom ind"){
        getWordElem.style.fontSize = "6rem";
        getZoomBtn.style.fontSize = "10rem";
        getZoomBtn.style.color = "red";
        getZoomBtn.style.fontFamily = "times new roman";
        this.textContent = "Zoom ud";
        
        
    }
    else {
        getWordElem.style.fontSize = "3.0rem";  
        getZoomBtn.style.fontSize = "3.0rem";
        getZoomBtn.style.color = "black";
        getZoomBtn.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
        this.textContent = "Zoom ind";
        
     }
});


