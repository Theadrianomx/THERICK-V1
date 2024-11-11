// eventHandler.js
const { sendWelcome } = require('./welcome');  // Importa la función de bienvenida

// Función para manejar los eventos de actualización de participantes en grupos
function handleGroupParticipantsUpdate(sock) {
    sock.ev.on('group-participants.update', async (update) => {
        await sendWelcome(sock, update);  // Llama a la función de bienvenida
    });
}

module.exports = { handleGroupParticipantsUpdate };