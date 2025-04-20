/*CMD
  command: /ref_b
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

function canRun(){
  var last_run_a = User.getProperty("last_run_a");
  if (!last_run_a) { return true }

  var time_passed = Date.now() - last_run_a;
  
  if (time_passed >= 86400000) {
    return true;
  }

  return false;
}

if (!canRun()) {
  return;
}

User.setProperty("last_run_a", Date.now(), "integer");

var daily_bonus = Bot.getProperty("daily_bonus");
var botc = Bot.getProperty("botc");
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = parseFloat(daily_bonus);

if (referrer) {
  var refid = referrer.telegramid;

  Libs.ResourcesLib.anotherUserRes("withdrawable", refid).add(bonus);
  Libs.ResourcesLib.anotherUserRes("refearn", refid).add(bonus);
  Libs.ResourcesLib.anotherUserRes("balance", refid).add(bonus);
  Libs.ResourcesLib.anotherUserRes("gp", refid).add(0.1);
  Libs.ResourcesLib.anotherUserRes("refcom", refid).add(bonus);

  Bot.sendMessageToChatWithId(refid, "*🎉 Good news!* Your referral has completed all tasks.\n\nYou've earned *" + daily_bonus + " " + botc + "* & *0.1 GP*. Check it in the Referral menu!");
} else {
  Bot.sendMessage();
}
