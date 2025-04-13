/*CMD
  command: /spin_ready
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

let msg_id = options.result.message_id;
var gp = Libs.ResourcesLib.userRes("gp");
var botc = Bot.getProperty("botc", "USDT");

var txt = "<b>🎰 Spin & Win</b>\n\n" +
"Try your luck and win exciting rewards!\n\n" +
"🎮 <b>Game Info:</b>\n" +
"• Play Cost: <code>0.1 GP</code>\n" +
"• Prize Range: <code>0.00 - 100 " + botc + "</code>\n\n" +
"<b>Your Game Point:</b> <code>" + gp.value().toFixed(3) + " GP</code>\n\n" +
"Click below to Spin the Wheel! Good luck! 🍀";

var inlkey = [
  [{ text: "🎯 SPIN NOW", callback_data: "/spin_start" }],
  [{ text: "🔙 Back", callback_data: "/game" }]
];

Api.editMessageText({
  message_id: msg_id,
  text: txt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: inlkey }
});
