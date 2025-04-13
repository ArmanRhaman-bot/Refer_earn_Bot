/*CMD
  command: /earn_menu
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
var support_id = Bot.getProperty(support_id)
if (ban === "Ban") {

var txt = "<i>🚫 You're banned.</i>"
var inlkey = [
  [{ text: "Support Team", url: "t.me/"+support+"" }]]
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

var main_menu_mgs = Bot.getProperty("main_menu_mgs"," 🎉 Welcome to the Refer & Earn Bot! \n\nHey there! 👋 We’re thrilled to have you here. Get ready to earn amazing rewards just by inviting your friends! 🚀  \n\n<b>🔹 Share your referral link  \n🔹 Friends Joined & complete actions  \n🔹 You both get bonuses! 💰</b>\n\nStart sharing now and watch your rewards grow! 🌟 ")
var txt = ""+main_menu_mgs+""
var inlkey = [[{ text: "💰 My Balance", callback_data: "/account" }],[{ text: "👥 Invite Friends", callback_data: "/invite" },{ text: "🎁 Claim Bonus", callback_data: "/bonus" }],[{ text: "🎮 Game's", callback_data: "/game" }],[{ text: "❓ FAQ / Help", callback_data: "/support" },{ text: "🏆 Leaderboard", callback_data: "/leaderboard" }],[{ text: "📊 Statistics", callback_data: "/statistics" }]]
if (!request.data) {
  Api.sendMessage({
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
}
Bot.runCommand("/ref_b")
