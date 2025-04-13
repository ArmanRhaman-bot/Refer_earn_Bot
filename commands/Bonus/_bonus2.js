/*CMD
  command: /bonus2
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

var daily_bonus = Bot.getProperty("daily_bonus","Bonus currently not set ❌")
var botc = Bot.getProperty("botc")
var bonus_hour = Bot.getProperty("bonus_hour","Not set ❌")
var daily_bonus2 = ""+daily_bonus+""
var tipsArray = ["🔗 Share your link daily – more clicks = more rewards! 💰", "⏰ Claim daily rewards – streaks give 2X bonuses! ⚡", "📱 Pin your referral link in bio/profile for passive invites! 📌", "💬 Explain benefits when sharing – friends join faster! 🤝","🏆 Top referrers win extra prizes weekly – compete! 🥇","🔄 Re-share old posts – new users might’ve missed it! ♻️"];

var randomtps = tipsArray[Math.floor(Math.random() * tipsArray.length)];


function canRun(){
  var Llast_run_at = User.getProperty("Llast_run_at");
  if(!Llast_run_at){ return true }
  
  var minutes = (Date.now() - Llast_run_at) /1000/60;
  
 var minutes_in_day = bonus_hour * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
 var txt = "<b>💰 Bonus collected!</b>\n\nCome back in <b>"+wait_hours+" hour's "+wait_minutes+"</b> minutes for your next reward!\n\n<b>🔥 Pro Tip:</b> "+randomtps+""
 var inlkey = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
 Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("Llast_run_at", Date.now(), "integer");

let gp = Libs.ResourcesLib.userRes("gp")
var checkin = Libs.ResourcesLib.userRes("checkin")
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawable = Libs.ResourcesLib.userRes("withdrawable")
balance.add(+daily_bonus2)
withdrawable.add(+daily_bonus2)
checkin.add(1)
gp.add(0.1)
var txt = "<b>🎉 Daily Bonus Claimed! ("+checkin.value()+"/7 🗓️)</b>\n\n<b>💰 "+daily_bonus2+" "+botc+"</b> added to your balance!\n\n<blockquote>📈 Keep inviting friends to earn more.\n🔄 Come back tomorrow for another reward!</blockquote>\n\n<blockquote>🗓️ Continually Daily check-in 7 Days & get Special Bonus</blockquote>\n\n<b>🔥 Pro Tip:</b> "+randomtps+""
var inlkey = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});

