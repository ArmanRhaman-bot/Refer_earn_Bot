/*CMD
  command: delete_verify_msg
  help: 
  need_reply: false
  auto_retry_time: 
  folder: del

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({
  chat_id: chat.chatid,
  message_id: options.result.message_id
});
