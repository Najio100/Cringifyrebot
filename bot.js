const TelegramBot = require('node-telegram-bot-api');

const token = '6949111157:AAHLs7LxVqeo92zAgEEm0rH76XqM8gNXa78'; // Replace with your actual bot token
const bot = new TelegramBot(token, { polling: true });

var arr = ["🤣","👺","👹","☺️","😍","🐱","🍓","😄","😁","🤣","😂","🥰","🤩","😍","😘","🤭","😌","😏","😉","😊","☺️","😜","😝","😛","🥲","☺️","🙄","🥺","😳","😬","😕","😲","🙁","😱","😱","😱","😱","😱","😰","😨","😣","😩","😣","🤤","😢","🤢","🌞","🌚","🥶","🥴","🤧","👿","😈","👺","👹","💢","💥","⚡","⭐","☠️","💩","🤖","🤑","🤠","🤡","🤧","😹","🕳️","💦","😺","😽","😿","💛","😼","😻","😺","💚","💙","💜","🤎","🖤","🖤","🤍","♥️","💘","💝","💛","🧡","❤️","💔","❣️","💟","💌","💕","💓","💗","💖","🫁","🫀","🧠","👀","💀","💀","🖕","👃","✊","✋","✌️","🤲","🤲","👇","🖕","🤘","🤜","🤘","👍","👎","🤞","👈","🤏","✍️","🙅","🙎","🙋","🙇","🤦","💇","💇","🙅","🧏","🧏","🙍"];

function draw() {
  return arr[Math.floor(Math.random() * arr.length)];
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text || 'Default Text'; // Use a default text if the user's message is empty

  const updatedText = userText.replace(/ /g, draw);

  bot.sendMessage(chatId, updatedText);
});

console.log('Bot is running...');
