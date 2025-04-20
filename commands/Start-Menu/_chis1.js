/*CMD
  command: /chis1
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

var txt = "🗑️🧹"

Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "HTML"
});
Bot.runCommand("/chis")
