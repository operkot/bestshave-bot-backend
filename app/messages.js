const WELLCOME_MESSAGE = (name = 'Посетитель') =>
  `Здравствуйте ${name}!\nДобро пожаловать в магазин *BestShave*!\n\n\Доступные команды:\n/faq - часто задаваемые вопросы\n/info - информация о доставке и оплате\n/contacts - наши контакты\n\nЧтобы ознакомится с каталогом и сделать заказ, пожалуйста, воспользуйтесь кнопкой "Каталог", которая находится ниже`

const UNKNOWN_COMMAND_MSG = 'Я вас не понимаю! Попробуйте еще раз.'

const BASIC_ERROR_MSG =
  'Упс... Что-то пошло не так, пожалуйста, попробуйте зайти позже.'

const INFO_COMMAND_MESSAGE =
  'Для того чтобы сделать заказ воспользуйтесь кнопкой "Магазин". После оформления заказа мы свяжимся с вами для уточнения деталей оплаты и доставки.\n\n💳 Оплатить заказ вы можете переводом на карту Сбербанка 0000 0000 0000 0000 или же наличными при личной встрече.\n\n🚚 Все заказы отправляются сразу после оплаты в тот же день. Доставка осуществляется по всей России, службами "Почта Росии", СДЭК, Boxberry.\n\n❗ При заказае от 7000рублей, доставка бесплатно!'

const CONTACTS_COMMAND_MESSAGE =
  'Мы с радостью ответим на любые ваши вапросы.\nДля связи с нами вы можете использовать:\n*email:* info@bestshave.ru\n*телефон:* +7-999-999-99-99'

const FAQ_COMMAND_MSG =
  '❓ *Можно ли заказать у вас товар, которого нет в каталоге?*\nДа, мы привозим товары под заказ. Свяжитесь с нами любым удобным для вас способ и мы обсудим детали.\n\n❓ *Какими службами осуществляется доставка заказов?*\nМы осуществляем доставку с помощью *Почты России*, *СДЭК*, *Boxberry*.\n\n❓ *Как я могу оплатить заказ?*\nМы принимает оплату на карту сбера или же наличными при самовывозе.\n\n❓ *Как быстро вы отправите мой заказ?*\nМы отправляем заказы сразу же после оплаты.\n\n❓ *Есть ли у вас бесплатная доставка?*\nДа, при заказе на сумму от 7000руб. доставка по РФ бесплатная. \n\n❓ *Вы отправляете заказы за пределы РФ?*\nМы можем отправить заказ за пределы РФ. Чтобы узнать подробности, пожалуйста, свяжитесь с нами любым удобным способом.'

const ORDER_MSG = (items, total) => `
  Ваш заказ принятв обработку!\nМы свяжимся с вами в ближайшее время.\n\n*Вы заказали:*\n${items
    .map(i => `${i.quantity} x ${i.title} - ${i.price * i.quantity} ₽\n`)
    .join('')}\n\nна сумму: *${total}*
`

module.exports = {
  WELLCOME_MESSAGE,
  INFO_COMMAND_MESSAGE,
  CONTACTS_COMMAND_MESSAGE,
  FAQ_COMMAND_MSG,
  UNKNOWN_COMMAND_MSG,
  BASIC_ERROR_MSG,
  ORDER_MSG,
}
