TELEGRAM_BOT_TOKEN = '5287754572:AAHndHr6IdgK9hKALXs0ADcpwsDCLEwgK70'
const { randomBytes } = require('crypto');
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds = ['https://t.me/SarvarDev0312','https://t.me/QodirovDev','https://t.me/shohruz_coder']

bot.on('text', (msg) => msg.reply.text('iltimos shu lichga yozing' + chatIds));
bot.inlineKeyboard(GamepadButton)
bot.start();
let salom;
