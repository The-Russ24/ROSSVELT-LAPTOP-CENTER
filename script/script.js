// Función para mostrar el contenido según la sección seleccionada
function mostrarContenido(id) {
    // Ocultar todo el contenido actual
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach(contenido => {
        contenido.style.display = 'none';
    });

    // Mostrar el contenido de la sección seleccionada
    const seccion = document.getElementById(id);
    seccion.style.display = 'block';
}