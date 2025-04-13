/*CMD
  command: /rewardHis
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Game

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/



var rewardHis = User.getProperty("rewardHis");

if (rewardHis === undefined || rewardHis === null || rewardHis === "") {
  rewardHis = "❌ No games rewards history found.";
}

var txt = "<b>🎮 Rewards History:-</b>\n<blockquote expandable><i>" + rewardHis + "</i></blockquote>";
var inlkey = [
  [
    {
      text: "🔙 Back",
      callback_data: "/game"
    }
  ]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
