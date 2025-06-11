const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

  const historial = [];

  function actualizarHistorial(operacion, resultado) {
      const entrada = `${operacion} = ${resultado}`;
      historial.push(entrada);
      mostrarHistorial();
  }

  function mostrarHistorial() {
      const historialDiv = document.getElementById("historial");
      historialDiv.innerHTML = historial.map(item => `<div>${item}</div>`).join("");
  }

  function limpiarHistorial() {
      historial.length = 0;
      mostrarHistorial();
  }

  function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function mostrarIntegrantes() {
  const box = document.getElementById('integrantes-container');
  box.classList.toggle('hidden');
}

function scrollToHistorial() {
  const historial = document.getElementById('historial-container');
  historial.scrollIntoView({ behavior: 'smooth' });
}
