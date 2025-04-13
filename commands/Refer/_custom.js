/*CMD
  command: /custom
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "<b>⚙️ Regenerate a custom referral code</b>\n\nAllowed Word/Number\nNumber Length: 3-7\nWord Length: 3-5\n\n<blockquote>make a short custom code for attractive referrals</blockquote>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/invite" }
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

Bot.runCommand("/custom2");
