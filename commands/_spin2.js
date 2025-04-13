/*CMD
  command: /spin2
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

let msgid = options.result.message_id;
User.setProperty("spinMsgId", msgid, "integer");

Api.editMessageText({
  chat_id: chat.chatid,
  message_id: msgid,
  text: "*⏳ Loading... 25%*",
  parse_mode: "Markdown"
});

Bot.runCommand("/spin3");
