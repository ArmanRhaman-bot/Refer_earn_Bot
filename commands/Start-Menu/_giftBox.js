/*CMD
  command: /giftBox
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

var txt = "🎁 Select the button you want to use. "
var inlkey = [[{ text: "🦋 Invoice", callback_data: "/invoice" }],
  [{ text: "✨ Create Gift Code", callback_data: "/u_giftcode" }],
  [{ text: "🧧 Redeem Gift Code", callback_data: "/redeem" }],
[{ text: "🔙 Back", callback_data: "/earn_menu" }]
];
Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
});
