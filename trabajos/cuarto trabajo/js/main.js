const MAX_PERSONAS = 6; 
const MAX_CANCIONES = 3; 
let personas = []; 
function agregarPersona() {
    if (personas.length < MAX_PERSONAS) {
      const persona = {};
      persona.nombre = prompt('Ingrese el nombre de la persona');
      persona.identificacion = prompt('Ingrese el número de identificación de la persona');
      persona.fechaNacimiento = prompt('Ingrese la fecha de nacimiento de la persona (dd/mm/aaaa)');
      persona.correoElectronico = prompt('Ingrese el correo electrónico de la persona');
      persona.ciudadResidencia = prompt('Ingrese la ciudad de residencia de la persona');
      persona.ciudadOrigen = prompt('Ingrese la ciudad de origen de la persona');
      persona.cancionesFavoritas = [];
  
      for (let i = 0; i < MAX_CANCIONES; i++) {
        const cancion = {};
        cancion.artista = prompt(`Ingrese el artista de la canción ${i+1}`);
        cancion.titulo = prompt(`Ingrese el título de la canción ${i+1}`);
        persona.cancionesFavoritas.push(cancion);
      }
  
      personas.push(persona);
      alert(`Se ha agregado correctamente la persona ${persona.nombre}.`);
    } else {
      alert(`No se pueden agregar más personas. Se ha alcanzado el límite máximo de ${MAX_PERSONAS}.`);
    }
  }
  
  function mostrarInformacionPersona() {
    const posicion = prompt('Ingrese la posición de la persona que desea ver (1-6)');
    if (posicion > 0 && posicion <= MAX_PERSONAS) {
      const persona = personas[posicion-1];
      let informacion = `Nombre: ${persona.nombre}\n`;
      informacion += `Número de identificación: ${persona.identificacion}\n`;
      informacion += `Fecha de nacimiento: ${persona.fechaNacimiento}\n`;
      informacion += `Correo electrónico: ${persona.correoElectronico}\n`;
      informacion += `Ciudad de residencia: ${persona.ciudadResidencia}\n`;
      informacion += `Ciudad de origen: ${persona.ciudadOrigen}\n`;
      informacion += `Canciones favoritas:\n`;
  
      for (let i = 0; i < persona.cancionesFavoritas.length; i++) {
        const cancion = persona.cancionesFavoritas[i];
        informacion += `${i+1}. ${cancion.titulo} - ${cancion.artista}\n`;
      }
  
      alert(informacion);
    } else {
      alert(`La posición ingresada no es válida. Ingrese un valor entre 1 y ${MAX_PERSONAS}.`);
    }
  }
  