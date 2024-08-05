// Datos de ejemplo para los accesorios
const accesoriosData = [
    { tipo: 'mouse', nombre: 'Mouse Inalámbrico', imagen: '179156-800-auto.webp', precio: '$20' },
    { tipo: 'mouse', nombre: 'Mouse Ergonómico', imagen: 'full_image-1.webp', precio: '$25' },
    { tipo: 'teclado', nombre: 'Teclado Retroiluminado', imagen: 'teclado.webp', precio: '$199' },
    { tipo: 'mochila', nombre: 'Mochila para Laptop', imagen: 'mochila.webp', precio: '$209' },
    { tipo: 'cargador', nombre: 'Cargador Universal', imagen: 'cargador.webp', precio: '$70' },
    { tipo: 'soporte', nombre: 'Soporte para Laptop', imagen: 'soporte.webp', precio: '$39' },
    { tipo: 'estuche', nombre: 'Estuche Protector', imagen: 'protector.webp', precio: '$109.90' },
    { tipo: 'adaptador', nombre: 'Adaptador USB-C a HDMI', imagen: 'adaptador.webp', precio: '$44.90' }
];

// Función para mostrar los accesorios según el tipo seleccionado
function mostrarAccesorios(tipo) {
    const accesoriosContainer = document.getElementById('accesorios');
    accesoriosContainer.innerHTML = ''; // Limpiar contenido actual

    const accesoriosFiltrados = accesoriosData.filter(accesorio => accesorio.tipo === tipo);

    accesoriosFiltrados.forEach(accesorio => {
        const accesorioHTML = `
            <div class="accesorio">
                <img src="img/${accesorio.imagen}" alt="${accesorio.nombre}">
                <h3>${accesorio.nombre}</h3>
                <p>${accesorio.precio}</p>
            </div>
        `;
        accesoriosContainer.innerHTML += accesorioHTML;
    });
}