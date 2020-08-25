import Telegraf from 'telegraf'

const bot = new Telegraf(process.env.TOKEN || '')

bot.help(ctx => {
    ctx.reply('An helpful message')
})

if (process.env.NODE_ENV === 'production') {
    bot.launch({
        webhook: {
            domain: 'https://your-app-name.herokuapp.com/',
            port: parseInt(process.env.PORT || '3000')
        }
    })
} else {
    bot.launch()
}