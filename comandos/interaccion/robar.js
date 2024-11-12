const fs = require('fs');
const path = './data/usuarios.json';  // Ruta donde se guarda el archivo usuarios.json

// Función para el comando "robar"
async function robar(sender, mentionedUser) {
  try {
    // Leer el archivo usuarios.json
    let usuarios = JSON.parse(fs.readFileSync(path));  // Usar la ruta correcta
    const robarImages = [
      'https://i.postimg.cc/QdzBSFVF/99.jpg',
      'https://i.postimg.cc/T3DgWjYk/sp.webp',
      'https://i.postimg.cc/SRbCdJT6/9.jpg',
    ];

    // Verificar si los usuarios existen
    if (!usuarios[sender] || !usuarios[mentionedUser]) {
      return {
        text: `> *⚠️ El usuario mencionado no existe o no tiene datos registrados.*`,
        image: robarImages[Math.floor(Math.random() * robarImages.length)], // Imagen aleatoria
      };
    }

    // Verificar si el usuario tiene un robo pendiente
    const currentTime = Date.now();
    if (usuarios[sender].lastRobbery && (currentTime - usuarios[sender].lastRobbery < 3 * 60 * 60 * 1000)) {
      const remainingTime = Math.ceil((3 * 60 * 60 * 1000 - (currentTime - usuarios[sender].lastRobbery)) / 60000);  // Tiempo restante en minutos
      return {
        text: `> *⏳  @${sender.split('@')[0]} \n\nHas alcanzado el límite de robos! \n\nEspera *${remainingTime}* minutos más antes de poder robar nuevamente. 🔄*`,
        image: robarImages[Math.floor(Math.random() * robarImages.length)], // Imagen aleatoria
      };
    }

    // Generar la cantidad de experiencia a robar (entre 5 y 10 puntos)
    const puntosARobar = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    // Verificar si el objetivo tiene suficiente experiencia para ser robada
    if (usuarios[mentionedUser].experiencia < puntosARobar) {
      return {
        text: `> *❌  @${sender.split('@')[0]} \n\nEl objetivo no tiene suficiente experiencia para robar. \n\nIntenta con otro objetivo.*`,
        image: robarImages[Math.floor(Math.random() * robarImages.length)], // Imagen aleatoria
      };
    }

    // Realizar el robo: restar experiencia al objetivo y sumar al que roba
    usuarios[sender].experiencia += puntosARobar;
    usuarios[mentionedUser].experiencia -= puntosARobar;

    // Actualizar la última vez que el usuario robó
    usuarios[sender].lastRobbery = currentTime;

    // Guardar los datos actualizados en el archivo usuarios.json
    await saveUserData(sender, usuarios[sender]);
    await saveUserData(mentionedUser, usuarios[mentionedUser]);

    // Responder al usuario con el resultado del robo
    return {
      text: `> *🎉  @${sender.split('@')[0]} \n\nHas robado *${puntosARobar} de experiencia* de @${mentionedUser.split('@')[0]}! 🌟\n\nTu nueva experiencia es *${usuarios[sender].experiencia}*. \n\nLa experiencia de @${mentionedUser.split('@')[0]} ahora es *${usuarios[mentionedUser].experiencia}*. 🔄*`,
      image: robarImages[Math.floor(Math.random() * robarImages.length)], // Imagen aleatoria
    };

  } catch (err) {
    console.log('Error al acceder o actualizar usuarios.json:', err);
    return {
      text: '> *⚠️ Hubo un error al procesar tu solicitud. \n\nPor favor intenta nuevamente. 💬*',
    };
  }
}

// Función para guardar los datos del usuario
async function saveUserData(user, data) {
  let usersData = JSON.parse(fs.readFileSync(path));  // Usar la ruta correcta
  usersData[user] = data;
  fs.writeFileSync(path, JSON.stringify(usersData, null, 2));  // Guardar en el archivo JSON
}

module.exports = { robar };  // Exportamos las funciones necesarias
