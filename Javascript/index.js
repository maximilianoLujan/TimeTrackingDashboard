import cambiarJornada from "./Funcionalidades/jornada.js";
const d =document, 
    w = window,
    n = navigator;

    d.addEventListener("DOMContentLoaded",e=>{
        cambiarJornada("daily","weekly","monthly");
    })