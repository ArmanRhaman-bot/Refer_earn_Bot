/*CMD
  command: /support_id2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Controller Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

var support_id = message 
Bot.setProperty("support_id", "@" + support_id, "string")

  var txt = "<b>📞 Support ID set to : @" + message + "</b>"
  var buttons = [
  [
    { text: "🔙 Back", callback_data: "/a_back" }
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
