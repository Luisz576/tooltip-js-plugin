function initTooltipListeners(){
    const tooltipelements = document.getElementsByClassName("tooltip")
    for(let i = 0; i < tooltipelements.length; i++){
        tooltipelements[i].addEventListener("mouseover", (event) => {
            tooltipelements[i].innerHTML += "<style id='tooltip-left-position-id-576'>.tooltip::after{left: " + event.pageX + "px;}</style>";
        })
        tooltipelements[i].addEventListener("mouseout", (event) => {
           document.querySelector(".tooltip style#tooltip-left-position-id-576").remove()
        })
    }
}

window.onload = initTooltipListeners