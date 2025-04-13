/*CMD
  command: /distribute_rewards2
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

function formatDateTime(date) {
  let d = new Date(date);
  let yyyy = d.getFullYear();
  let mm = String(d.getMonth() + 1).padStart(2, '0');
  let dd = String(d.getDate()).padStart(2, '0');
  let hh = String(d.getHours()).padStart(2, '0');
  let min = String(d.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

let now = new Date();
let nowFormatted = formatDateTime(now);
let rd = Bot.getProperty("rd");

if (nowFormatted < rd) {
  var txt = "⏳ Reward distribution time hasn't arrived yet.\nScheduled time: <code>" + rd + "</code>";
var inlkey = [[{ text: "🔙 Back", callback_data: "/log_panel" }]
]; 
Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
});
  return;
}

if (Bot.getProperty("reward_distributed_" + rd)) {

var txt = "✅ Rewards already distributed.";
var inlkey = [[{ text: "🔙 Back", callback_data: "/log_panel" }]
]; 
Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
});
  return;
}

let botc = Bot.getProperty("botc", "USDT");
let top_1 = parseFloat(Bot.getProperty("top_1", "0"));
let top_2 = parseFloat(Bot.getProperty("top_2", "0"));
let top_3 = parseFloat(Bot.getProperty("top_3", "0"));
let top_4_10 = parseFloat(Bot.getProperty("top_4_10", "0"));

function getBonusByPosition(pos) {
  if (pos === 1) return top_1;
  if (pos === 2) return top_2;
  if (pos === 3) return top_3;
  if (pos >= 4 && pos <= 10) return top_4_10;
  return 0;
}

let list = Libs.ReferralLib.getTopList();
list.order_by = "integer_value";
list.order_ascending = false;
list.page = 2;
list.per_page = 10;

let items = list.get();
let totalDistributed = 0;
let log = "<b>🏆 Referral Rewards Distributed:</b>\n\n";

for (let i in items) {
  let userData = items[i];
  let pos = parseInt(i) + 1;
  let bonus = getBonusByPosition(pos);

  if (bonus > 0) {
    let u = Libs.ResourcesLib.anotherUserRes("balance", userData.user.telegramid);
    let w = Libs.ResourcesLib.anotherUserRes("withdrawable", userData.user.telegramid);
    u.add(bonus);
    w.add(bonus);

    log += `#${pos} → <a href="tg://user?id=${userData.user.telegramid}">${userData.user.first_name}</a> → +${bonus.toFixed(2)} ${botc}\n`;
    totalDistributed += bonus;
  }
}

Bot.setProperty("reward_distributed_" + rd, true, "boolean");
Bot.sendMessage(log + `\n\n<b>Total:</b> ${totalDistributed.toFixed(2)} ${botc}`, { parse_mode: "html" });
