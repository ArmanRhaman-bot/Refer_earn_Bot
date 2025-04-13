/*CMD
  command: /wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wallet 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var wallet = User.getProperty("wallet","❌ Your address is empty ")
var botc = Bot.getProperty("botc","not_set")

var text = "<b>Your Previous "+botc+" Wallet:</b> <blockquote>"+wallet+"</blockquote>\n\n<b>‼️ No wallet? No payments! 30-seconds setup</b>\n\n<i>Enter Your "+botc+" wallet receiving address</i>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/earn_menu" }
  ]
];


User.setProperty("myk11", message_id, "string");


Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});


Bot.runCommand("/wallet2");
