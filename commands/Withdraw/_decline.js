/*CMD
  command: /decline
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

if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}
Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ Declined & user notified",
    show_alert: true
  });
Api.sendMessage({
  chat_id: params,
  text: "*🔔 Payment Notifier*\n_❌ Sorry, Your withdrawal requests unfortunately declined_",
  parse_mode: "markdown"
})

