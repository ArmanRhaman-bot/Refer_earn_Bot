/*CMD
  command: /approve
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
    text: "✅ Approved & user notified",
    show_alert: true
  });
Api.sendMessage({
  chat_id: params,
  text: "*🔔 Payment Notifier*\n_ 🎉 Congratulations, Your withdrawal requests successfully paid_",
  parse_mode: "markdown"
})

