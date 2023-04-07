const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()

module.exports = new TelegramApi(
  '6117695486:AAGvtuxNdu0hVLg_j6vZal4zJZ1-3qtu3Tw',
  { polling: true }
)
