//Variables
const menu_user = document.querySelector(".user_menu");
const user_button = document.querySelector(".user_button");

//Funcion para renderizar menu de usuario
function display_menu(){
    user_button.addEventListener("click", (e) => {
        e.preventDefault();
        if(menu_user.style.display == "block"){
            menu_user.style.display = "none";    
        } else {
            menu_user.style.display = "block"; 
        } 
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Carga script de diplay_menu");
    display_menu();
})


const selectBtn = document.querySelector(".select-btn"),
        items = document.querySelectorAll(".item");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

    })
})