"use strict";

//Netto
const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {

    if (this.textContent == "Det ta'r kun 5 minutter"){
        this.innerHTML = "<strong>og så er du i Netto.</strong>";
    }
    else {
        this.innerHTML = "Det ta'r kun 5 minutter";
     }
});


//Bauhaus
const getWord2Elem = document.getElementById("word2");

getWord2Elem.addEventListener("click", function() {
    
    if (this.textContent == "Bauhaus"){
        this.innerHTML = "<strong>mere end et byggemarked</strong>";
    }
    else {
        this.innerHTML = "Bauhaus";
    }
});


//Føtex
const getWord3Elem = document.getElementById("word3");

getWord3Elem.addEventListener("click", function() {
    
    if (this.textContent == "Føtex"){
        this.innerHTML = "<strong>hver dag bedre</strong>";
    }
    else {
        this.innerHTML = "Føtex";
    }
});

