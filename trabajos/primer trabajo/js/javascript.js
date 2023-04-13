
function calcular3() {
  //Obtenemos los valores de los lados del triángulo
  const ladoA = parseFloat(document.getElementById("ladoA").value);
  const ladoB = parseFloat(document.getElementById("ladoB").value);
  const ladoC = parseFloat(document.getElementById("ladoC").value);
   //Calculamos el perímetro
   var perimetro = ladoA + ladoB + ladoC;

   
   var semiperimetro = perimetro / 2;
  var area = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));

 
  document.getElementById("area").innerHTML = "Área: " + area.toFixed(2);
}

function calcular4() {
  
  const ladoA = parseFloat(document.getElementById("ladoA").value);
  const ladoB = parseFloat(document.getElementById("ladoB").value);
  const ladoC = parseFloat(document.getElementById("ladoC").value);


  var perimetro = ladoA + ladoB + ladoC;

  
  var semiperimetro = perimetro / 2;

  var area = Math.sqrt(semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC));

  document.getElementById("perimetro").innerHTML = "Perímetro: " + perimetro.toFixed(2);
  
}

function calcularArea() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = base * altura;
  document.getElementById("resultadoArea").innerHTML = "El área es: " + area;
}

function calcularPerimetro() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var perimetro = 2 * (base + altura);
  document.getElementById("resultadoPerimetro").innerHTML = "El perímetro es: " + perimetro;
}





  function calcularA() {
    // Obtener valores del formulario
    const base = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);
    
    // Calcular área y perímetro
    const area = base * altura;
    
    // Mostrar resultado en la página
    const resultadoElemento = document.getElementById("resultadoA");
    resultadoElemento.innerHTML = `Área: ${area}`;
  }









function calcular0() {
    var figura = document.getElementById("figura").value;
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var resultado1 = document.getElementById("resultado1");
  
       

    switch(figura) {
      case "cuadrado":
        var area = lado1 * lado1;
        resultado1.innerHTML = "<p>El área es: " + area + "</p>";
        break;
      case "rectangulo":
        var area = lado1 * lado2;
        resultado1.innerHTML = "<p>El área es: " + area + "</p>";
        break;
      case "triangulo":
        var area = (lado1 * altura) / 2;
        resultado1.innerHTML = "<p>Area:" + area + "</p>";
        break;
      default:
        resultado1.innerHTML = "<p>Selecciona una figura y proporciona los datos necesarios</p>";
    }
  }

  function calcular2() {
    var figura = document.getElementById("figura").value;
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado2 = document.getElementById("resultado2");
  
    switch(figura) {
      case "cuadrado":
        var perimetro = 4 * lado1;
        resultado2.innerHTML = "<p>El perímetro es: " + perimetro + "</p>";
        break;
      case "rectangulo":
        var perimetro = 2 * (lado1 + lado2);
        resultado2.innerHTML = "<p>El perímetro es: " + perimetro + "</p>";
        break;
      case "triangulo":
        var perimetro = lado1 + lado2 + Math.sqrt(Math.pow(lado1, 2) + Math.pow(altura, 2));
        resultado2.innerHTML = "<p>Perimero: " + perimetro + "</p>";
        break;
      default:
        resultado2.innerHTML = "<p>Selecciona una figura y proporciona los datos necesarios</p>";
    }
  }



  function calcular7() {
     var radio = document.getElementById("radio").value;

    radio = parseFloat(radio);
    var area = Math.PI * radio * radio;
    document.getElementById("res").value = "Área: " + area.toFixed(2);
}

function calcular8() {

	var radio = document.getElementById("radio").value;


	radio = parseFloat(radio);
	
	var perimetro = 2 * Math.PI * radio;

	
	document.getElementById("rest").value ="Perímetro: " + perimetro.toFixed(2);
}
  




  
  

  







