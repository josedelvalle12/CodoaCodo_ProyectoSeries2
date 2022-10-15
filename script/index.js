window.onload = function(){
    let animacion = document.getElementById("seccion-1");
    let animacion2 = document.getElementById("seccion-2");
    let animacion3 = document.getElementById("seccion-3");
    let nav = document.getElementById("nav");

    nav.style.animation = "cambio 2s ease-out";
    animacion.style.animation = "opacidad 2s ease-out";
    animacion2.style.opacity = "0";
    animacion3.style.opacity = "0";
}

window.addEventListener(`scroll`, function(){
    let animacion = document.getElementById("seccion-2");
    let animacion2 = document.getElementById("seccion-3");
    let posicionObj1 = animacion.getBoundingClientRect().bottom;
    let posicionObj2 = animacion2.getBoundingClientRect().bottom;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/4;
    
    if (posicionObj1 > tamañoDePantalla) {
        animacion.style.animation = "opacidad 2s ease-out";
    } else if (posicionObj2 > tamañoDePantalla) {
        animacion2.style.animation = "opacidad 2s ease-out";
    } 

    animacion.style.opacity = "100";
    animacion2.style.opacity = "100";
})

document.getElementById("btn1").onclick = function() {
    let humo1 = document.getElementById("humo-verde");
    let imagen1 = document.getElementById("walter-white");
    let nombreFondo1 = document.getElementById("nombre-fondo1");
    let nombre1 = document.getElementById("nombre1");
    let btnInfo = document.getElementById("info1");
    let info = document.getElementById("ulInfo");

    if (btnInfo.innerHTML == "+ INFO") {
        humo1.style.display = "none";
        imagen1.style.display = "none";
        nombreFondo1.style.display = "none";
        nombre1.style.display = "none";
        btnInfo.innerHTML = "Volver";
        info.style.display = "block";
        info.style.opacity = "100";
        info.style.animation = "info 2s ease-out";

    } else if (btnInfo.innerHTML == "Volver") {
        humo1.style.display = "flex";
        humo1.style.animation = "cambio 2s ease-out";
        imagen1.style.display = "flex";
        imagen1.style.animation = "cambio 2s ease-out";
        nombreFondo1.style.display = "flex";
        nombreFondo1.style.animation = "cambio 2s ease-out";
        nombre1.style.display = "block";
        nombre1.style.animation = "cambio 2s ease-out";
        btnInfo.innerHTML = "+ INFO";
        info.style.opacity = "0";
        info.style.display = "none";
    }
}

document.getElementById("btn2").onclick = function() {
    let humo2 = document.getElementById("humo-rojo");
    let imagen2 = document.getElementById("saul");
    let nombreFondo2 = document.getElementById("nombre-fondo2");
    let nombre2 = document.getElementById("nombre2");
    let btnInfo2 = document.getElementById("info2");
    let info2 = document.getElementById("ulInfo2");


    if (btnInfo2.innerHTML == "+ INFO") {
        humo2.style.display = "none";
        imagen2.style.display = "none";
        nombreFondo2.style.display = "none";
        nombre2.style.display = "none";
        btnInfo2.innerHTML = "Volver";
        info2.style.display = "block";
        info2.style.opacity = "100";
        info2.style.animation = "info 2s ease-out";

    } else if (btnInfo2.innerHTML == "Volver") {
        humo2.style.display = "flex";
        humo2.style.animation = "cambio 2s ease-out";
        imagen2.style.display = "flex";
        imagen2.style.animation = "cambio 2s ease-out";
        nombreFondo2.style.display = "flex";
        nombreFondo2.style.animation = "cambio 2s ease-out";
        nombre2.style.display = "block";
        nombre2.style.animation = "cambio 2s ease-out";
        btnInfo2.innerHTML = "+ INFO";
        info2.style.opacity = "0";
        info2.style.display = "none";
    }
}

document.getElementById("btn3").onclick = function() {
    let humo2 = document.getElementById("humo-amarillo");
    let imagen2 = document.getElementById("succession");
    let nombreFondo2 = document.getElementById("nombre-fondo3");
    let nombre2 = document.getElementById("nombre3");
    let btnInfo2 = document.getElementById("info3");
    let info2 = document.getElementById("ulInfo3");


    if (btnInfo2.innerHTML == "+ INFO") {
        humo2.style.display = "none";
        imagen2.style.display = "none";
        nombreFondo2.style.display = "none";
        nombre2.style.display = "none";
        btnInfo2.innerHTML = "Volver";
        info2.style.display = "block";
        info2.style.opacity = "100";
        info2.style.animation = "info 2s ease-out";

    } else if (btnInfo2.innerHTML == "Volver") {
        humo2.style.display = "flex";
        humo2.style.animation = "cambio 2s ease-out";
        imagen2.style.display = "flex";
        imagen2.style.animation = "cambio 2s ease-out";
        nombreFondo2.style.display = "flex";
        nombreFondo2.style.animation = "cambio 2s ease-out";
        nombre2.style.display = "block";
        nombre2.style.animation = "cambio 2s ease-out";
        btnInfo2.innerHTML = "+ INFO";
        info2.style.opacity = "0";
        info2.style.display = "none";
    }
}

