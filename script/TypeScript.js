document.addEventListener('DOMContentLoaded', function() {
    const laptops = [
        { 
            marca: 'Marca A',
            modelo: 'Modelo 1',
            imagen: 'img/laptop-01.webp',
            precio: 1200,
            descripcion: 'Este es el modelo más básico de la Marca A.'
        },
        { 
            marca: 'Marca B',
            modelo: 'Modelo 2',
            imagen: 'img/laptop-02.avif',
            precio: 1500,
            descripcion: 'Excelente rendimiento y diseño moderno de la Marca B.'
        },
        { 
            marca: 'Marca C',
            modelo: 'Modelo 3',
            imagen: 'img/laptop-03.webp',
            precio: 1800,
            descripcion: 'Ideal para usuarios exigentes que buscan potencia y durabilidad.'
        },
        { 
            marca: 'Marca D',
            modelo: 'Modelo 4',
            imagen: 'img/laptop-04.avif',
            precio: 2000,
            descripcion: 'La última tecnología y alto desempeño de la Marca D.'
        },
        { 
            marca: 'Marca HP',
            modelo: 'Modelo 5',
            imagen: 'img/laptop-05.webp',
            precio: 2200,
            descripcion: 'Innovación y calidad en cada detalle de esta laptop de HP.'
        }
    ];

    const laptopsContainer = document.getElementById('laptops-list');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalSummaryElement = document.getElementById('cart-total-summary');
    const payButton = document.getElementById('pay-button');
    let total = 0;
    let carrito = []; // Array para almacenar los productos en el carrito

    // Función para actualizar el carrito
    function actualizarCarrito() {
        // Limpiar el contenido previo del carrito
        cartItemsElement.innerHTML = '';

        // Recorrer los productos en el carrito y mostrarlos
        carrito.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');

            const itemName = document.createElement('p');
            itemName.textContent = `${item.marca} ${item.modelo}`;
            itemDiv.appendChild(itemName);

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `Precio: $${item.precio}`;
            itemDiv.appendChild(itemPrice);

            cartItemsElement.appendChild(itemDiv);
        });

        // Actualizar el total del carrito
        cartTotalSummaryElement.textContent = `Total: $${total}`;
    }

    // Función para manejar el pago
    function procesarPago() {
        // Aquí puedes implementar la lógica para procesar el pago, como enviar datos a un servidor, etc.
        alert(`Se procesó el pago por un total de $${total}`);
        
        // Reiniciar el carrito y el total después de pagar
        carrito = [];
        total = 0;
        actualizarCarrito();
    }

    // Iterar sobre cada laptop y crear elementos en el DOM
    laptops.forEach(laptop => {
        const laptopDiv = document.createElement('div');
        laptopDiv.classList.add('laptop');

        const imagen = document.createElement('img');
        imagen.src = laptop.imagen;
        imagen.style.maxWidth = '200px'; // Ajusta el tamaño máximo de la imagen
        imagen.style.height = 'auto'; // Asegura que la altura se ajuste automáticamente
        laptopDiv.appendChild(imagen);

        const titulo = document.createElement('h2');
        titulo.textContent = `${laptop.marca} ${laptop.modelo}`;
        laptopDiv.appendChild(titulo);

        const descripcion = document.createElement('p');
        descripcion.textContent = laptop.descripcion;
        laptopDiv.appendChild(descripcion);

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${laptop.precio}`;
        precio.classList.add('price');
        laptopDiv.appendChild(precio);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Añadir al carrito 🛒';
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.addEventListener('click', () => {
            // Agregar el producto al carrito
            carrito.push(laptop);
            total += laptop.precio;

            // Llamar a la función para actualizar el carrito
         function actualizarCarrito(){};
         laptopDiv.appendChild(addToCartButton);
         laptopsContainer.appendChild(laptopDiv);
        });

        laptopDiv.appendChild(addToCartButton);
        laptopsContainer.appendChild(laptopDiv);
    });

    // Agregar evento al botón de pagar
    payButton.addEventListener('click', procesarPago);
});


