/*CMD
  command: /process
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

// Step 1: Send a temporary processing message
Api.sendMessage({
  chat_id: chat.chatid,
  text: "Text",
  parse_mode: "HTML",
  on_result: "/delete_and_send_final"
});

