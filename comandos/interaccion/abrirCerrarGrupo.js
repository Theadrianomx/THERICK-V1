const numerodono = ['19016500693@c.us']; // Definir los números de los propietarios

const abrirCerrarGrupo = async (sock, info, accion) => {
    try {
        const sender = info.key.remoteJid;
        
        // Obtener la metadata del grupo
        const groupMetadata = await sock.groupMetadata(info.key.remoteJid);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin);  // Filtrar a los admins

        // Comprobamos si el usuario es un administrador o el bot es un admin
        const isBot = info.key.fromMe;
        const BotNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net';
        const isGroupAdmins = groupAdmins.some(admin => admin.id === sender); // Verifica si el sender es admin
        const isBotGroupAdmins = groupAdmins.some(admin => admin.id === BotNumber); // Verifica si el bot es admin

        // Verificar si el sender es propietario o admin
        const isOwner = numerodono.includes(sender);

        if (isOwner || isGroupAdmins || isBotGroupAdmins) {
            if (accion === 'cerrar') {
                await sock.groupSettingUpdate(info.key.remoteJid, 'announcement');  // Cierra el grupo
                await sock.sendMessage(info.key.remoteJid, { text: '> 🎩El grupo ha sido cerrado, solo los administradores pueden enviar mensajes🎩.' });
            } else if (accion === 'abrir') {
                await sock.groupSettingUpdate(info.key.remoteJid, 'not_announcement');  // Abre el grupo
                await sock.sendMessage(info.key.remoteJid, { text: '> 🎩El grupo ha sido abierto, todos los miembros pueden enviar mensajes🎩.' });
            } else {
                await sock.sendMessage(info.key.remoteJid, { text: '> 🎩Por favor usa "abrir" o "cerrar" como acción🎩.' });
            }
        } else {
            await sock.sendMessage(info.key.remoteJid, { text: '> 🎩Solo los administradores o propietarios pueden usar este comando🎩.' });
        }
    } catch (error) {
        console.error("Error al intentar abrir o cerrar el grupo:", error);
        await sock.sendMessage(info.key.remoteJid, { text: 'Hubo un error al intentar procesar tu solicitud.' });
    }
};

module.exports = abrirCerrarGrupo;
