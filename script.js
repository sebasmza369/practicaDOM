const imagen = document.querySelector('#imagenPortada');
imagen.src = "assets/venta-ordenadores.webp";

const comoContactar = document.querySelector('#contacto');
comoContactar.href = "mailto:ventasordenadores@miempresa.com";

const nuevoTituloVentas = document.querySelector('.tituloVentas');
nuevoTituloVentas.textContent = "Venta de Emociones Tecnológicas.";

const nuevoTituloGenerico = document.querySelector('#titulo');
nuevoTituloGenerico.textContent = "Portatil Pro-3033.";


nuevoTituloVentas.style.color = "blue"
nuevoTituloVentas.style.fontSize = "40px";

const precioProducto = document.createElement('p');
precioProducto.textContent = "Desde € 1299";

const posicionPrecio = document.querySelector('.der');
posicionPrecio.appendChild(precioProducto);

const botonEspecificaciones = document.querySelector('#boton');
const menuEspecificaciones = document.querySelector('#especificaciones');
botonEspecificaciones.addEventListener('click', function(){
    menuEspecificaciones.classList.add('mostrar');
})

const formulario = document.querySelector('form');
const correo = document.querySelector('#email');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const emailUsurio = correo.value;
    console.log(emailUsurio);
})

