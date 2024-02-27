//clicking on the hamburger button and opening the menu in responsive mode
let btnRes = document.getElementById("btnRes");
let navMenu = document.querySelector(".navMenu");

// Function Open And Closed The Menu 
let openMenu = (content) => {
    if(content.classList.contains("hidden")){
        content.classList.remove("hidden")
    }else{
        content.classList.add('hidden')
    }
}

btnRes.addEventListener("click" , () => openMenu(navMenu))