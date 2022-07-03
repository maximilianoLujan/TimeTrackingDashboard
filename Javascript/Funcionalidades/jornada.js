const d = document;
export default function cambiarJornada(daily,weekly,monthly){
    const $missecciones = d.querySelectorAll("section"),
        $daily = d.getElementById(daily),
        $monthly = d.getElementById(monthly),
        $weekly = d.getElementById(weekly),
        $trabajo = d.querySelector(".trabajop"),
        $estudio = d.querySelector(".estudiop"),
        $ejercicio = d.querySelector(".ejerciciop"),
        $entretenimiento = d.querySelector(".entretenimientop");
        
    d.addEventListener("click", e =>{
        if (e.target === $daily){
             if (!$daily.classList.contains("selected")){
                $daily.classList.add("selected");
                $weekly.classList.remove("selected");
                $monthly.classList.remove("selected");
                $trabajo.textContent = `9HRS`;
                $estudio.textContent = `2HRS`;
                $ejercicio.textContent = `1.5HRS`;
                $entretenimiento.textContent = `3HRS`;             
            }
        }
        if (e.target === $weekly){
            if (!$weekly.classList.contains("selected")){
                $weekly.classList.add("selected");
                $monthly.classList.remove("selected");
                $daily.classList.remove("selected");
                $trabajo.textContent = `36HRS`;
                $estudio.textContent = `10HRS`;
                $ejercicio.textContent = `10HRS`;
                $entretenimiento.textContent = `21HRS`;   
            }
        }
        if (e.target === $monthly){
            if (!$monthly.classList.contains("selected")){
                $monthly.classList.add("selected");
                $weekly.classList.remove("selected");
                $daily.classList.remove("selected");
                $trabajo.textContent = `120HRS`;
                $estudio.textContent = `40HRS`;
                $ejercicio.textContent = `40HRS`;
                $entretenimiento.textContent = `81HRS`;  
            }
        }
    })
}