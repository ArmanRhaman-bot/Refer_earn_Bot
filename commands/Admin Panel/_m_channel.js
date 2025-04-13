/*CMD
  command: /m_channel
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


var text = "<b>✅ Enter your channel username without @</b>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/log_panel" }
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

Bot.runCommand("/m_channel2");
