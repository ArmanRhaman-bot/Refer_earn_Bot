/*CMD
  command: /delete
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

var messageID = User.getProperty("messageID")

Api.deleteMessage({
  message_id: messageID
})
