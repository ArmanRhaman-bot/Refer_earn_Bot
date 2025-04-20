/*CMD
  command: /new_u_reset
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Controller Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Reset Done",
  show_alert: true
})
Bot.runCommand("/admin_controller")
let newu = Libs.ResourcesLib.anotherChatRes("newu", "global");
newu.remove(parseFloat(1));
