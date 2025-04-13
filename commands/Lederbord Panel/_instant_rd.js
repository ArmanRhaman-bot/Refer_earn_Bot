/*CMD
  command: /instant_rd
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

function formatDate(date) {
  let d = new Date(date);
  return d.getFullYear() + '-' + 
         String(d.getMonth() + 1).padStart(2, '0') + '-' + 
         String(d.getDate()).padStart(2, '0');
}

let today = formatDate(Date.now());
let rd = Bot.getProperty("rd");

if (rd !== today) {
  Bot.sendMessage("⏰ Today is not the reward distribution date.\nNext distribution date is: " + rd);
  return;
}

// Already distributed today check (optional)
let already = Bot.getProperty("reward_distributed_" + rd);
if (already === true) {
  Bot.sendMessage("✅ Rewards already distributed today.");
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
let result = "<b>🏆 Rewards Distributed:</b>\n\n";

for (let i in items) {
  let userData = items[i];
  let pos = parseInt(i) + 1;
  let bonus = getBonusByPosition(pos);
  
  if (bonus > 0) {
    let u = Libs.ResourcesLib.anotherUserRes("balance", userData.user.telegramid);
    let w = Libs.ResourcesLib.anotherUserRes("withdrawable", userData.user.telegramid);
    u.add(bonus);
    w.add(bonus);

    result += `🎖 @${userData.user.username} → +${bonus.toFixed(2)} ${botc} (Pos: ${pos})\n`;
    totalDistributed += bonus;
  }
}

Bot.setProperty("reward_distributed_" + rd, true, "boolean");
Bot.sendMessage(result + `\n\n<b>Total Distributed:</b> ${totalDistributed.toFixed(2)} ${botc}`);
