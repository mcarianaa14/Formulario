const form = document.getElementById('Formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');

const errorNombre = document.getElementById('error-nombre');
const errorCorreo = document.getElementById('error-correo');
const errorContraseña = document.getElementById('error-contraseña');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

 
  errorNombre.textContent = '';
  errorCorreo.textContent = '';
  errorContraseña.textContent = '';

  let valido = true;

  if (nombre.value === '') {
    errorNombre.textContent = 'Por favor, ingresa tu nombre.';
    valido = false;
  }

  
  if (correo.value === '') {
    errorCorreo.textContent = 'Por favor, ingresa tu correo.';
    valido = false;
  } else if (!correo.value.includes('@') || !correo.value.includes('.')) {
    errorCorreo.textContent = 'El correo debe contener "@" y un punto.';
    valido = false;
  }

  if (contraseña.value === '') {
    errorContraseña.textContent = 'Por favor, ingresa tu contraseña.';
    valido = false;
  } else if (contraseña.value.length < 8) {
    errorContraseña.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    valido = false;
  }

  if (valido) {
    alert('Formulario enviado correctamente');
    form.reset();
  }
});
