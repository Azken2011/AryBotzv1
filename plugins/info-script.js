let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `๑–––┅═━🌹SCRIPT┅═━–––๑
           
      📮 Sc? By Aryy
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🎀Youtube', url: 'https://youtube.com/channel/UCibkBnPNnWrUuyRpTwCdMYQ'}},
    {index: 1, urlButton: {displayText: '🐈web', url: webs}},
    {index: 4, quickReplyButton: {displayText: '🎐grup', id: '.gcwangsaf'}},
    {index: 5, quickReplyButton: {displayText: '🌸gaada', id: 'kontol'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^script|sc$/i

export default handler
