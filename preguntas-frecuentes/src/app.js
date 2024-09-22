let preguntas = document.querySelectorAll('.preguntas');
let btnDropdown = document.querySelectorAll('.preguntas .more');
let respuesta = document.querySelectorAll('.respuesta');

btnDropdown.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let respuestaActual = respuesta[index];
        

        let parrafo = respuestaActual.querySelector('p') || respuestaActual.querySelector('ol');
        
        if (parrafo) {

            let altoParrafo = parrafo.getBoundingClientRect().height;


            if (respuestaActual.style.height === "0px" || respuestaActual.style.height === "") {
                respuestaActual.style.height = `${altoParrafo}px`;
                respuestaActual.style.overflow = "visible"; 
                preguntas[index].style.marginBottom = '10px';
            } else {

                respuestaActual.style.height = '0px';
                respuestaActual.style.overflow = "hidden";
                preguntas[index].style.marginBottom = '0';
            }
        }
    });
});