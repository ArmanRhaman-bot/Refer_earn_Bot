/*CMD
  command: /delete_and_send_final
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

Bot.run({
  command: "/send_final_message",
  delay: 1
});
