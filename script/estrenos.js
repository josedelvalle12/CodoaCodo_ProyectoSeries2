
// Click seccion 1
document.getElementById("flecha-trailer1").onclick = function() {
    let estreno1= document.getElementById("estreno1");
    let trailer1 = document.getElementById("video1");
    let tarjeta1 = document.getElementById("tarjeta1");
    let flecha1 = document.getElementById("mira-trailer1");
    let flechaRight = document.getElementById("arrow-right1");
    let flechaLeft = document.getElementById("arrow-left1");

    if (flecha1.innerHTML == "Mira el trailer acá!!") {
        estreno1.style.animation = "deslizador-estrenos 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos 1s ease-out";
        trailer1.style.opacity = "100";
        tarjeta1.style.animation = "opacidad-estrenos2 1s ease-out";
        tarjeta1.style.opacity = "0";
        estreno1.style.transform = "translate(-480px)";
        flechaRight.style.display = "none";
        flechaLeft.style.display = "flex";
        flecha1.innerHTML = "Volver";
    
    } else if (flecha1.innerHTML == "Volver") {
        estreno1.style.animation = "deslizador-estrenos2 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos2 1s ease-out";
        trailer1.style.opacity = "0";
        tarjeta1.style.animation = "opacidad-estrenos 1s ease-out";
        tarjeta1.style.opacity = "100";
        estreno1.style.transform = "translate(480px)";
        flechaRight.style.display = "flex";
        flechaLeft.style.display = "none";
        flecha1.innerHTML = "Mira el trailer acá!!";
    }
}

// Click seccion 2
document.getElementById("flecha-trailer2").onclick = function() {
    let estreno1= document.getElementById("estreno2");
    let trailer1 = document.getElementById("video2");
    let tarjeta1 = document.getElementById("tarjeta2");
    let flecha1 = document.getElementById("mira-trailer2");
    let flechaRight = document.getElementById("arrow-right2");
    let flechaLeft = document.getElementById("arrow-left2");

    if (flecha1.innerHTML == "Mira el trailer acá!!") {
        estreno1.style.animation = "deslizador-estrenos 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos 1s ease-out";
        trailer1.style.opacity = "100";
        tarjeta1.style.animation = "opacidad-estrenos2 1s ease-out";
        tarjeta1.style.opacity = "0";
        estreno1.style.transform = "translate(-480px)";
        flechaRight.style.display = "none";
        flechaLeft.style.display = "flex";
        flecha1.innerHTML = "Volver";
    
    } else if (flecha1.innerHTML == "Volver") {
        estreno1.style.animation = "deslizador-estrenos2 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos2 1s ease-out";
        trailer1.style.opacity = "0";
        tarjeta1.style.animation = "opacidad-estrenos 1s ease-out";
        tarjeta1.style.opacity = "100";
        estreno1.style.transform = "translate(480px)";
        flechaRight.style.display = "flex";
        flechaLeft.style.display = "none";
        flecha1.innerHTML = "Mira el trailer acá!!";
    }
}

// Click seccion 3

document.getElementById("flecha-trailer3").onclick = function() {
    let estreno1= document.getElementById("estreno3");
    let trailer1 = document.getElementById("video3");
    let tarjeta1 = document.getElementById("tarjeta3");
    let flecha1 = document.getElementById("mira-trailer3");
    let flechaRight = document.getElementById("arrow-right3");
    let flechaLeft = document.getElementById("arrow-left3");

    if (flecha1.innerHTML == "Mira el trailer acá!!") {
        estreno1.style.animation = "deslizador-estrenos 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos 1s ease-out";
        trailer1.style.opacity = "100";
        tarjeta1.style.animation = "opacidad-estrenos2 1s ease-out";
        tarjeta1.style.opacity = "0";
        estreno1.style.transform = "translate(-480px)";
        flechaRight.style.display = "none";
        flechaLeft.style.display = "flex";
        flecha1.innerHTML = "Volver";
    
    } else if (flecha1.innerHTML == "Volver") {
        estreno1.style.animation = "deslizador-estrenos2 1s ease-out";
        trailer1.style.animation = "opacidad-estrenos2 1s ease-out";
        trailer1.style.opacity = "0";
        tarjeta1.style.animation = "opacidad-estrenos 1s ease-out";
        tarjeta1.style.opacity = "100";
        estreno1.style.transform = "translate(480px)";
        flechaRight.style.display = "flex";
        flechaLeft.style.display = "none";
        flecha1.innerHTML = "Mira el trailer acá!!";
    }
}