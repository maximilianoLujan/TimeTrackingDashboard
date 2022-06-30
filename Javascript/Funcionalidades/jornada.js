const d = document;
export default function cambiarJornada(daily,weekly,monthly){
    const $missecciones = d.querySelectorAll("section"),
        $daily = d.getElementById(daily),
        $monthly = d.getElementById(monthly),
        $weekly = d.getElementById(weekly);
    console.log($missecciones,$daily,$weekly,$monthly)
    d.addEventListener("click", e =>{
        if (e.target === $daily){
             if (!$daily.classList.contains("selected")){
                $daily.classList.add("selected");
                $weekly.classList.remove("selected");
                $monthly.classList.remove("selected");
             }
        }
        if (e.target === $weekly){
            if (!$weekly.classList.contains("selected")){
                $weekly.classList.add("selected");
                $monthly.classList.remove("selected");
                $daily.classList.remove("selected");
            }
        }
        if (e.target === $monthly){
            if (!$monthly.classList.contains("selected")){
                $monthly.classList.add("selected");
                $weekly.classList.remove("selected");
                $daily.classList.remove("selected");
            }
        }
    })
}