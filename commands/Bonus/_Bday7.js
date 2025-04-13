/*CMD
  command: /Bday7
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bonus

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var history = User.getProperty("history");
var daily_bonus = Bot.getProperty("daily_bonus");
var botc = Bot.getProperty("botc");
var daily_bonus2 = ""+daily_bonus+""
var day7 = daily_bonus2 * 7
var date = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Dhaka"
});
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawable = Libs.ResourcesLib.userRes("withdrawable")
var checkin = Libs.ResourcesLib.userRes("checkin")
let gp = Libs.ResourcesLib.userRes("gp")

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🎉 7-Day Streak Unlocked!\n🔥 Reward: "+day7+" "+botc+" ",  show_alert: true
})
if (history === undefined || history === null) {
    history = "";
  }

  history += "\n🗓️ " + date + ": "+day7+" "+botc+"\n (7 Days Check-in Bonus) - completed";

  User.setProperty("history", history, "string");
balance.add(+daily_bonus)
withdrawable.add(+daily_bonus)
checkin.add(-7)
gp.add(0.5)

Bot.runCommand("/earn_menu")
