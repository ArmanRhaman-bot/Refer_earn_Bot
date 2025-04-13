/*CMD
  command: storeVerifyMsgID
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IP Verify

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("verifyMsgID", msg_id, "integer");
