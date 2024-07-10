const menu_user = document.querySelector(".user_menu");
const user_button = document.querySelector(".user_button");

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
    console.log("Cargo la pagina");
    display_menu();
})