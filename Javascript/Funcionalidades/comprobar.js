const d = document;
export default function comprobarJornada(){
    const $miboton = d.querySelector(".boton"),
        $resultado = d.querySelector(".resultado");
    d.addEventListener("click", e =>{
        if (e.target === $miboton){
            console.log("true")
        }

    })
}
