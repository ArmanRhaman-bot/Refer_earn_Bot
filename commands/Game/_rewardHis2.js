/*CMD
  command: /rewardHis2
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



var rewardHis = User.setProperty("rewardHis", [], "json");

if (rewardHis === undefined || rewardHis === null || rewardHis === "") {
  rewardHis = "🧹 Rewards history cleared";
}

var txt = "<b>🎮 Rewards History:-</b>\n\n<blockquote expandable><i>" + rewardHis + "</i></blockquote>";
var inlkey = [
[
    {
      text: "🗑️ Cleaned History",
      callback_data: "/rewardHis1"
    }
  ],
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
