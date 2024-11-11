const fs = require('fs');
const gruposFile = './data/grupos.json';

// Variable global que controla si el filtro antilink está activado o no
let antilinkActivo = false;

// Leer el archivo de grupos
const leerGrupos = () => {
    try {
        const data = fs.readFileSync(gruposFile, 'utf-8');
        return JSON.parse(data); // Parsear el JSON
    } catch (err) {
        console.error("Error al leer grupos.json", err);
        return {}; // Retorna un objeto vacío en caso de error
    }
};

// Guardar el estado de los grupos
const guardarGrupos = (grupos) => {
    try {
        fs.writeFileSync(gruposFile, JSON.stringify(grupos, null, 2)); // Guardamos en formato JSON
    } catch (err) {
        console.error("Error al guardar grupos.json", err);
    }
};

// Función para activar/desactivar el filtro antilink
const toggleAntilink = (accion) => {
    if (accion === 'on') {
        antilinkActivo = true;
        console.log("Antilink activado:", antilinkActivo);
    } else if (accion === 'off') {
        antilinkActivo = false;
        console.log("Antilink desactivado:", antilinkActivo);
    }
};

// Función para verificar si el mensaje contiene un enlace
const verificarEnlace = async (sock, info, message) => {
    if (antilinkActivo && isUrl(message)) {
        await sock.sendMessage(info.key.remoteJid, {
            text: '¡No se permiten enlaces en este grupo! 🚫'
        });
        await sock.deleteMessage(info.key.remoteJid, info.key.id); // Eliminar el mensaje con enlace
    }
};

// Función para detectar si el mensaje contiene un enlace
const isUrl = (url) => {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(url);
};

// Exportar funciones
module.exports = { toggleAntilink, verificarEnlace, leerGrupos, guardarGrupos, isUrl, antilinkActivo };
