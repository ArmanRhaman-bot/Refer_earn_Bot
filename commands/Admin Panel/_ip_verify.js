/*CMD
  command: /ip_verify
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "<b>❓Enter IP Verify mode</b>\n\n<code>On</code> <b>or</b> <code>Off</code>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/l_back" }
  ]
];

User.setProperty("myk11", message_id, "string");

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

Bot.runCommand("/ip_verify2");
