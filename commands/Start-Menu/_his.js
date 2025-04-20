/*CMD
  command: /his
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

let history = User.getProperty("history") || "";

if (!history || history.trim() === "") {
  history = "❌ No transaction history found.";
} else {
  
  let lines = history.trim().split("\n");
  let last20 = lines.slice(-20);
  history = last20.join("\n");
}

var txt = "<b>📄 Latest 10 Transactions History:</b>\n<blockquote expandable>" + history + "</blockquote>";
var inlkey = [
  [
    {
      text: "🗑️ Clear History",
      callback_data: "/chis1"
    }
  ],
  [
    {
      text: "🔙 Back",
      callback_data: "/account"
    }
  ]
];


if (request && request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
  });
} else {
  Bot.sendMessage(txt, { parse_mode: "HTML", reply_markup: { inline_keyboard: inlkey } });
}
