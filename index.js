// const express = require('express')
// const cors = require('cors')

const bot = require('./app/bot')
const MESSAGES = require('./app/messages')

const webAppUrl = 'https://operkot.github.io/bestshave-bot-frontend/#/'
// const webAppUrl = 'https://fa82-81-163-156-8.eu.ngrok.io'
// const PORT = '8080'

// const app = express()

// app.use(express.json())
// app.use(cors())

const start = () => {
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

        bot.sendMessage(chatId, MESSAGES.ORDER_MSG(data.items, data.total))
      } catch (error) {}
    }

    return bot.sendMessage(chatId, MESSAGES.UNKNOWN_COMMAND_MSG)
  })
}

start()

// app.post('/webdata', async (req, res) => {
//   const { queryId, items, total } = req.body
//   try {
//     await bot.answerWebAppQuery(queryId, {
//       type: 'article',
//       id: queryId,
//       title: 'Заказ офрмлен!',
//       input_message_content: {
//         message_text: MESSAGES.ORDER_MSG(items, total),
//       },
//     })
//     return res.status(200).json({})
//   } catch (error) {
//     await bot.answerWebAppQuery(queryId, {
//       type: 'article',
//       id: queryId,
//       title: 'Не удалось оформить заказ!',
//       input_message_content: {
//         message_text: 'Не удалось оформить заказ!',
//         parse_mode: 'Markdown',
//       },
//     })
//     return res.status(500).json({})
//   }
// })

// app.listen(PORT, () => console.log('Server started on port ' + PORT))
