"use strict"


const nightColorBtn = document.getElementById("nightColorBtn"); 
const lightColorBtn = document.getElementById("lightColorBtn");
const body = document.body; 


nightColorBtn.addEventListener("click", () => { 
    body.style = "background: #000000ff"; 
})

lightColorBtn.addEventListener("click", () => { 
   body.style = "background: #ffffffff"; 
})

greenColorBtn.addEventListener("click", () => { 
   body.style = "background: #8fe197ff"; 
})