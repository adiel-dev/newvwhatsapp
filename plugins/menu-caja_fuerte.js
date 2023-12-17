const handler = async (m, {conn, usedPrefix}) => {
  const pp = imagen4;
  try {
  } catch (e) {
  } finally {
    const name = await conn.getName(m.sender);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `
*ミ🍁 𝙷𝙾𝙻𝙰 ${taguser} 🍁彡*

ㅤㅤ *🗳️CAJA FUERTE🔐*

- 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴

*AGREGAR A LA LISTA*

° 🗳️ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
° 🗳️ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
° 🗳️ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
° 🗳️ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
° 🗳️ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
° 🗳️ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*LISTA DE COMANDOS*

° 🗳️ _${usedPrefix}listamsg_
° 🗳️ _${usedPrefix}listavn_
° 🗳️ _${usedPrefix}listavideo_
° 🗳️ _${usedPrefix}listaaudio_
° 🗳️ _${usedPrefix}listaimg_
° 🗳️ _${usedPrefix}listasticker_

*VER TEXTOS O ARCHIVOS*

° 🗳️ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*ELIMINAR*

° 🗳️ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
° 🗳️ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
    // conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
  }
};
handler.help = ['cajafuerte'];
handler.tags = ['owner'];
handler.command = /^(cajafuerte)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
