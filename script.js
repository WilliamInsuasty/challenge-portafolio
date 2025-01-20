//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    
    // Validación de nombre
    const nombreValido = /^[a-zA-Z\s]*$/.test(nombre); // Permitir solo letras y espacios
    if (!nombreValido) {
        alert('El nombre solo puede contener letras.');
        return;
    }
    
    // Convertir a formato de "Capitalización de cada palabra"
    nombreInput.value = nombre.replace(/\b\w/g, char => char.toUpperCase());

    // Validación de correo electrónico
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Si todo es válido, puedes enviar el formulario o realizar otra acción
    alert('Formulario enviado con éxito!');
    // Aquí puedes usar: this.submit(); para enviar el formulario si es necesario.
});


// Para el funcionamiento del menú toggle//////

const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navegacion');
const menuItems = document.querySelectorAll('.navegacion__elemento'); // Selecciona todos los elementos del menú

// Evento para mostrar/ocultar el menú
toggleButton.addEventListener('click', (event) => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    event.stopPropagation(); // Evita que el clic se propague al documento
});

// Evento para ocultar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        if (window.innerWidth < 1024) {
            navMenu.style.display = 'none'; // Oculta el menú solo si es menor de 1024px
        }
    }
});

// Evento para ocultar el menú al hacer clic en una opción

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 1024)
            navMenu.style.display = 'none'; // Oculta el menú
    });
});



