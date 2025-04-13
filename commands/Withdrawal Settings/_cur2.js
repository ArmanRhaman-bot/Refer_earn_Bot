/*CMD
  command: /cur2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal Settings

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

var currency = message 
Bot.setProperty("currency", + currency, "string")

  var txt = "<b>🔴 Currency Set " + message + "</b>"
  var buttons = [
  [
    { text: "🔙 Back", callback_data: "/w_back" }
  ]
];
Api.editMessageText({
  text: txt,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});
