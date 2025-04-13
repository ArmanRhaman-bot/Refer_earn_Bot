/*CMD
  command: /account
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

var support_id = Bot.getProperty("support_id")
var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {

var txt = "<i>🚫 You're banned.</i>"
var inlkey = [
  [{ text: "Support Team", url: "t.me/"+support_id+"" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🛠️ Bot is under maintenance, please come back after some time.",
  show_alert: true
})
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

var inlkey = [
  [{ text: "🤖 Go to Menu", callback_data: "/earn_menu" }]]
  
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}


let balance = Libs.ResourcesLib.userRes("balance")
let refearn = Libs.ResourcesLib.userRes("refearn")
let withdrawable = Libs.ResourcesLib.userRes("withdrawable")

var wallet = User.getProperty("wallet","wallet not connected")
var botc = Bot.getProperty("botc")
var minWithdraw = Bot.getProperty("minWithdraw","0")
var withd = Libs.ResourcesLib.userRes("withd")
var dp = Libs.ResourcesLib.userRes("dp")

let withdrawableAmount = withdrawable.value();
let withdrawPercentage = (withdrawableAmount / minWithdraw) * 100;

if (withdrawPercentage > 100) {
  withdrawPercentage = 100;
}


let withdrawText = "`" + withdrawableAmount.toFixed(3) + "\n    "+botc+"` (`"+minWithdraw+" "+botc+"/" + withdrawPercentage.toFixed(0) + "%`)";

var txt = "*👤 Your account status*\n\n" +
          "*• 🆔 Your ID →* `" + user.telegramid + "`\n" +
          "*• 🔗 Your username →* `" + user.username + "`\n" +
          "*• 💰 Your Total Balance →* `" + balance.value().toFixed(3) + " "+botc+"`\n" +
          "*• 🚀 Referral Earnings →* `" + refearn.value().toFixed(3) + " "+botc+"`\n" +
          "*• 📤 Withdrawable Balance:* " + withdrawText + "\n\n*📌 Minimum Withdraw: "+minWithdraw+" "+botc+"*";

var inlkey = [
  [{ text: "📄 Transaction History", callback_data: "/his" }],
  [{ text: "📤 Withdraw", callback_data: "/withdraw_c" }, { text: "🏦 Update Wallet", callback_data: "/wallet" }],
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
});
