
var text = "✍️ Please send the *gift code* you want to redeem.\n\nJust type the code (e.g., `EID2025`)";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/earn_menu" }
  ]
];

User.setProperty("myk11", message_id, "string");

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: buttons
  }
});

Bot.runCommand("/redeem2");