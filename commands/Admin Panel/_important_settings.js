/*CMD
  command: /important_settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /iam_back
  group: 
CMD*/

var daily_bonus = Bot.getProperty("daily_bonus","Bonus currently not set ❌")
var botc = Bot.getProperty("botc","No currency set ❌")
var bonus_hour = Bot.getProperty("bonus_hour","Not set ❌")
var refbonus = Bot.getProperty("refbonus","Referral Bonus not set ❌")


var txt = "<b>💥 Welcome to bot admin panel</b>\n\n–––––––––––––––––––––\n\n▪️<b>Daily Bonus:</b> "+daily_bonus+" "+botc+"\n\n<b>▪️ Bonus Hours: </b> "+bonus_hour+"\n\n▪️<b>Referral Bonus:</b> "+refbonus+" "+botc+""
var inlkey = [
  [{ text: "Daily Bonus Set", callback_data: "/daily_bonus" }],
  [{ text: "Bonus Hour's Set", callback_data: "/bonus_hour" }],[{ text: "Invite Bonus Set", callback_data: "/refbonus_set" }],
  [{ text: "🏆 Leaderboard Settings", callback_data: "/leaderboard_settings" }],[{ text: "📤 Withdrawal Settings", callback_data: "/withdrawal_settings" }],
  [{ text: "🔙 Back", callback_data: "/log_panel" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
