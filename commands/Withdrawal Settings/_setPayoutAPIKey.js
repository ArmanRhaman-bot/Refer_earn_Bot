/*CMD
  command: /setPayoutAPIKey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal Settings
  answer: Api

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var payoutAPI = message

  Bot.setProperty("payoutAPI", payoutAPI, "string")

  Libs.OxaPayLib.setPayoutApiKey(payoutAPI)

  var text = "<b>🗝️ Payout API set to :</b> <code>" + payoutAPI + "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })


} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

