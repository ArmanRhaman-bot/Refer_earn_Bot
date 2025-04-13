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

// Save message_id to delete later
User.setProperty("verifyMsgID", options.result.message_id, "integer")
