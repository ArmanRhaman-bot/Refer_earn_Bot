/*CMD
  command: /withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var message_id = request.message.message_id;
var support_id = Bot.getProperty(support_id)
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

var withdrawStatus = Bot.getProperty("withdrawStatus")

if (withdrawStatus === "Off") {
  var txt = "<i>🏧 Withdrawal is off now, please come back later.</i>"
var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}

var minWithdraw = Bot.getProperty("minWithdraw")
var botc = Bot.getProperty("botc")


var withdrawable = Libs.ResourcesLib.userRes("withdrawable")

if (withdrawable.value() < minWithdraw) {
  var lowText =
    "<i>⚠️ You haven't withdrawal balance is "+minWithdraw+" "+botc+"</i>"

  var inlkey = [
  [{ text: "🔙 Back", callback_data: "/account" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: lowText,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}

var txt = "💰 Send the "+botc+" amount which you want to withdraw."
var inlkey = [
  [{ text: "🔙 Back", callback_data: "/account" }]]
  
  User.setProperty("myk11", message_id, "string");

Api.editMessageText({
  text: txt,
  message_id: message_id,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});


Bot.runCommand("/withdraw2")
