/*CMD
  command: /top_2_b
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lederbord Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "<b>✅ Enter Top-2 Reward amount</b>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/LD_back" }
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

Bot.runCommand("/top_2_b2");
