window.onload = function(){
    let animacion = document.getElementById("seccion-1");
    let animacion2 = document.getElementById("seccion-2");
    let animacion3 = document.getElementById("seccion-3");
    let nav = document.getElementById("nav");

    nav.style.animation = "cambio 2s ease-out";
    animacion.style.animation = "opacidad 2s ease-out";
    
}

// Animaciones Scroll
const seccion2 = document.getElementById("seccion-2");
const seccion3 = document.getElementById("seccion-3");
const cargarSeccion = (entradas, observador)=> {
    entradas.forEach((entrada) => {
        console.log(entradas);
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}

const observador = new IntersectionObserver(cargarSeccion, {
    root: null,
    rootMargin: `0px 0px 0px 0px`,
    threshold: 0.5
});

observador.observe(seccion2);
observador.observe(seccion3);

// Animaciones Boton
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

// Tarjetas Estreno

let cad=`
<div class="tarjeta-container">
`
    for(let i=0; i< series.length ; i++){
      cad += `
        <div class="tarjeta">
            <img src="${series[i].imagen}" alt="foto">
            <div class="tarjeta-datos">
                <h4>${series[i].nombre}</h4>
                <p>Genero: ${series[i].clasificacion}</p>
                <p>Fecha: ${series[i].fecha_estreno} </p>
                <p>Director: ${series[i].director} </p>
                <p>Plataforma: ${series[i].plataforma} </p>
            </div>
        </div>
       `
    }       
cad+=`
    </div>
`    

document.getElementById("tarjeta-container").innerHTML = cad;
