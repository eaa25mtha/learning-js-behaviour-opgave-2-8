"use strict";


const changeImgBtn = document.getElementById("changeImage"); 
const getImage = document.getElementById("imagePlaceholder");



changeImgBtn.addEventListener("click", function() { 

    if (this.textContent == "Happy"){ 
        getImage.src= "img/before.jpeg";
        this.textContent = "Angry";
    }
    else {
        getImage.src= "img/after.jpeg";
        this.textContent = "Happy";
     }
});

