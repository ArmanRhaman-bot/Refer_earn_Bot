/*CMD
  command: /men
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

var support_id = Bot.getProperty("support_id");
var ban = Bot.getProperty(user.telegramid);

if (ban === "Ban") {
  var txt = "<i>🚫 You're banned.</i>";
  var inlkey = [[{ text: "Support Team", url: "https://t.me/" + support_id }]];
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus");

if (maintenanceStatus === "On") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🛠️ Bot is under maintenance, please come back after some time.",
    show_alert: true
  });

  var onText = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  var inlkey = [[{ text: "🤖 Go to Menu", callback_data: "/earn_menu" }]];

  Api.editMessageText({
    message_id: request.message.message_id,
    text: onText,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}

// Regular User Bonus
var wb = User.getProperty("Wb");
if (!wb) {
  var wlc_bonus = Bot.getProperty("wlc_bonus");
  var botc = Bot.getProperty("botc");
  var history = User.getProperty("history") || "";
  var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

  let balance = Libs.ResourcesLib.userRes("balance");
  let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
  balance.add(+wlc_bonus);
  withdrawable.add(+wlc_bonus);

  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🎁 Congratulations, You Received " + wlc_bonus + " " + botc + " As a Welcome Bonus.",
    show_alert: true
  });

  history += "\n🎁 " + date + ": " + wlc_bonus + " " + botc + "\n (welcome_bonus) - completed";

  User.setProperty("history", history, "string");
  User.setProperty("Wb", "claimed", "string");
}

Bot.runCommand("/earn_menu");