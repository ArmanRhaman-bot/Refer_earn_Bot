/*CMD
  command: /f_broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Controller Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "<b>Enter Forward Broadcast Message</b>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/a_back" }
  ]
];

User.setProperty("myk11", message_id, "string");

// Edit the message
Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

// Run secondary command
Bot.runCommand("/f_broadcast2");
