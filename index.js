const bot = require('./app/bot')
const MESSAGES = require('./app/messages')

const webAppUrl = 'https://operkot.github.io/bestshave-bot-frontend/#/'

const start = () => {
  bot.setMyCommands([
    { command: '/faq', description: 'Часто задаваемые вопросы' },
    { command: '/info', description: 'Информация о доставке и оплате' },
    { command: '/contacts', description: 'Контактная информация' },
  ])

  bot.on('message', async msg => {
    const chatId = msg.chat.id
    const text = msg.text
    const user = msg.chat.first_name

    if (text === '/start') {
      return bot.sendMessage(chatId, MESSAGES.WELLCOME_MESSAGE(user), {
        parse_mode: 'Markdown',
        reply_markup: {
          keyboard: [[{ text: 'Магазин', web_app: { url: webAppUrl } }]],
          row_width: 1,
          resize_keyboard: true,
        },
      })
    }

    if (text === '/faq') {
      return bot.sendMessage(chatId, MESSAGES.FAQ_COMMAND_MSG, {
        parse_mode: 'Markdown',
      })
    }

    if (text === '/info') {
      return bot.sendMessage(chatId, MESSAGES.INFO_COMMAND_MESSAGE, {
        parse_mode: 'Markdown',
      })
    }

    if (text === '/contacts') {
      return bot.sendMessage(chatId, MESSAGES.CONTACTS_COMMAND_MESSAGE, {
        parse_mode: 'Markdown',
      })
    }

    if (msg?.web_app_data?.data) {
      try {
        const data = JSON.parse(msg?.web_app_data?.data)

        bot.sendMessage(chatId, MESSAGES.ORDER_MSG(data.items, data.total), {
          parse_mode: 'Markdown',
        })
      } catch (error) {
        bot.sendMessage(chatId, MESSAGES.BASIC_ERROR_MSG, {
          parse_mode: 'Markdown',
        })
      }
    }

    // return bot.sendMessage(chatId, MESSAGES.UNKNOWN_COMMAND_MSG)
  })
}

start()
