/*CMD
  command: /spin4
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msgid = User.getProperty("spinMsgId");

var finalText = "<b>✅ Load Complete!</b>\n\nWelcome to the next step.";
var inlkey = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];

Api.editMessageText({
  chat_id: chat.chatid,
  message_id: msgid,
  text: finalText,
  parse_mode: "html",
  reply_markup: { inline_keyboard: inlkey }
});
