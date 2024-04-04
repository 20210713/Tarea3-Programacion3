const miFormulario = document.querySelector("#Formulario")

function eventoSubmit(evento) {
        evento.preventDefault()
        const inputs = evento.target.elements;
        const contenido = inputs["contenido"].value;        
        const alto = inputs["altura"].value;
        const ancho = inputs["ancho"].value;
        
        const elementoCaja = document.querySelector("#caja")

        elementoCaja.textContent = contenido;        
        elementoCaja.style.height = alto + 'px';
        elementoCaja.style.width = ancho + 'px';
}
miFormulario.addEventListener('submit', eventoSubmit)