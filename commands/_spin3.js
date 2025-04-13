/*CMD
  command: /spin3
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

let msgid = User.getProperty("spinMsgId");

Api.editMessageText({
  chat_id: chat.chatid,
  message_id: msgid,
  text: "*⏳ Loading... 60%*",
  parse_mode: "Markdown"
});

Bot.runCommand("/spin4");
