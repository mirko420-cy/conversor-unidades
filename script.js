const convertirBtn = document.getElementById("convertir");
const valorInput = document.getElementById("valor");
const unidadOrigen = document.getElementById("unidad-origen");
const unidadDestino = document.getElementById("unidad-destino");
const resultado = document.getElementById("resultado");

const conversiones = {
  kg: {
    lbs: (kg) => kg * 2.20462,
  },
  m: {
    cm: (m) => m * 100,
  },
  celsius: {
    fahrenheit: (c) => (c * 9/5) + 32,
  },
};

convertirBtn.addEventListener("click", () => {
  const valor = parseFloat(valorInput.value);
  const unidadOrigenSeleccionada = unidadOrigen.value;
  const unidadDestinoSeleccionada = unidadDestino.value;

  if (isNaN(valor)) {
    resultado.innerText = "Por favor ingrese un valor válido.";
    return;
  }

  if (conversiones[unidadOrigenSeleccionada] && conversiones[unidadOrigenSeleccionada][unidadDestinoSeleccionada]) {
    const funcionConversion = conversiones[unidadOrigenSeleccionada][unidadDestinoSeleccionada];
    const valorConvertido = funcionConversion(valor);
    resultado.innerText = `${valor} ${unidadOrigenSeleccionada} es igual a ${valorConvertido} ${unidadDestinoSeleccionada}`;
  } else {
    resultado.innerText = "Conversión no disponible.";
  }
});
