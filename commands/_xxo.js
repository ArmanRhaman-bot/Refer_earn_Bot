/*CMD
  command: /xxo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let wallet = User.getProperty("wallet");
var tx = "https://tonscan.org/address/" + wallet;

var keys = [[
  { text: "🔎 View Transaction", url: tx },
  { text: "✍️ Register", url: "https://t.me/arman_rhaman" }
]];

Api.sendMessage({
  text: "<b>📤 New withdrawal Transaction</b>\n\n<blockquote>▸ Receiver: ⏤‌‌‌‌𝗖𝗥𝗬𝗣 𝗗𝗘𝗩\n▸ UserID: 6791487279\n▸ Amount: 100 DOGS\n▸ Address: "+wallet+"\n▸ Time: 4/10/2025, 10:58:09 PM</blockquote>\n------------------------------------\n✅ Status: <b>Confirmed</b>",
  parse_mode: "html",
  reply_markup: { inline_keyboard: keys }
});

