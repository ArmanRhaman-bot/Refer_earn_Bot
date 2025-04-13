/*CMD
  command: /game
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


let balance = Libs.ResourcesLib.userRes("balance")
let refearn = Libs.ResourcesLib.userRes("refearn")
let withdrawable = Libs.ResourcesLib.userRes("withdrawable")
let gp = Libs.ResourcesLib.userRes("gp")

var botc = Bot.getProperty("botc")


var txt = "<b>🎮 Welcome to the Earn & Play Zone!</b>\n\nGet ready for a fun ride of earning and gaming! Choose your game below and start winning exciting rewards! 🏆\n\n<blockquote><b>🌀 Spin & Win:</b> Try your luck and win some awesome prizes!</blockquote>\n<blockquote><b>🧠 Trivia Challenge:</b> Test your knowledge and claim your victory!</blockquote>\n\n<blockquote><b>Your Game Point:</b> <code>"+gp.value().toFixed(3)+"</code> <b>GP</b></blockquote>\n\n<b>🏆 Win Rewards:</b>\n<blockquote><b>🌀 Spin & Win:</b>\nPlay: - 0.1 GP\nWin: 0.0 - 100 "+botc+"</blockquote>\n<blockquote><b>🧠 Trivia Challenge:</b>\nPlay: - 0.1 GP\nWin: 100 "+botc+"</blockquote>\n\n<b>Play Now and Earn Bonuses! 💰</b>";

var inlkey = [
[{ text: "🎮 Game Rewards History", callback_data: "/rewardHis" }],
  [{ text: "🌀 Spin & Win", callback_data: "/spin_loading" }, { text: "🧠 Trivia Challenge", callback_data: "/trivia" }],
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
