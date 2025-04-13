/*CMD
  command: /tm
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



var txt = "<b>💵 Withdraw request</b>\n100 DOGS payout sent successful."
var inlkey = [[{ text: "💰 My Balance", callback_data: "/account" }]
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
