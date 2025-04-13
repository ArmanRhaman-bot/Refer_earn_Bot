/*CMD
  command: /my_ref
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

let refList = Libs.ReferralLib.getRefList();
var botc = Bot.getProperty("botc");

if (!refList.exist) {
  var txt = "🌟 You haven't referred anyone yet. Share your link to earn!";
  var inlkey = [
    [{ text: "🔙 Back", callback_data: "/invite" }]
  ];

  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}

var users = refList.getUsers();
var messageText = "<b>📊 My Referrals</b>\n\n";
var serial = 1;

for (var ind in users) {
  var user = users[ind];
  var username = user.username ? "@" + user.username : "No Username";
  var balance = Libs.ResourcesLib.anotherUserRes("balance", user.telegramid).value().toFixed(2);
  
  messageText += `<b>${serial++}.</b> ━━━━━━━━━━━
<b>▸ UserID:</b> <code>${user.telegramid}</code>
<b>▸ Username:</b> ${username}
<b>▸ Balance:</b> ${balance} ${botc}\n\n`;
}

var inlkey = [
  [{ text: "🔄 Refresh", callback_data: "/my_ref_up" }],
  [{ text: "🔙 Back", callback_data: "/invite" }]
];

Api.editMessageText({
  message_id: request.message.message_id,
  text: messageText,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
});
