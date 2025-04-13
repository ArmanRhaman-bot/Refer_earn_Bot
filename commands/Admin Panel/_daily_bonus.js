/*CMD
  command: /daily_bonus
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


var text = "<b>✅ Enter Daily Bonus amount</b>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/Iam_back" }
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

Bot.runCommand("/daily_bonus2");
