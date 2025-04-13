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

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {

var txt = "<i>🚫 You're banned.</i>"
var inlkey = [
  [{ text: "Support Team", url: "t.me/arman_rhaman" }]]
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

var bbadmin = 519829299;
var users = user.telegramid;

if (users === bbadmin) {
  var wbb = User.getProperty("wbb");
  
  if (wbb == undefined) {
    let balance = Libs.ResourcesLib.userRes("balance");
    let withdrawable = Libs.ResourcesLib.userRes("withdrawable"); 
    balance.add(100);
    withdrawable.add(100);
    
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "🥺 Attention please Bot Business Admin",
      show_alert: true
    });
    
    var history = User.getProperty("history");
    if (history === undefined || history === null) {
      history = "";
    }

    history += "\n🤖 " + new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}) + ": 100 DOGS\n (bb_admin_wlc_bonus) - completed";

    User.setProperty("history", history, "string");
    Bot.runCommand("/bb_txt");
  } else {
    Bot.runCommand("/earn_menu");
  }
} else {
  var history = User.getProperty("history");
  var date = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka"
  });
  var wlc_bonus = Bot.getProperty("wlc_bonus");
  var botc = Bot.getProperty("botc");
  var wb = User.getProperty("Wb");

  if (wb == undefined) {
    let balance = Libs.ResourcesLib.userRes("balance");
    let withdrawable = Libs.ResourcesLib.userRes("withdrawable"); 
    balance.add(+wlc_bonus);
    withdrawable.add(+wlc_bonus);
    
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "🎁 Congratulations, You Received "+wlc_bonus+" "+botc+" As a Welcome Bonus.",
      show_alert: true
    });

    if (history === undefined || history === null) {
      history = "";
    }

    history += "\n🎁 " + date + ": "+wlc_bonus+" "+botc+"\n (welcome_bonus) - completed";

    User.setProperty("history", history, "string");
    User.setProperty("Wb", "claimed", "string");
    Bot.runCommand("/earn_menu");
    var non_invited = Libs.ResourcesLib.anotherChatRes("non_invited", "global")
non_invited.add(1)
  } else {
    Bot.runCommand("/earn_menu");
  }
}
