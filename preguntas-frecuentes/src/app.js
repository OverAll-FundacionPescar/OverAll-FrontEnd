let preguntas = document.querySelectorAll('.preguntas');
let btnDropdown = document.querySelectorAll('.preguntas .more')
let respuesta = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if ( switchc == 0 ) {

            respuesta[i].style.height = `${altoParrafo}px`;
            preguntas[i].style.marginBottom = '10px';
            
            switchc ++;

        }

        else if ( switchc == 1 ) {

            respuesta[i].style.height = `0`;
            preguntas[i].style.marginBottom = '0';
            
            switchc --;
            
            }

    })

}