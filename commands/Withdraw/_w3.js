/*CMD
  command: /w3
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

if (!options) {
  return
}

var result = options.result
var amount = params
var trackID = options.trackId
var failed = options.message

if (result === 100) {
  var processingText =
    "<b>⁉️ Your withdrawal of</b> <code>" +
    amount +
    "</code> <b>is submitting.\n\n👉 Track ID :</b> <code>" +
    trackID +
    "</code>"

  Api.sendMessage({
    text: processingText,
    parse_mode: "html"
  })
} else {
  var failedText = "<b>☹️ Withdrawal failed :</b>\n<i>" + failed + "</i>"

  Api.sendMessage({
    text: failedText,
    parse_mode: "html"
  })
  
  
}

var status = options.status

if (status === "complete") {
  var text = "<b>✔️ Your withdrawal is successful.</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })
}

