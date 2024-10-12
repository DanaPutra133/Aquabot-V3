const similarity = require('similarity')
const threshold = 0.72 // semakin tinggi nilai, semakin mirip
let poin = 10000
module.exports = {
    async before(m) {
        this.family = this.family ? this.family : {}
        let id = m.chat
        let users = global.db.data.users[m.sender]
        if (!(id in conn.family)) return 
        // if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/FAMILY 100/i.test(m.quoted.text)) return 
        // this.family = this.family ? this.family : {}
        let room = this.family[id]
        if (room.jawaban == undefined) {
            delete this.family[id]
            return !0
        }
        let text = m.text.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurrender) {
            let index = room.jawaban.indexOf(text)
            if (index < 0) {
                if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) m.reply('Dikit lagi!')
                    else m.reply(`*Salah!*`)
                return !0
            }
            if (room.terjawab[index]) return !0
            let users = global.db.data.users[m.sender]
            room.terjawab[index] = m.sender
            users.exp += room.winScore
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
            return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
        }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} kredit sosial! tiap jawaban benar`}
    `.trim()
    
        if (this.family[id].msg_old) await this.sendMessage(m.chat, { delete: this.family[id].msg_old.key }).catch(e => e)
        let msg_old = await this.reply(m.chat, caption, m).then(msg => {
            return this.family[id].msg = msg
        }).catch(_ => _)
        this.family[id].msg_old = msg_old



        if (isWin || isSurrender) {
            setTimeout(() => {
                this.sendMessage(m.chat, { delete:this.family[id].msg.key }).catch(e => e)
                delete this.family[id]
            }, 10000)

        }
        return !0

    }
}

//danaputra_133