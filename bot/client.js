import { Client, MessageEmbed} from 'discord.js'
import config                  from '../config.js'

const bot = new Client()
bot.login(config.bot.TOKEN)

const startListeners = context => {
    bot.on('ready', () => {
        console.log('bot ready')
    })

    bot.on('message', message => {
        console.log(message.content)
    })
}

export { bot,  startListeners }