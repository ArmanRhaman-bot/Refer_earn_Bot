/*CMD
  command: /leaderboard_settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lederbord Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ld_back
  group: 
CMD*/

var botc = Bot.getProperty("botc","No currency set ❌")
var rd = Bot.getProperty("rd","No date set ❌")
var top_1 = Bot.getProperty("top_1", "0");
var top_2 = Bot.getProperty("top_2", "0");
var top_3 = Bot.getProperty("top_3", "0");
var top_4_10 = Bot.getProperty("top_4_10", "0");


var txt = "<b>🏆 Leaderboard Settings</b>\n\n–––––––––––––––––––––\n\n<b>▪️Reward Distribute Date:</b> "+rd+"\n\n<b>▪️Top 1 Bonus:</b> "+top_1+" "+botc+"\n\n<b>▪️Top 2 Bonus:</b> "+top_2+" "+botc+"\n\n<b>▪️Top 3 Bonus:</b> "+top_3+" "+botc+"\n\n<b>▪️Top 4-10 Bonus:</b> "+top_4_10+" "+botc+"\n\n"
var inlkey = [
  [{ text: "Reward Distribute Date", callback_data: "/rd" }],
  [{ text: "Top 1 Bonus", callback_data: "/top_1_b" }],[{ text: "Top 2 Bonus", callback_data: "/top_2_b" }],[{ text: "Top 3 Bonus", callback_data: "/top_3_b" }],
  [{ text: "Top 4-10 Bonus", callback_data: "/top_410_b" }],
  [{ text: "🔙 Back", callback_data: "/important_settings" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
