const fs = require('fs');
const path = './data/usuarios.json';  // Ruta donde se guarda el archivo usuarios.json

/// Función para el comando "minar"
async function minar(sender) {
  try {
    // Leer el archivo usuarios.json
    let usuarios = JSON.parse(fs.readFileSync(path));  // Usar la ruta correcta
    const minarImages = [
      'https://i.postimg.cc/QdzBSFVF/99.jpg',
      'https://i.postimg.cc/T3DgWjYk/sp.webp',
      'https://i.postimg.cc/SRbCdJT6/9.jpg',
    ];

    // Si el usuario no existe, inicializamos sus datos
    if (!usuarios[sender]) {
      usuarios[sender] = {
        experiencia: 0,
        limite: 100,
        coins: 0,
        lastMined: '',
        attempts: 0,  // Contador de intentos fallidos
        lastMinedTime: 0,  // Última vez que minó
        blockedUntil: 0, // Hora en la que podrá volver a minar
      };
    }

    // Verificar si el usuario está bloqueado para minar
    const currentTime = Date.now();
    if (usuarios[sender].blockedUntil > currentTime) {
      const remainingTime = Math.ceil((usuarios[sender].blockedUntil - currentTime) / 60000);  // Tiempo restante en minutos
      return {
        text: `> *⏳  @${sender.split('@')[0]} \n\nHas alcanzado el límite de intentos! \n\nEspera *${remainingTime}* minutos más antes de poder minar nuevamente. 🔄*`,
        image: minarImages[Math.floor(Math.random() * minarImages.length)], // Imagen aleatoria
      };
    }

    // Si el usuario no ha alcanzado el límite de intentos, procesamos el minado
    if (usuarios[sender].attempts < 3) {
      usuarios[sender].attempts++;  // Aumentamos el contador de intentos
      await saveUserData(sender, usuarios[sender]);  // Guardamos los datos

      // Asignar puntos de experiencia aleatorios entre 5 y 10
      let puntos = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      usuarios[sender].experiencia += puntos;

      // Calcular el progreso hacia el siguiente nivel
      const progreso = usuarios[sender].experiencia / usuarios[sender].limite * 100;
      const experienciaRestante = usuarios[sender].limite - usuarios[sender].experiencia;

      // Responder al usuario con la experiencia ganada, el progreso y la imagen
      await saveUserData(sender, usuarios[sender]);  // Guardar datos actualizados
      return {
        text: `> *🔮  @${sender.split('@')[0]} \n\nHas ganado *${puntos} de experiencia*. 🌟 \n\n*Total*: *${usuarios[sender].experiencia} experiencia*. \n\n💼 Tienes *${usuarios[sender].coins} monedas*. 💰\n\n🛠️ *Progreso*: *${Math.round(progreso)}%* \nFaltan *${experienciaRestante}* de experiencia para el siguiente nivel.\n\n🔰 *Tu nivel actual es*: *${Math.floor(usuarios[sender].experiencia / usuarios[sender].limite)}*`,
        image: { url: minarImages[Math.floor(Math.random() * minarImages.length)] }, // Imagen aleatoria
      };
    } else {
      // Bloquear al usuario por 15 minutos después de 3 intentos
      usuarios[sender].blockedUntil = currentTime + 15 * 60 * 1000;  // 15 minutos de espera
      usuarios[sender].attempts = 0;  // Restablecemos el contador de intentos
      await saveUserData(sender, usuarios[sender]);  // Guardamos los datos

      return {
        text: `> *❌  @${sender.split('@')[0]} \n\nHas alcanzado el límite de intentos! \n\nEspera *15 minutos* antes de poder minar nuevamente. ⏳*`,
        image: minarImages[Math.floor(Math.random() * minarImages.length)], // Imagen aleatoria
      };
    }

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

module.exports = { minar };  // Exportamos las funciones necesarias
