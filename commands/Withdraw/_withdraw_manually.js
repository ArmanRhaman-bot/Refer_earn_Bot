/*CMD
  command: /withdraw_manually
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
let withdrawable = Libs.ResourcesLib.userRes("withdrawable")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❗Your Wallet Not set",
  show_alert: true
})
Bot.runCommand("/wallet")
return
}
var minWithdraw = Bot.getProperty("minWithdraw")
var botc = Bot.getProperty("botc")
if (withdrawable.value() < minWithdraw){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "⚠️ Minimum Withdraw is "+minWithdraw+" "+botc+"",
  show_alert: true
})
return
}
Bot.runCommand("/withdraw_manually_2")


