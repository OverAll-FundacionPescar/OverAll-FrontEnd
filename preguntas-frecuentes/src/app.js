let preguntas = document.querySelectorAll('.preguntas');
let btnDropdown = document.querySelectorAll('.preguntas .more');
let respuesta = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for ( let i = 0; i < btnDropdown.length; i ++) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click',  () =>{ 

        if ( switchc == o){

            respuesta[i].style.height = '$(altoParrafo)px'
        }

    })
}