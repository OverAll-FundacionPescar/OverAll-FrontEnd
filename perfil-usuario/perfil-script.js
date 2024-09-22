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


const tabs = document.querySelectorAll('.tab_btn');
        const all_content= document.querySelectorAll('.content');

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', ()=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');
            
            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
            })    
    })