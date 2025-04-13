/*CMD
  command: /master
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var txt = "🪂 Successfully, you passed the Verification process.\n\n🔧 Now, You access menu!"
var inlkey = [
  [{ text: "🔧 Access Menu", callback_data: "/men" }]]
  
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
