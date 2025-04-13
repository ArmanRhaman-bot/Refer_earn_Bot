/*CMD
  command: /my_ref_up
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

var txt = "📊"

Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "HTML"
});
Bot.runCommand("/my_ref")
