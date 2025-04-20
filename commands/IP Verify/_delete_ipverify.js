/*CMD
  command: /delete_ipverify
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


User.setProperty("verifyMsgID", options.result.message_id, "integer")
