/*CMD
  command: /spin_start
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

var gp = Libs.ResourcesLib.userRes("gp");
var botc = Bot.getProperty("botc", "USDT");

if (gp.value() < 0.1) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ Not enough GP to spin. You need 0.1 GP!",
    show_alert: true
  });
  return;
}

gp.remove(0.1);

var reward = parseFloat((Math.random() * 50).toFixed(3));
let balance = Libs.ResourcesLib.userRes("balance");
let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
balance.add(reward);
withdrawable.add(reward);

var result = reward > 0
  ? "🎉 You won <b>" + reward + " " + botc + "</b>!"
  : "🙁 No reward this time. Try again!";

var txt = "<b>🎰 Spin Result</b>\n\n" + result +
"\n\n<b>Your New GP:</b> <code>" + gp.value().toFixed(3) + " GP</code>";

var history = User.getProperty("history");
    if (history === undefined || history === null) {
      history = "";
    }

    history += "\n🌀 " + new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}) + ": " + reward + " " + botc + "\n (spin_rewards) - completed";

    User.setProperty("history", history, "string");
    
    var rewardHis= User.getProperty("rewardHis");
    if (rewardHis === undefined || rewardHis === null) {
      rewardHis = "";
    }

    rewardHis += "\n🌀 " + new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}) + ": " + reward + " " + botc + "\n (spin_rewards) - completed";

    User.setProperty("rewardHis", rewardHis, "string");

var inlkey = [
  [{ text: "🔄 Spin Again", callback_data: "/spin_loading" }],
  [{ text: "🔙 Back", callback_data: "/game" }]
];

Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: inlkey }
});
