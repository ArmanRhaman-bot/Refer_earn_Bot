/*CMD
  command: /vd
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



var txt = "Please verify your device to continue using the bot"
var inlkey = [[{ text: "✅ Verify Device", callback_data: "/verify_device" }]]
if (!request.data) {
  Api.sendMessage({
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
}
