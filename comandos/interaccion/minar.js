const fs = require('fs');  // Para leer y escribir archivos JSON
const archivo = './data/usuarios.json';  // Ruta del archivo JSON donde se almacenan los datos de los usuarios

async function minar(sender) {
  try {
    // Leer el archivo usuarios.json
    let usuarios = JSON.parse(fs.readFileSync(archivo));

    // Si el usuario no existe, inicializamos sus datos
    if (!usuarios[sender]) {
      usuarios[sender] = { experiencia: 0, limite: 100 };  // Experiencia inicial 0 y límite de 100
    }

    // Verificar si el usuario alcanzó el límite de experiencia
    if (usuarios[sender].experiencia >= usuarios[sender].limite) {
      console.log('¡Has alcanzado tu límite de experiencia!');
      return;
    }

    // Asignar puntos de experiencia aleatorios entre 5 y 10
    let puntos = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    usuarios[sender].experiencia += puntos;

    // Si el usuario alcanza o supera el límite, se restablece la experiencia
    if (usuarios[sender].experiencia >= usuarios[sender].limite) {
      usuarios[sender].experiencia = 0;  // Resetear experiencia
      usuarios[sender].limite += 50;     // Aumentar límite (sube de nivel)
      console.log(`¡Felicidades! Has subido de nivel. Tu nuevo límite es ${usuarios[sender].limite}.`);
    } else {
      console.log(`Has ganado ${puntos} de experiencia. Total: ${usuarios[sender].experiencia}`);
    }

    // Guardar los datos actualizados en el archivo usuarios.json
    fs.writeFileSync(archivo, JSON.stringify(usuarios, null, 2));

  } catch (err) {
    console.log('Error al acceder o actualizar usuarios.json:', err);
  }
}

module.exports = { minar };