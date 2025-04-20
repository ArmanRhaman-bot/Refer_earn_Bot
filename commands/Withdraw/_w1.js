/*CMD
  command: /w1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var withdrawalStatus = Bot.getProperty("withdrawalStatus")

if (withdrawalStatus === "Off") {
  var offText = "<i>🏧 Withdrawal is off now, please come back later.</i>"

  Api.sendMessage({
    text: offText,
    parse_mode: "html"
  })
  return
}

var wallet = User.getProperty("wallet")
var amount = User.getProperty("amount")
let options = {
  url: "api/send",
  fields: {
    amount: amount,
    currency: "DOGS",
    address: wallet,
    onCallback: "/w2"
  },
  onSuccess: "/w3 " + amount + " DOGS"
}

Libs.OxaPayLib.apiCall(options)

