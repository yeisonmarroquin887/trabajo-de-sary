const edades = [];
const MENOR_EDAD = 18;
const MAYOR_EDAD = 60;

function agregarEdad() {
  const edadInput = document.getElementById("edad");
  const edad = parseInt(edadInput.value);
  
  if (isNaN(edad) || edad < 1 || edad > 120) {
    alert("La edad ingresada no es válida. Debe ser un número entre 1 y 120.");
    return;
  }
  
  edades.push(edad);
  edadInput.value = "";
  
  actualizarResultados();
}

function actualizarResultados() {
  const menores = edades.filter(e => e < MENOR_EDAD).length;
  const mayores = edades.filter(e => e >= MENOR_EDAD && e < MAYOR_EDAD).length;
  const adultos = edades.filter(e => e >= MAYOR_EDAD).length;
  const min = Math.min(...edades);
  const max = Math.max(...edades);
  const promedio = edades.reduce((a, b) => a + b, 0) / edades.length;
  
  document.getElementById("menores").textContent = menores;
  document.getElementById("mayores").textContent = mayores;
  document.getElementById("adultos").textContent = adultos;
  document.getElementById("min").textContent = min;
  document.getElementById("max").textContent = max;
  document.getElementById("promedio").textContent = promedio.toFixed(2);
}
