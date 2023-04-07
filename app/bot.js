const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()

module.exports = new TelegramApi(process.env.TOKEN, { polling: true })
