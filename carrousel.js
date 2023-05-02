(function(){
    console.log("Bon matin carrousel");
    let bouttonCarrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
    let carrousel = document.querySelector(".carrousel");
    let carrousel__fermer = document.querySelector(".carrousel__fermer");

    bouttonCarrousel__ouvrir.addEventListener("mousedown", function(){
        carrousel.classList.add('carrousel-ouvrir');
    })
})()