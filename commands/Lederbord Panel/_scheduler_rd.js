/*CMD
  command: /scheduler_rd
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

var rd = Bot.getProperty("rd");  // eg. "2025-04-10"
var today = new Date().toISOString().slice(0, 10);  // format: "YYYY-MM-DD"

// Already distributed today?
if (User.getProperty("rewarded_"+today)) return;

if (rd === today) {
  var top_1 = parseFloat(Bot.getProperty("top_1", "0"));
  var top_2 = parseFloat(Bot.getProperty("top_2", "0"));
  var top_3 = parseFloat(Bot.getProperty("top_3", "0"));
  var top_4_10 = parseFloat(Bot.getProperty("top_4_10", "0"));
  var botc = Bot.getProperty("botc", "USDT");

  let list = Libs.ReferralLib.getTopList();
  list.order_by = "integer_value";
  list.order_ascending = false;
  list.page = 2;
  list.per_page = 10;

  var items = list.get();
  var rewardsLog = "";

  for (var i in items) {
    let pos = parseInt(i) + 1;
    let userID = items[i].user.telegramid;
    let reward = 0;

    if (pos === 1) reward = top_1;
    else if (pos === 2) reward = top_2;
    else if (pos === 3) reward = top_3;
    else if (pos >= 4 && pos <= 10) reward = top_4_10;

    if (reward > 0) {
      let res = Libs.ResourcesLib.anotherUserRes("balance", userID);
      res.add(reward);

      let wd = Libs.ResourcesLib.anotherUserRes("withdrawable", userID);
      wd.add(reward);

      let history = User.getProperty("history_" + userID) || "";
      history += `\n🏆 ${today}: ${reward} ${botc} (Leaderboard Reward #${pos})`;
      User.setProperty("history_" + userID, history, "string");

      rewardsLog += `#${pos} → <a href="tg://user?id=${userID}">${items[i].user.first_name}</a> → ${reward} ${botc}\n`;
    }
  }

  // Final log message
  Bot.sendMessage(`<b>✅ Referral Rewards Distributed</b>\n\n${rewardsLog}`, { parse_mode: "html" });

  // Set reward done flag
  User.setProperty("rewarded_" + today, true, "boolean");
}
