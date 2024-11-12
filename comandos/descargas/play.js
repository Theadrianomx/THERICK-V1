// comandos/descargas/play.js

const tiktokScraper = require('tiktok-scraper');   // Para descargar videos de TikTok
const ytsr = require('ytsr');                       // Para realizar la búsqueda en YouTube (si decides mantenerlo)
const fs = require('fs');                           // Para manipular archivos
const path = require('path');                       // Para manejar rutas de archivos
const axios = require('axios');                     // Para manejar peticiones HTTP

async function handlePlayCommand(sock, from, args) {
    const textoBusqueda = args.join(' '); // Captura el texto de búsqueda después del comando .play

    // Si no se proporciona texto de búsqueda
    if (!textoBusqueda) {
        console.log('No se proporcionó texto para la búsqueda.');
        return sock.sendMessage(from, { text: 'Por favor, proporciona el nombre de una canción o video.' });
    }

    // Intentar descargar desde TikTok
    try {
        console.log('Iniciando búsqueda de video en TikTok para:', textoBusqueda);
        
        // Intentar obtener el video de TikTok
        const videos = await tiktokScraper.search(textoBusqueda, { number: 1 });

        // Verifica si se encontró algún video
        if (!videos || videos.length === 0) {
            console.log('No se encontraron resultados para:', textoBusqueda);
            return sock.sendMessage(from, { text: 'No se encontró un video en TikTok con ese nombre.' });
        }

        const videoUrl = videos[0].videoUrl;
        console.log('Video encontrado:', videoUrl);

        // Descargar el video de TikTok
        const videoStream = await axios.get(videoUrl, { responseType: 'stream' });

        // Guardar el archivo de video temporalmente
        const tempFilePath = path.join(__dirname, 'temp_video.mp4');
        const tempFileStream = fs.createWriteStream(tempFilePath);

        videoStream.data.pipe(tempFileStream);

        tempFileStream.on('finish', async () => {
            console.log('Archivo de video guardado en:', tempFilePath);

            // Enviar el video como mensaje
            try {
                await sock.sendMessage(from, {
                    video: { url: tempFilePath },
                    mimetype: 'video/mp4'
                });

                // Enviar mensaje con el enlace del video
                const mensaje = `🎶 *Aquí está tu video* 🎶\n\nEnlace al video: ${videoUrl}`;
                console.log('Enviando mensaje con el enlace del video:', mensaje);
                await sock.sendMessage(from, { text: mensaje });

                // Eliminar el archivo temporal después de enviarlo
                fs.unlink(tempFilePath, (err) => {
                    if (err) console.error('Error al eliminar archivo temporal:', err);
                    else console.log('Archivo temporal eliminado');
                });
            } catch (error) {
                console.error('Error al enviar el video:', error);
                await sock.sendMessage(from, { text: 'Hubo un error al intentar enviar el video.' });
            }
        });

    } catch (error) {
        // Si ocurre algún error en la búsqueda o descarga
        console.error('Error al intentar obtener el video:', error);
        await sock.sendMessage(from, { text: 'Hubo un error al intentar obtener el video de TikTok.' });
    }
}

module.exports = handlePlayCommand;
