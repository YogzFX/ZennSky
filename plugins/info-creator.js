const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: YogzFX
item.ORG: Owner ZennSky-Botz
item1.TEL;waid=6289510598381:6289510598381@s.whatsapp.net
item1.X-ABLabel:Selalu ada!
item2.EMAIL;type=INTERNET: yogzkyz@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;Mars;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https://github.com/YogzFX
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let dani = 'https://telegra.ph/file/a1a6e0675ada67e3cd3ab.jpg'
await conn.send3ButtonImg(m.chat, dani, "*Hai kak👋,  Itu nomor owner gw…*", '📮: jngn di spam kack', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
