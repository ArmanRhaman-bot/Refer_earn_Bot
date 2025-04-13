/*CMD
  command: /panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var txt = "At first login as a admin"
var inlkey = [[{ text: "🔑 Login as a admin", callback_data: "/log_admin" }]]
if (!request.data) {
  Api.sendMessage({
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
  })
}

