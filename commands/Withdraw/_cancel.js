/*CMD
  command: /cancel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var txt = "<b>❌ canceled</b>"

Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "HTML"
});
Bot.runCommand("/earn_menu")
