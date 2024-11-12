const makeWASocket = require("@whiskeysockets/baileys").default
const fs = require('fs');
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const pino = require('pino')
let phoneNumber = "19016500693"; // cambiar número
const { default: JulsBotIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

const apagado = JSON.parse(fs.readFileSync('./data/apagado.json'));

const { sendWelcome } = require('./comandos/gestion/welcome');
const abrirCerrarGrupo = require('./comandos/interaccion/abrirCerrarGrupo');
const { minar } = require('./comandos/interaccion/minar');
const { robar } = require('./comandos/interaccion/robar');
const explorar = require('./comandos/interaccion/explorar');
const path = './data/usuarios.json'; 
let usuarios = {};


const banner = cfonts.render((`Ｔｈｅ Ｒｉｃｋ | ｖ1`), {
font: 'tiny',             
align: 'center',           
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`blue`,`yellow`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const color = (text, color) => { return !color ? chalk.yellow(text) : chalk.keyword(color)(text) };
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

// Constantes Editables
const prefixo = "."; // Cambiar Prefijo Aquí
const wm = "TheadrianoMX" // cambiar creador
const botname = "TheRICK" // Cambiar nombre del bot

const numerodono = "+19016500693"; // cambiar número
const themeemoji = "🥰" ; // cambiar emoji

async function startProo() {

// Método Privado con Número // Encriptado
function _0x4cf1(_0x398f11,_0x5d887d){const _0x2c06f3=_0x2c06();return _0x4cf1=function(_0x4cf186,_0x177a47){_0x4cf186=_0x4cf186-0x1ea;let _0x2038cd=_0x2c06f3[_0x4cf186];return _0x2038cd;},_0x4cf1(_0x398f11,_0x5d887d);}const _0x13243b=_0x4cf1;(function(_0x2a5c55,_0x1c7ac7){const _0x126f84=_0x4cf1,_0x27717d=_0x2a5c55();while(!![]){try{const _0x4e0ca7=parseInt(_0x126f84(0x1f8))/0x1+parseInt(_0x126f84(0x1ff))/0x2*(parseInt(_0x126f84(0x204))/0x3)+parseInt(_0x126f84(0x1fe))/0x4*(parseInt(_0x126f84(0x1f4))/0x5)+-parseInt(_0x126f84(0x1fb))/0x6+-parseInt(_0x126f84(0x1ea))/0x7+-parseInt(_0x126f84(0x1ef))/0x8+-parseInt(_0x126f84(0x1f6))/0x9;if(_0x4e0ca7===_0x1c7ac7)break;else _0x27717d['push'](_0x27717d['shift']());}catch(_0x31bd4b){_0x27717d['push'](_0x27717d['shift']());}}}(_0x2c06,0xd66b7));let {version,isLatest}=await fetchLatestBaileysVersion();const {state,saveCreds}=await useMultiFileAuthState('./session'),msgRetryCounterCache=new NodeCache(),sock=makeWASocket({'logger':pino({'level':_0x13243b(0x1f0)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':['Ubuntu',_0x13243b(0x1ee),'20.0.04'],'auth':{'creds':state[_0x13243b(0x1fa)],'keys':makeCacheableSignalKeyStore(state[_0x13243b(0x1fc)],pino({'level':_0x13243b(0x202)})[_0x13243b(0x208)]({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x5d7f0d=>{const _0x2a1153=_0x13243b;let _0x42cc7c=jidNormalizedUser(_0x5d7f0d[_0x2a1153(0x1f9)]),_0x265ce1=await store[_0x2a1153(0x1f2)](_0x42cc7c,_0x5d7f0d['id']);return _0x265ce1?.['message']||'';},'msgRetryCounterCache':msgRetryCounterCache,'defaultQueryTimeoutMs':undefined});store['bind'](sock['ev']);if(pairingCode&&!sock['authState'][_0x13243b(0x1fa)][_0x13243b(0x201)]){if(useMobile)throw new Error(_0x13243b(0x205));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0xb3068f=>phoneNumber[_0x13243b(0x1ec)](_0xb3068f))&&(console['log'](chalk[_0x13243b(0x209)](chalk['redBright'](_0x13243b(0x1f1)))),process['exit'](0x0))):(phoneNumber=await question(chalk[_0x13243b(0x209)](chalk[_0x13243b(0x1fd)](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0x2eeb80=>phoneNumber['startsWith'](_0x2eeb80))&&(console['log'](chalk[_0x13243b(0x209)](chalk[_0x13243b(0x207)](_0x13243b(0x1f1)))),phoneNumber=await question(chalk[_0x13243b(0x209)](chalk['greenBright'](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{const _0x489bf9=_0x13243b;let _0x8a96ab=await sock[_0x489bf9(0x1eb)](phoneNumber);_0x8a96ab=_0x8a96ab?.[_0x489bf9(0x20a)](/.{1,4}/g)?.[_0x489bf9(0x1f3)]('-')||_0x8a96ab,console['log'](chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x200)](_0x489bf9(0x20b))),chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x1ed)](_0x8a96ab)));},0xbb8);}function _0x2c06(){const _0x1bbd11=['1637373LZnyZs','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','some','redBright','child','bgBlack','match','Your\x20Pairing\x20Code\x20:\x20','1250522JShAKL','requestPairingCode','startsWith','white','Chrome','9897888veqNgu','silent','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+32460220392','loadMessage','join','3095530dIuEjy','replace','985968qabeqv','black','1465506gzUlAn','remoteJid','creds','1360236TOTwHA','keys','greenBright','4gBEQlq','2csqFkw','bgGreen','registered','fatal','Please\x20type\x20your\x20WhatsApp\x20number\x20ðŸ˜\x0aFor\x20example:\x20+32460220392\x20:\x20'];_0x2c06=function(){return _0x1bbd11;};return _0x2c06();}
// Conexión

sock.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startProo()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startProo()
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startProo()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startProo()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startProo()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startProo()
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startProo()
			} else sock.end(`Unknown DisconnectReason: ${reason}`)
		}
		if (update.connection === "connecting" || update.receivedPendingNotifications === "false") {
            console.log(color("\n🌿 Connecting...", 'yellow'));
        }

        if (update.connection === "open" || update.receivedPendingNotifications === "true") {
            console.log(color("     |█▌▄ █ ▌▄ █▌▄ █ ▌▄ █▌▄ █|", "green"));
            console.log("\n");
            console.log(color("💣🔥     Ｔｈｅ Ｒｉｃｋ | ｖ１      🔥💣", 'white'));
            console.log("\n");
            console.log(color("    ▂ ▃ ▄ ▅ ▆ ▇ █ █ ▇ ▆ ▅ ▄ ▃ ▂", "red"));
            console.log(chalk.green("🎉    Agradecemos tu preferencia          🎉"));
            console.log(chalk.green("👨‍💻     Creada por: TheadrianoMX          👨‍💻"));
            await delay(5000);  // Asegúrate de que la función delay esté definida
            console.log("Leyendo mensajes...");
        }
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startProo();
	}
})
sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })

sock.ev.on('group-participants.update', async (update) => {
    await sendWelcome(sock, update);
});

sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''



if (budy.startsWith('.') && budy.toLowerCase().includes('cerrar')) {
    await abrirCerrarGrupo(sock, info, 'cerrar');
} else if (budy.startsWith('.') && budy.toLowerCase().includes('abrir')) {
    await abrirCerrarGrupo(sock, info, 'abrir');
}


if (budy.startsWith('.') && budy.toLowerCase().includes('explorar')) {
    const user = info.key.remoteJid;  // Obtener el usuario que envió el mensaje
    const result = await explorar(sock, user);  // Llamar a la función con sock y user

    // Verifica que se tenga una imagen y envíala
    if (result.image) {
        try {
            await sock.sendMessage(user, {
                image: { url: result.image }, // La imagen desde la URL
                caption: result.text // El texto que acompaña la imagen
            });
        } catch (error) {
            console.error("Error al enviar la imagen:", error);
        }
    } else {
        await sock.sendMessage(user, { text: result.text });  // Solo el texto si no hay imagen
    }
}
if (budy.startsWith('.') && budy.toLowerCase().includes('minar')) {
    const user = info.key.remoteJid;  // Identificar al usuario

    // Llamamos al comando minar y obtenemos el mensaje y la imagen
    const result = await minar(user);

    // Enviar la respuesta al usuario (texto e imagen)
    if (result.image) {
        // Si hay imagen, la enviamos
        sock.sendMessage(user, {
            text: result.text,
            image: { url: result.image },  // Enviar la imagen con URL
            caption: result.text  // Usamos el texto como leyenda de la imagen
        });
    } else {
        // Si no hay imagen, solo enviamos el texto
        sock.sendMessage(user, { text: result.text });
    }
}
if (budy.startsWith('.') && budy.toLowerCase().includes('robar')) {
    const user = info.key.remoteJid;  // Identificar al usuario
    const mentionedUser = budy.split(' ')[1];  // Obtener al usuario mencionado en el comando

    // Llamamos al comando robar y obtenemos el mensaje y la imagen
    const result = await robar(user, mentionedUser);

    // Enviar la respuesta al usuario (texto e imagen)
    if (result.image) {
        // Si hay imagen, la enviamos
        sock.sendMessage(user, {
            text: result.text,
            image: { url: result.image },  // Enviar la imagen con URL
            caption: result.text  // Usamos el texto como leyenda de la imagen
        });
    } else {
        // Si no hay imagen, solo enviamos el texto
        sock.sendMessage(user, { text: result.text });
    }
}






// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 
const isApagado = isGroup ? apagado.includes(from) : false
 // CONSTANTES NUEVAS
 
 const enviar = (texto) => {
	sock.sendMessage(from,{ text : texto }, {quoted : info})
	}
	
	 const enviarimagen = (imagen) => {
	sock.sendMessage(from,{ image : imagen }, {quoted : info})
	}
	
	  const enviarimagencap = (imagen, caption) => {
	sock.sendMessage(from,{ image : imagen ,caption : caption}, {quoted : info})
	}
	
	  const enviarvideos = (videos) => {
	sock.sendMessage(from,{ video : videos }, {quoted : info})
	}
	
	   const enviarvideoscap = (videos, caption) => {
	sock.sendMessage(from,{ video : videos ,caption : caption}, {quoted : info})
	}
	
	const enviarmusica = (audios) => {
	sock.sendMessage(from,{ audio : audios }, {quoted : info})
	}
	
	const enviarsticker = (sticker) => {
	sock.sendMessage(from,{ sticker : sticker }, {quoted : info})
	}
 
 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
 
 // RESPUESTAS AUTOMATICAS
 const respuesta = {
 espere : "Espere un momento porfavor",
 dono : " este comando es solo usado por mi creador",
 premiun: "compre la version premiun",
 grupos : "este comando es solo para grupos",
 privado : " 🕵‍♂️*Este comando solo se puede usar en el chat privado*",
 error : " ⚠️ *Lo siento ocurrio un error, intentelo de nuevo Porfavor*",
 textito : "😤 *Digita un texto Porfavor* ",
 }
 
// MENSAJES EN CONSOLA 
 
function _0x53f6(){var _0x5308bc=['red','72ylRnvw','yellow','7609130vzxSwQ','6834oCfoue','split','125363fBqcqf','Horário:','3605556ItelPT','Nombre:','Palabras:','white','comando:','11266026KSPnxJ','Número:','length','12171ERgxyT','Grupo:','➢➣➢➣➢➣➢➣➢➣➢➣➢➣➢➣','248OJlhIF','\x20\x20————————》THEADRIANO\x20OFC《—————————','62070IUCwWl','6444lNCrgQ','log'];_0x53f6=function(){return _0x5308bc;};return _0x53f6();}function _0x41de(_0x373799,_0x54ecdf){var _0x53f6c0=_0x53f6();return _0x41de=function(_0x41defc,_0x57a333){_0x41defc=_0x41defc-0x16a;var _0x4d91d0=_0x53f6c0[_0x41defc];return _0x4d91d0;},_0x41de(_0x373799,_0x54ecdf);}var _0x41b4e1=_0x41de;(function(_0x4459d1,_0x819728){var _0x49921f=_0x41de,_0x2746c0=_0x4459d1();while(!![]){try{var _0x32c334=parseInt(_0x49921f(0x173))/0x1*(parseInt(_0x49921f(0x170))/0x2)+-parseInt(_0x49921f(0x17f))/0x3+-parseInt(_0x49921f(0x177))/0x4+-parseInt(_0x49921f(0x172))/0x5+-parseInt(_0x49921f(0x17c))/0x6+-parseInt(_0x49921f(0x175))/0x7*(-parseInt(_0x49921f(0x16a))/0x8)+parseInt(_0x49921f(0x16d))/0x9*(parseInt(_0x49921f(0x16c))/0xa);if(_0x32c334===_0x819728)break;else _0x2746c0['push'](_0x2746c0['shift']());}catch(_0x2e934d){_0x2746c0['push'](_0x2746c0['shift']());}}}(_0x53f6,0xe59b8));isGroup?console[_0x41b4e1(0x16e)](color(_0x41b4e1(0x16b),'red')+'\x0a'+(color('┃',_0x41b4e1(0x16f))+'\x20'+color('Número:',_0x41b4e1(0x171))+'\x20'+color(sender[_0x41b4e1(0x174)]('@')[0x0],_0x41b4e1(0x17a))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color('Nombre:','yellow')+'\x20'+color(pushname,_0x41b4e1(0x17a))+'\x0a')+(color('┃','red')+'\x20'+color(_0x41b4e1(0x176),_0x41b4e1(0x171))+'\x20'+color(hora,_0x41b4e1(0x17a))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color('comando:',_0x41b4e1(0x171))+'\x20'+color(comando)+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color(_0x41b4e1(0x179),'yellow')+'\x20'+color(budy[_0x41b4e1(0x17e)],_0x41b4e1(0x171))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color(_0x41b4e1(0x180),_0x41b4e1(0x171))+'\x20'+color(groupName,_0x41b4e1(0x17a))+'\x0a')+(''+color('══════════════════════════','red'))):console[_0x41b4e1(0x16e)](color(_0x41b4e1(0x181),_0x41b4e1(0x16f))+'\x0a'+(color('┃',_0x41b4e1(0x16f))+'\x20'+color(_0x41b4e1(0x17d),_0x41b4e1(0x171))+'\x20'+color(sender['split']('@')[0x0],_0x41b4e1(0x17a))+'\x0a')+(color('┃','red')+'\x20'+color(_0x41b4e1(0x178),_0x41b4e1(0x171))+'\x20'+color(pushname,'white')+'\x0a')+(color('┃','red')+'\x20'+color(_0x41b4e1(0x176),_0x41b4e1(0x171))+'\x20'+color(hora,_0x41b4e1(0x17a))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color(_0x41b4e1(0x17b),_0x41b4e1(0x171))+'\x20'+color('No',_0x41b4e1(0x17a))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color(_0x41b4e1(0x179),'yellow')+'\x20'+color(budy[_0x41b4e1(0x17e)],_0x41b4e1(0x17a))+'\x0a')+(color('┃',_0x41b4e1(0x16f))+'\x20'+color('Grupo:',_0x41b4e1(0x171))+'\x20'+color(groupName,_0x41b4e1(0x17a))+'\x0a')+(''+color('✦\x20●●●●●●●●●\x20✦\x20●●●●●●●●●\x20✦','red')));
 
if(type === "interactiveResponseMessage"){
	let msg = info.message[type]  || info.msg
	if(msg.nativeFlowResponseMessage){ 
		let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
		if(id){
			let emit_msg = { 
				key : { ...info.key } , // SET RANDOME MESSAGE ID  
				message:{ extendedTextMessage : { text : id } } ,
				pushName : pushname,
				messageTimestamp  : info.messageTimestamp || +19016500693
			}
			return sock.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
		}
	}
}

switch(comando) {


	case "bot":
		if (isApagado) return;
		var msg = generateWAMessageFromContent(from, {
		  viewOnceMessage: {
			message: {
			  "messageContextInfo": {
				"deviceListMetadata": {},
				"deviceListMetadataVersion": 2
			  },
			  interactiveMessage: proto.Message.InteractiveMessage.create({
				contextInfo: {
				  mentionedJid: [sender],
				  isForwarded: true,
				  forwardedNewsletterMessageInfo: {
					newsletterJid: 'LINK DE YOUTUBE',
					newsletterName: 'NOMBRE DEL BOT',
					serverMessageId: -1
				  },
				  businessMessageForwardInfo: { businessOwnerJid: BotNumber },
				},
				body: proto.Message.InteractiveMessage.Body.create({
				  text: `Hola ${pushname} 👋  
	  
	  > Ｔｈｅ Ｒｉｃｋ | ｖ１📌
	  
	  ~bot de uso libre~
	  
	  *Bot actualmente en desarrollo*
	  
	  _inspirado y desarrollado a base de Bialeys y GATA MD_
	  
	  sigue el canal de bot🐦‍⬛
	  https://whatsapp.com/channel/0029VatdMm48V0tjRSCnft2n
	  Unete a mi grupo de whatsapp👾
	  https://chat.whatsapp.com/Br6JEvNDBzC2cbuKB1CVZG
	  `
				}),
				footer: proto.Message.InteractiveMessage.Footer.create({
				  text: " "
				}),
				header: proto.Message.InteractiveMessage.Header.create({
				  title: ` `,
				  subtitle: "",
				  hasMediaAttachment: true,
				  ...(await prepareWAMessageMedia({ image: { url: "https://i.postimg.cc/3wGKJMkS/20241107-173047.jpg" } }, { upload: sock.waUploadToServer }))
				}),
				nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
				  buttons: [
					{
					  "name": "quick_reply",
					  "buttonParamsJson": `{"display_text":"*M E N U📌*","id":"!menu"}`
					},
				  ],
				})
			  })
			}
		  }
		}, {});
	  
		try {
		  await sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		  });
		} catch {
		  enviar("[❗️] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴");
		}
		break;
	  
	  
	  case "menu":
		if (isApagado) return;
		var msg = generateWAMessageFromContent(from, {
		  viewOnceMessage: {
			message: {
			  "messageContextInfo": {
				"deviceListMetadata": {},
				"deviceListMetadataVersion": 2
			  },
			  interactiveMessage: proto.Message.InteractiveMessage.create({
				contextInfo: {
				  mentionedJid: [sender],
				  isForwarded: true,
				  forwardedNewsletterMessageInfo: {
					newsletterJid: 'LINK DE YOUTUBE',
					newsletterName: 'NOMBRE DEL BOT',
					serverMessageId: -1
				  },
				  businessMessageForwardInfo: { businessOwnerJid: BotNumber },
				},
				body: proto.Message.InteractiveMessage.Body.create({
				  text: `Hola ${pushname} 👋  
	  
> *Ｔｈｅ Ｒｉｃｋ | ｖ１📌*		
	  
	  *LISTA DE COMANDOS DISPONIBLES*
	  
> -ADMINISTRACION-
	  *desactivarbot*
	  *activarbot*
	  *cerrar o abrir grupo*
	  *demote*
	  *link*
	  
> ┣▇▇ interaccion ▇▇═─ 💦
	  *status*
	  *walpaper*
	  *notify*
	  *marcar*
	  *cita*
	  *info*
	  *rules*
	  *time*
	  *admins*
	  *ping*
	  *owner*
	  *dado*
	  *meme*
	  *frase*
	  *libro*
	  *curiosidad*
	  *frase*
	  `
				}),
				footer: proto.Message.InteractiveMessage.Footer.create({
				  text: " "
				}),
				header: proto.Message.InteractiveMessage.Header.create({
				  title: ` `,
				  subtitle: "",
				  hasMediaAttachment: true,
				  ...(await prepareWAMessageMedia({ image: { url: "https://i.postimg.cc/Qt5jt9NT/menu.jpg" } }, { upload: sock.waUploadToServer }))
				}),
				nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
				  buttons: [
					{
					  "name": "quick_reply",
					  "buttonParamsJson": `{"display_text":"*M E N U📌*","id":"!bot"}`
					},
				  ],
				})
			  })
			}
		  }
		}, {});
	  
		try {
		  await sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		  });
		} catch {
		  enviar("[❗️] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴");
		}
		break;
	  


	



 case 'desactivarbot':
        if (!isBotGroupAdmins) return enviar("🎁 𝙴𝙻 𝙱𝙾𝚃 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁")
if (!isGroupAdmins) return enviar("🎁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 , 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚂𝙰𝙳𝙾 𝙿𝙾𝚁 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁")
apagado.push(from)
fs.writeFileSync('./data/apagado.json', JSON.stringify(apagado))
enviar("🎁 𝙴𝙻 𝙱𝙾𝚃 𝙵𝚄𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.")
break





// Case para activar Bot
case 'activarbot':
if (!isGroupAdmins) return enviar("🎁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 , 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚂𝙰𝙳𝙾 𝙿𝙾𝚁 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁")
let activaElbot = apagado.indexOf(from)
apagado.splice(activaElbot, 1)
fs.writeFileSync('./data/apagado.json', JSON.stringify(apagado))
enviar("🎁 𝙴𝙻 𝙱𝙾𝚃 𝙵𝚄𝙴 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾")
break













    case 'status':
        if(isApagado) return
        const estadoGrupo = grupos[from] ? (grupos[from].antilinkActivo ? 'Activado' : 'Desactivado') : 'No configurado';
        const nombreGrupo = groupName || 'Grupo';
        const nombreUsuario = pushname || 'Usuario';
        const mensajeEstatus = `📝 *Estatus del Grupo* 📝\n\n📅 *Fecha:* ${data}\n⏰ *Hora:* ${hora}\n\n👤 *Usuario:* ${nombreUsuario}\n📌 *Grupo:* *${nombreGrupo}*\n🔒 *Antilink:* ${estadoGrupo}`;
        
        await sock.sendMessage(from, {
            image: { url: 'https://iili.io/2T1dR29.png' },
            caption: mensajeEstatus
        });
        break;
    


    
        






case 'wallpaper':
    if(isApagado) return
  const fotoText = `> Ｔｈｅ Ｒｉｃｋ | ｖ１🎩`;  // Definir el texto para la foto

  // Arreglo con las URLs de las imágenes
  const fotos = [
    'https://i.postimg.cc/tTfX2Ryy/ty.jpg',
    'https://iili.io/2IFZ8In.jpg',
    'https://iili.io/2IKHHo7.jpg',
    'https://iili.io/2IKHxoP.jpg',
    'https://iili.io/2IK9XwB.jpg'
  ];

  // Seleccionar una imagen aleatoria del arreglo
  const fotoImageUrl = fotos[Math.floor(Math.random() * fotos.length)];

  await sock.sendMessage(from, 
    { 
      image: { url: fotoImageUrl },  // Usar la URL de la imagen seleccionada
      caption: fotoText  // Usar el texto para el pie de la foto
    });
  break;






    

case "notify":
    if(isApagado) return
    sock.sendMessage(
        from,
        {
            text: q ? q : "> Por favor, proporciona un mensaje para notificar. 🎃", // Si "q" no existe, usa "Reportense" como mensaje predeterminado.
            mentions: groupMembers.map(a => a.id) // Mapea los IDs de los miembros del grupo.
        },
        { quoted: info }
    );
    break;

case "marcar":
case "tagal":
    let tekos = q ? `${q}\n` : ""; // Inicializa "tekos" con el valor de "q" o una cadena vacía si "q" no existe.
    for (let mem of groupMembers) {
        tekos += `@${mem.id.split('@')[0]}\n`; // Agrega la mención de cada miembro.
    }
    sock.sendMessage(
        from,
        {
            text: tekos ? tekos : "Reportense",
            mentions: groupMembers.map(a => a.id)
        },
        { quoted: info }
    );
    break;
    

	case 'cita':
        if(isApagado) return
		const texto = args.join(' ');
		if (!texto) {
			await sock.sendMessage(from, { text: '> Por favor, proporciona un texto para citar⁉️.🤔' });
		} else {
			await sock.sendMessage(from, { text: `📝 Cita: "${texto}"` });
		}
		break;


    case "info":
        if(isApagado) return
    const groupMetadata = await sock.groupMetadata(from);
    const groupInfo = `
*Grupo:* ${groupMetadata.subject}
*Descripción:*
 ${groupMetadata.desc || "Sin descripción"}
*Número de Miembros:*
 ${groupMetadata.participants.length}
    `;
    sock.sendMessage(from, { text: groupInfo }, { quoted: info });
    break;
    
    case "rules":
        if(isApagado) return
    let rulesMessage = `
*📜 Reglas del Grupo 📜*

1. Respetar a todos los miembros.
2. No enviar spam.
3. Mantener el contenido dentro de los temas permitidos.
4. No compartir enlaces externos sin permiso.

Sigamos estas reglas para mantener el grupo en orden.
    `;
    sock.sendMessage(from, { text: rulesMessage }, { quoted });
    break;
    
    

    case 'time':
        if(isApagado) return
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString(); // Obtener la hora local
        const currentDay = currentDate.toLocaleDateString('es-ES', { weekday: 'long' }); // Obtener el día en formato largo (e.g., "lunes")
        
        await sock.sendMessage(from, { 
            text: `🎃 *Ｔｈｅ Ｒｉｃｋ | ｖ１ 🎃*\n\n🕒 *Hora actual*: ${currentTime}\n📅 *Día actual*: ${currentDay}`
        });
        break;



  
    case "admins":

    if(isApagado) return
    if (!isGroup) {
        sock.sendMessage(from, { text: "*📢Este comando solo se puede usar en grupos.📢*" }, { quoted });
        break;
    }
    let adminList = '*Lista de Administradores del Grupo:*\n';
    for (let admin of groupAdmins) {
        adminList += `@${admin.split('@')[0]}\n`;
    }
    sock.sendMessage(from, { text: adminList, mentions: groupAdmins }, { quoted });
    break;
    
    case "link":
        if(isApagado) return
    if (!isGroup) {
        sock.sendMessage(from, { text: "*📢Este comando solo se puede usar en grupos.📢*" }, { quoted });
        break;
    }
    if (!isBotGroupAdmins) {
        sock.sendMessage(from, { text: "*Necesito ser administrador para obtener el enlace del grupo⚠️.*" }, { quoted });
        break;
    }
    const groupInviteCode = await sock.groupInviteCode(from);
    sock.sendMessage(from, { text: `Aquí está el enlace del grupo:\nhttps://chat.whatsapp.com/${groupInviteCode}` }, { quoted });
    break;




    case 'ping':
        if(isApagado) return
        await sock.sendMessage(from, {
            text: `
            🔥 Ｔｈｅ Ｒｉｃｋ | ｖ１ 🔥
            
            
            > *Siempre conectado🥵*
    
            > *Siempre funcionando 🫣*
    
            > *Servidor:* 
    
            Verizon💢 Washington DC
    
            *Descarga:* 100 Mbs
            *Subida:* 1000 Mbs
            *CPU:* 4.23 AMD RYZEN 5 16 núcleos
            *Ram:* 36 GB
            `
        });
        break;


    
    case "owner":
        if(isApagado) return
    let ownerInfo = `
*Creador*

*🔥 Ｔｈｅ Ｒｉｃｋ | ｖ１ 🔥*

👤 Nombre:
 ${pushname} 👾


📱 Número:
 +19016500693


    `;
    sock.sendMessage(from, { text: ownerInfo }, { quoted });
    
    break;












    case 'dado':
        if(isApagado) return
        const diceRoll = Math.floor(Math.random() * 6) + 1; // Lanza el dado (puedes ajustarlo a tus necesidades)
        const dadoText = `🎲 El dado cayó en ${diceRoll}.`;
      
        // Arreglo con las URLs de las imágenes
        const dado = [
            'https://iili.io/2IBPMZu.jpg', // Imagen 1
            'https://iili.io/2IBsXdQ.jpg', // Imagen 2
            'https://iili.io/2IBsehF.jpg', // Imagen 3
            'https://iili.io/2IBLq4j.jpg'  // Imagen 4
        ];
      
        // Seleccionar una imagen aleatoria del arreglo
        const dadoImageUrl = dado[Math.floor(Math.random() * dado.length)];
      
        await sock.sendMessage(from, 
          { 
            image: { url: dadoImageUrl },  // Usar la URL de la imagen seleccionada
            caption: dadoText  // Usar el texto para el pie de la foto
          });
        break;
    
case "coins":
    if(isApagado) return
    const coinResult = Math.random() < 0.5 ? "Cara" : "Cruz";
    sock.sendMessage(from, { text: `🪙 La moneda cayó en ${coinResult}.` }, { quoted });
    break;
    
    case "cumplido":
        if(isApagado) return
    const compliments = [
        "¡Eres una persona increíble!", "¡Tienes una sonrisa maravillosa!", "Eres un amigo maravilloso.",
        "¡Nunca dejes de ser tú!", "Tienes un gran sentido del humor.", "Eres más valiente de lo que crees."
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    sock.sendMessage(from, { text: `😊 ${randomCompliment}` }, { quoted });
    break;
    
    case "chiste":
        if(isApagado) return
    const jokes = [
        "¿Por qué el libro de matemáticas estaba triste? ¡Porque tenía demasiados problemas!",
        "¿Cuál es el café más peligroso del mundo? ¡El ex-preso!",
        "¿Qué le dijo una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    sock.sendMessage(from, { text: `😂 ${randomJoke}` }, { quoted });
    break;
    
    


case "meme":
    if(isApagado) return
    // Envío de un meme aleatorio (puedes añadir una lista de URLs de memes)
    let memes = ["https://link-a-un-meme1.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fmemes%2Fcomments%2F1d3r5nm%2Fsomething_always_has_to_go_wrong_with_it%2F&psig=AOvVaw2S3pZR3K9t33jzW5_Vj--C&ust=1730351962171000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDN4MSttYkDFQAAAAAdAAAAABAE"];
    let randomMeme = memes[Math.floor(Math.random() * memes.length)];
    sock.sendMessage(from, { image: { url: randomMeme }, caption: "Aquí tienes un meme 😆" }, { quoted: info });
    break;

case "frase1":
    if(isApagado) return
    let frases = [
        "✨ *La vida es un 10% lo que te pasa y un 90% cómo reaccionas.* ✨",
        "😊 *La felicidad es una elección.* 😊",
        "💪 *Cree en ti y todo será posible.* 💪",
        "🌟 *Cada día es una nueva oportunidad.* 🌟",
        "🔥 *El éxito es la suma de pequeños esfuerzos repetidos día tras día.* 🔥"
    ];
    let randomFrase = frases[Math.floor(Math.random() * frases.length)];
    sock.sendMessage(from, { text: randomFrase }, { quoted: info });
    break;
    
    case "libro":
        if(isApagado) return
    const libros = [
        {
            titulo: "1984",
            autor: "George Orwell",
            enlace: "https://www.amazon.com/-/es/George-Orwell/dp/0451524934"
        },
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            enlace: "https://www.amazon.com/-/es/Gabriel-Garc%C3%ADa-M%C3%A1rquez/dp/0060883286"
        },
        {
            titulo: "El alquimista",
            autor: "Paulo Coelho",
            enlace: "https://www.amazon.com/-/es/Paulo-Coelho/dp/0062315001"
        }
    ];
    const randomLibro = libros[Math.floor(Math.random() * libros.length)];
    sock.sendMessage(from, { 
        text: `✨ **Recomendación de Libro** ✨\n\n` +
              `📖 **Título:** *${randomLibro.titulo}*\n` +
              `✍️ **Autor:** ${randomLibro.autor}\n` +
              `🛒 **Compra aquí:** [${randomLibro.titulo}](${randomLibro.enlace})\n\n` +
              `🌟 ¡Sumérgete en esta lectura y disfruta de la aventura literaria! 📚\n\n` +
              `══════════════════════════════\n` +
              `💠💠💠💠💠💠💠💠💠💠💠💠💠\n` +
              `💠          **THERICK | v1**          💠\n` +
              `💠💠💠💠💠💠💠💠💠💠💠💠💠\n` +
              `══════════════════════════════`, 
        quoted, 
        linkPreview: true 
    });
    break;
    
    
    
  case "curiosidad":
    if(isApagado) return
    const curiosidades = [
        {
            dato: "🔵 **Los pulpos tienen tres corazones y su sangre es azul.**",
            enlace: "https://www.nationalgeographic.com.es/animales/los-pulpos-y-sus-corazones_12557",
            fuente: "National Geographic"
        },
        {
            dato: "🐝 **Las abejas pueden reconocer rostros humanos.**",
            enlace: "https://www.bbc.com/mundo/noticias-37382812",
            fuente: "BBC Mundo"
        },
        {
            dato: "🌸 **Los flamencos son rosados debido a los pigmentos de su dieta, principalmente camarones.**",
            enlace: "https://www.abc.es/espana/20200622/los-flamencos-rosados-dieta-20200622142037.html",
            fuente: "ABC"
        },
        {
            dato: "🦘 **Los canguros no pueden caminar hacia atrás.**",
            enlace: "https://www.culturagenial.com/es/curiosidades-sobre-los-canguros/",
            fuente: "Cultura Genial"
        },
        {
            dato: "⭐ **Las estrellas de mar pueden regenerar sus brazos y algunas pueden incluso regenerar un cuerpo completo a partir de un brazo.**",
            enlace: "https://www.porquepasa.com/por-que-pasa/por-que-las-estrellas-de-mar-pueden-regenerar-sus-brazos/",
            fuente: "¿Por qué pasa?"
        }
    ];

    const randomCuriosidad = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    sock.sendMessage(from, { 
        text: `🔍 **Dato Curioso** 🔍\n\n` +
              `${randomCuriosidad.dato}\n\n` +
              `📝 *Fuente:* [${randomCuriosidad.fuente}](${randomCuriosidad.enlace})\n\n` +
              `🌟 ¡La curiosidad es parte del conocimiento! ¡Aprende algo nuevo hoy! 🌍\n\n` +
              `=====================\n` +
             
              `💠   THERICK | v1    💠\n` +
            
              `=====================`, 
        quoted, 
        linkPreview: true 
    });
    break;
    
    
  
    
    
  
    case "frase": 
    if(isApagado) return
    const quotes = [
        "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
        "No esperes. El tiempo nunca será perfecto.",
        "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        "La única manera de hacer un gran trabajo es amar lo que haces.",
        "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "Haz lo que puedas, con lo que tengas, donde estés.",
        "No se trata de cuántos recursos tienes, sino de cómo los usas.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "El miedo es solo temporal. El arrepentimiento es para siempre.",
        "La vida es demasiado corta como para esperar el momento perfecto.",
        "Nunca es tarde para ser lo que podrías haber sido.",
        "Los sueños no tienen fecha de caducidad. Sigue soñando.",
        "No te detengas cuando estés cansado, detente cuando hayas terminado."
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    await sock.sendMessage(from, { text: `✨ **Frase del día**: "${randomQuote}"` });
    break;

	case "felizcumple":
    if (isApagado) return;
    if (!mentionedJidList[0]) {
        enviar("🎈 Menciona a alguien para desearle feliz cumpleaños. 🎈");
        break;
    }
    let birthdayMessage = `🎉 *¡Feliz Cumpleaños @${mentionedJidList[0].split('@')[0]}!* 🎉\n\n🎂 *Que todos tus deseos se hagan realidad y que tengas un día increíble.* 🥳\n\n✨ ¡A disfrutar tu día especial al máximo! 🎊`;
    sock.sendMessage(from, { text: birthdayMessage, mentions: mentionedJidList }, { quoted });
    break;

case "felizaniversario":
    if (isApagado) return;
    if (!mentionedJidList[0]) {
        enviar("💍 Menciona a alguien para desearle feliz aniversario. 💍");
        break;
    }
    let anniversaryMessage = `🎉 *¡Feliz Aniversario @${mentionedJidList[0].split('@')[0]}!* 🎉\n\n🌹 *Que sigas acumulando años de éxito, amor y felicidad.* 🌹\n\n✨ *¡Por muchos años más de felicidad y logros!* 🥂`;
    sock.sendMessage(from, { text: anniversaryMessage, mentions: mentionedJidList }, { quoted });
    break;

case "abrazo":
    if (isApagado) return;
    if (!isGroup) {
        sock.sendMessage(from, { text: "*📢Este comando solo se puede usar en grupos.📢*" }, { quoted });
        break;
    }
    if (!mentionedJidList[0]) {
        sock.sendMessage(from, { text: "Menciona a alguien para darle un abrazo." }, { quoted });
        break;
    }
    let hugMessage = `🤗 ${pushname} le da un gran abrazo a @${mentionedJidList[0].split('@')[0]}`;
    sock.sendMessage(from, { text: hugMessage, mentions: mentionedJidList }, { quoted });
    break;

case "beso":
    if (isApagado) return;
    if (!isGroup) {
        sock.sendMessage(from, { text: "*📢Este comando solo se puede usar en grupos.📢*" }, { quoted });
        break;
    }
    if (!mentionedJidList[0]) {
        sock.sendMessage(from, { text: "Menciona a alguien para enviarle un beso." }, { quoted });
        break;
    }
    let kissMessage = `💋 ${pushname} le envía un beso a @${mentionedJidList[0].split('@')[0]}`;
    sock.sendMessage(from, { text: kissMessage, mentions: mentionedJidList }, { quoted });
    break;

case "demote":
    if (isApagado) return;
    if (!isGroupAdmins) {
        sock.sendMessage(from, { text: "> *No tienes permisos para usar este comando🙂.*" }, { quoted });
        break;
    }
    if (!mentionedJidList[0]) {
        sock.sendMessage(from, { text: "Menciona a un usuario para quitarle el rol de administrador." }, { quoted });
        break;
    }
    try {
        for (let user of mentionedJidList) {
            await sock.groupParticipantsUpdate(from, [user], "demote");
        }
        sock.sendMessage(from, { text: "Usuario(s) degradado(s) de administrador." }, { quoted });
    } catch (error) {
        console.error("Error al degradar usuarios:", error);
        sock.sendMessage(from, { text: "Ocurrió un error al intentar degradar al usuario." }, { quoted });
    }
    break;







// COMANDOS SIN PREFIJO
default:




} 
 
 
 
 
 
 
 
 
 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
 }
 
 
 
        
    })





    
}

startProo()