/*CMD
  command: /u_giftcode
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "🧧 If you want to generate a gift code, then generate the code by sending the command below as instructed.\n\n<b>ex:</b> <code>/gift CODE AMOUNT MAX_CLAIMS</code>\n<b>ex:</b> <code>/gift GIFT2025 1 10</code>";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/giftBox" }
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


