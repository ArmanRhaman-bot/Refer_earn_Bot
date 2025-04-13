/*CMD
  command: /withdraw_c
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

var w_mode = Bot.getProperty("w_mode")

if (w_mode === "Auto") {
  Bot.runCommand("/withdraw")
  return
}
Bot.runCommand("/withdraw_manually")
