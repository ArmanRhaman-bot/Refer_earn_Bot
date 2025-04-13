/*CMD
  command: /leaderboard
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lederbord Panel

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

var botc = Bot.getProperty("botc", "No currency set ❌");
var rd = Bot.getProperty("rd", "no date set");
var top_1 = Bot.getProperty("top_1", "0");
var top_2 = Bot.getProperty("top_2", "0");
var top_3 = Bot.getProperty("top_3", "0");
var top_4_10 = Bot.getProperty("top_4_10", "0");

let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
list.order_ascending = false;
list.page = 2;
list.per_page = 10;

var items = list.get();

var msg = '<b>🏆 Referral Leaderboard</b>\n\n';
var inlkey = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];

var customMessage = "📅 Rewards Distribute: <b>"+rd+"</b>";

function getPositionEmoji(position) {
  const emojis = {
    1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣',
    6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣', 10: '🔟'
  };
  return emojis[position] || position + '.'; 
}

function calculateBonus(position) {
  if (position === 1) return parseFloat(top_1) || 0;
  else if (position === 2) return parseFloat(top_2) || 0;
  else if (position === 3) return parseFloat(top_3) || 0;
  else if (position >= 4 && position <= 10) return parseFloat(top_4_10) || 0;
  else return 0;
}

for (var ind in items) {
  var prop = items[ind];
  var position = parseInt(ind) + 1;
  var bonus = calculateBonus(position);
  var positionDisplay = getPositionEmoji(position);
  
  msg += `${positionDisplay} ${prop.user.username}\n` + 
         `<b>👥 Refers »</b> ${prop.value}\n` +
         `<b>🎁 Rewards »</b> ${bonus.toFixed(2)} ${botc}\n\n`;
}

msg += customMessage;

Api.editMessageText({
  message_id: request.message.message_id,
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlkey }
});
