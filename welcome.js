// welcome.js
const axios = require('axios');
const recentlyWelcomed = new Set();  // IDs de participantes bienvenidos recientemente

// Función para enviar la bienvenida sin el botón
async function sendWelcome(sock, update) {
    try {
        const { action, participants, id } = update;
        const groupMetadata = await sock.groupMetadata(id);
        const groupName = groupMetadata.subject;

        const welcomeImages = [
            'https://i.postimg.cc/3wGKJMkS/20241107-173047.jpg',
            'https://iili.io/2IK9XwB.jpg',
            'https://iili.io/2IFZ8In.jpg',
            'https://iili.io/2IKHxoP.jpg',
        ];

        const getImageBuffer = async (url) => {
            const response = await axios.get(url, { responseType: 'arraybuffer' });
            return Buffer.from(response.data, 'binary');
        };

        if (action === 'add') {
            const participantsToWelcome = participants.filter(participant => !recentlyWelcomed.has(participant));

            if (participantsToWelcome.length > 0) {
                for (let participant of participantsToWelcome) {
                    const formattedParticipant = participant.replace('@s.whatsapp.net', '');
                    const welcomeMessage = `
> *li.▁▂▄▅▆▇█.li Ｔｈｅ🐦‍⬛Ｒｉｃｋ | ｖ1 li.█▇▆▅▄▂▁.li*

                    *_Bienvenido al grupo 🐦‍⬛📌_*
                    *${groupName}*
                
                    
                    @${participant.split('@')[0]}

                    _También puedes unirte a nuestra comunidad📌_
                    https://chat.whatsapp.com/Br6JEvNDBzC2cbuKB1CVZG

                    _Oh nuestro canal 📌_
                    https://whatsapp.com/channel/0029VatdMm48V0tjRSCnft2n
                    `;

                    const randomImageUrl = welcomeImages[Math.floor(Math.random() * welcomeImages.length)];
                    const imageBuffer = await getImageBuffer(randomImageUrl);

                    await sock.sendMessage(id, {
                        image: imageBuffer,
                        caption: welcomeMessage,
                        mentions: [participant]
                    });

                    console.log(`Nuevo miembro: ${formattedParticipant} se unió al grupo: ${groupName}`);
                    recentlyWelcomed.add(participant);
                    setTimeout(() => recentlyWelcomed.delete(participant), 1000);
                    await new Promise(resolve => setTimeout(resolve, 5000));
                }
            }
        }
    } catch (err) {
        console.log('Error en group-participants.update: ' + err);
    }
}

module.exports = { sendWelcome };