function leerVector(idVector) {
    const vector = [];
    let entrada;
    let ultimoNumero = -Infinity;
    for (let i = 0; i < 5; i++) {
      entrada = prompt(`Ingrese el número ${i + 1} del vector ${idVector}`);
      const numero = parseInt(entrada);
      if (numero <= ultimoNumero) {
        alert('El número ingresado no es mayor que el anterior. Por favor, ingrese un número mayor.');
        i--;
        continue;
      }
      vector.push(numero);
      ultimoNumero = numero;
    }
    return vector;
  }

  function ordenarVectores() {
    const vector1 = leerVector(1);
    const vector2 = leerVector(2);
    const vectorOrdenado = [];
    let i = 0;
    let j = 0;
    while (i < vector1.length && j < vector2.length) {
      if (vector1[i] < vector2[j]) {
        vectorOrdenado.push(vector1[i]);
        i++;
      } else if (vector1[i] > vector2[j]) {
        vectorOrdenado.push(vector2[j]);
        j++;
      } else {
        vectorOrdenado.push(vector1[i]);
        i++;
        j++;
      }
    }
    while (i < vector1.length) {
      vectorOrdenado.push(vector1[i]);
      i++;
    }
    while (j < vector2.length) {
      vectorOrdenado.push(vector2[j]);
      j++;
    }
    const resultado = document.getElementById('resultado');
    resultado.value = vectorOrdenado.join(', ');
  }




