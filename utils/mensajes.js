// Definición de constantes y funciones

const isGroup = (info) => info.key.remoteJid.endsWith('@g.us');
const sender = (info, isGroup) => isGroup ? info.key.participant : info.key.remoteJid;
const groupMetadata = async (sock, from, isGroup) => isGroup ? await sock.groupMetadata(from) : null;
const groupName = (groupMetadata) => groupMetadata ? groupMetadata.subject : '';
const groupDesc = (groupMetadata) => groupMetadata ? groupMetadata.desc : '';
const groupMembers = (groupMetadata) => groupMetadata ? groupMetadata.participants : '';
const groupAdmins = (groupMembers) => groupMembers.filter(member => member.isAdmin).map(member => member.id);
const nome = (info) => info.pushName ? info.pushName : '';
const messagesC = (body) => body.slice(0).trim().split(/ +/).shift().toLowerCase();
const args = (body) => body.trim().split(/ +/).slice(1);
const q = (args) => args.join(' ');
const isCmd = (body, prefixo) => body.startsWith(prefixo);
const comando = (isCmd, body) => isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null;
const mentions = (teks, memberr, id, sock, from) => {
  (id == null || id == undefined || id == false) ? sock.sendMessage(from, { text: teks.trim(), mentions: memberr }) : sock.sendMessage(from, { text: teks.trim(), mentions: memberr });
};
const quoted = (info) => info.quoted ? info.quoted : info;
const mime = (quoted) => (quoted.info || quoted).Mimetype || "";
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) };
const pushname = (info) => info.pushName ? info.pushName : '';
const isBot = (info) => info.key.fromMe ? true : false;
const isOwner = (sender, numerodono) => numerodono.includes(sender);
const BotNumber = (sock) => sock.user.id.split(':')[0] + '@s.whatsapp.net';
const isGroupAdmins = (sender, groupAdmins) => groupAdmins.includes(sender) || false;
const isBotGroupAdmins = (sender, groupAdmins, BotNumber) => groupAdmins.includes(BotNumber) || false;
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) };
const deviceType = (info) => info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web';
const options = { timeZone: 'America/Lima', hour12: false };
const data = () => new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' });
const hora = () => new Date().toLocaleTimeString('PE', options);

// Funciones para enviar mensajes

const enviarMensaje = (tipo, contenido, caption = "") => {
  const mensaje = { [tipo]: contenido };
  if (caption) mensaje.caption = caption;
  sock.sendMessage(from, mensaje, { quoted: info });
}

// Ejemplo de uso para texto
const enviar = (texto) => {
  enviarMensaje('text', texto);
}

// Ejemplo de uso para imagen
const enviarimagen = (imagen) => {
  enviarMensaje('image', imagen);
}

// Ejemplo de uso para imagen con caption
const enviarimagencap = (imagen, caption) => {
  enviarMensaje('image', imagen, caption);
}

// Ejemplo de uso para video
const enviarvideos = (videos) => {
  enviarMensaje('video', videos);
}

// Ejemplo de uso para video con caption
const enviarvideoscap = (videos, caption) => {
  enviarMensaje('video', videos, caption);
}

// Ejemplo de uso para audio
const enviarmusica = (audios) => {
  enviarMensaje('audio', audios);
}

// Ejemplo de uso para sticker
const enviarsticker = (sticker) => {
  enviarMensaje('sticker', sticker);
}

// CONSTANTES IFF 
const isImage = (type) => type == "imageMessage";
const isVideo = (type) => type == "videoMessage";
const isAudio = (type) => type == "audioMessage";
const isSticker = (type) => type == "stickerMessage";
const isContact = (type) => type == "contactMessage";
const isLocation = (type) => type == "locationMessage";
const isProduct = (type) => type == "productMessage";
const isMedia = (type) => (type === "imageMessage" || type === "videoMessage" || type === "audioMessage");

// Corregir la variable 'type' aquí
let type = "imageMessage";  // Aquí debes asignar el tipo de mensaje real, por ejemplo, desde `info.type`

let typeMessage = "Unknown";  // Valor por defecto

// Ahora evaluamos el tipo de mensaje
if (isImage(type)) typeMessage = "Image";
else if (isVideo(type)) typeMessage = "Video";
else if (isAudio(type)) typeMessage = "Audio";
else if (isSticker(type)) typeMessage = "Sticker";
else if (isContact(type)) typeMessage = "Contact";
else if (isLocation(type)) typeMessage = "Location";
else if (isProduct(type)) typeMessage = "Product";

// Aquí puedes seguir con las demás funciones sin problema
const isQuotedMsg = (type, content) => type === "extendedTextMessage" && content.includes("textMessage");
const isQuotedImage = (type, content) => type === "extendedTextMessage" && content.includes("imageMessage");
const isQuotedVideo = (type, content) => type === "extendedTextMessage" && content.includes("videoMessage");
const isQuotedDocument = (type, content) => type === "extendedTextMessage" && content.includes("documentMessage");
const isQuotedAudio = (type, content) => type === "extendedTextMessage" && content.includes("audioMessage");
const isQuotedSticker = (type, content) => type === "extendedTextMessage" && content.includes("stickerMessage");
const isQuotedContact = (type, content) => type === "extendedTextMessage" && content.includes("contactMessage");
const isQuotedLocation = (type, content) => type === "extendedTextMessage" && content.includes("locationMessage");
const isQuotedProduct = (type, content) => type === "extendedTextMessage" && content.includes("productMessage");

const getFileBuffer = async (mediakey, MediaType) => {
  const stream = await downloadContentFromMessage(mediakey, MediaType)
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  return buffer;
};

// Exportamos las constantes y funciones
module.exports = {
  isGroup,
  sender,
  groupMetadata,
  groupName,
  groupDesc,
  groupMembers,
  groupAdmins,
  nome,
  messagesC,
  args,
  q,
  isCmd,
  comando,
  mentions,
  quoted,
  mime,
  sleep,
  pushname,
  isBot,
  isOwner,
  BotNumber,
  isGroupAdmins,
  isBotGroupAdmins,
  isUrl,
  deviceType,
  data,
  hora,
  enviarMensaje,
  enviar,
  enviarimagen,
  enviarimagencap,
  enviarvideos,
  enviarvideoscap,
  enviarmusica,
  enviarsticker,
  isImage,
  isVideo,
  isAudio,
  isSticker,
  isContact,
  isLocation,
  isProduct,
  isMedia,
  typeMessage,
  isQuotedMsg,
  isQuotedImage,
  isQuotedVideo,
  isQuotedDocument,
  isQuotedAudio,
  isQuotedSticker,
  isQuotedContact,
  isQuotedLocation,
  isQuotedProduct,
  getFileBuffer
};