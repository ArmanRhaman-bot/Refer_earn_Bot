/*CMD
  command: /distribute_rewards
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function formatDateTimeBD(date) {
  let utc = new Date(date.getTime() + (6 * 60 * 60 * 1000)); // Add 6 hours for BD time
  let yyyy = utc.getFullYear();
  let mm = String(utc.getMonth() + 1).padStart(2, '0');
  let dd = String(utc.getDate()).padStart(2, '0');
  let hh = String(utc.getHours()).padStart(2, '0');
  let min = String(utc.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

let now = new Date();
let nowFormatted = formatDateTimeBD(now);
let rd = Bot.getProperty("rd"); // eg: "2025-04-09 14:00"

if (nowFormatted < rd) {
  var txt = "⏳ Reward distribution time hasn't arrived yet.\nScheduled: <code>" + rd + "</code>\nNow: <code>" + nowFormatted + "</code>";
  var inlkey = [[{ text: "🔙 Back", callback_data: "/log_panel" }]]; 
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
  var inlkey = [[{ text: "🔙 Back", callback_data: "/log_panel" }]]; 
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

    // Notify user personally
    Bot.sendMessageToChatWithId(userData.user.telegramid,
      `🎉 <b>Congratulations!</b>\n\n` +
      `You secured position <b>#${pos}</b> on the referral leaderboard!\n` +
      `You've received <b>+${bonus.toFixed(2)} ${botc}</b> as reward.\n\n` +
      `Keep referring to stay on top!`, { parse_mode: "html" });

    log += `#${pos} → <a href="tg://user?id=${userData.user.telegramid}">${userData.user.first_name}</a> → +${bonus.toFixed(2)} ${botc}\n`;
    totalDistributed += bonus;
  }
}

Bot.setProperty("reward_distributed_" + rd, true, "boolean");
Bot.sendMessage(log + `\n\n<b>Total:</b> ${totalDistributed.toFixed(2)} ${botc}`, { parse_mode: "html" });

