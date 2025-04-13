/*CMD
  command: /rep_can
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support 

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
}
  )
    }
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🗑️",
show_alert: false })
