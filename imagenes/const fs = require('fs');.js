const fs = require('fs');
const { imagenes } = require('../main');  // Importar las imágenes globales
const path = './data/usuarios.json';

if (!fs.existsSync(path)) {
  console.log('Archivo usuarios.json no encontrado. Creando nuevo archivo...');
  fs.writeFileSync(path, JSON.stringify({}));
}

async function minarDiamantes(sender) {
  try {
    let usuarios = JSON.parse(fs.readFileSync(path));

    if (!usuarios[sender]) {
      usuarios[sender] = {
        diamantes: 0,
        attempts: 0,
        lastMinedTime: 0,
      };
    }

    const currentTime = Date.now();
    const timeElapsed = currentTime - usuarios[sender].lastMinedTime;
    const timeLimit = 15 * 60 * 1000;

    if (timeElapsed < timeLimit) {
      if (usuarios[sender].attempts >= 3) {
        const remainingTime = timeLimit - timeElapsed;
        const minutesRemaining = Math.floor(remainingTime / 60000);
        return {
          text: `> *⏳ @${sender.split('@')[0]} Has alcanzado el límite de intentos. Espera ${minutesRemaining} minutos antes de poder minar diamantes nuevamente.*`,
          image: imagenes.intentoFallido,  // Usar la imagen global para intento fallido
        };
      } else {
        usuarios[sender].attempts++;
        await saveUserData(sender, usuarios[sender]);
        return {
          text: `> *❌ @${sender.split('@')[0]} Intento fallido. Tienes ${3 - usuarios[sender].attempts} intentos restantes.*`,
          image: imagenes.intentoFallido2,  // Usar la imagen global para intento fallido
        };
      }
    }

    usuarios[sender].attempts = 0;
    const rewardAmount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    usuarios[sender].diamantes += rewardAmount;

    await saveUserData(sender, usuarios[sender]);
    return {
      text: `> *💎 @${sender.split('@')[0]} Has ganado ${rewardAmount} diamantes. Total: ${usuarios[sender].diamantes} diamantes.*`,
      image: imagenes.diamantes,  // Usar la imagen global para diamantes
    };
  } catch (err) {
    console.log('Error al procesar la minería:', err);
    return {
      text: '> *⚠️ Hubo un error al procesar tu solicitud. Intenta nuevamente.*',
    };
  }
}

async function saveUserData(user, data) {
  let usersData = JSON.parse(fs.readFileSync(path));
  usersData[user] = data;
  fs.writeFileSync(path, JSON.stringify(usersData, null, 2));
}

module.exports = { minarDiamantes };
