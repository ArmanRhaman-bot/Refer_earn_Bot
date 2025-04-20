/*CMD
  command: /w2
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

var wallet = User.getProperty("wallet")
var amount = options.amount
var currency = options.currency
var status = options.status
var userName = user.first_name
var botLink = "@" + bot.name
var alertsChannel = Bot.getProperty("alertsChannel")
var admin = Bot.getProperty("admin")
var balance = Libs.ResourcesLib.userRes("balance")
var totalWithdrawn = Libs.ResourcesLib.anotherChatRes(
  "totalWithdrawn",
  "global"
)
var userID = user.telegramid
var username = "@" + user.username
var withdrawalHistory = User.getProperty("withdrawalHistory")
var withText = ""
var date = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})

if (status === "Confirming") {
  var confirmingText =
    "<b>⁉️ Your withdrawal is processing....\n\n💸 Amount :</b> <code>" +
    amount +
    " " +
    currency +
    "</code>\n<b>🗂️ Address :</b> <code>" +
    wallet +
    "</code>"

  Api.sendMessage({
    text: confirmingText,
    parse_mode: "html"
  })
} else if (status === "Complete") {
  balance.remove(parseFloat(amount))

  totalWithdrawn.add(parseFloat(amount))

  if (withdrawalHistory === undefined) {
    withText =
      withText + "\n👉 Withdrawn : " + amount + " " + currency + " on " + date

    User.setProperty("withdrawalHistory", withText, "string")
  } else {
    withText =
      withdrawalHistory +
      "\n👉 Withdrawn : " +
      amount +
      " " +
      currency +
      " on " +
      date

    User.setProperty("withdrawalHistory", withText, "string")
  }

  var completeText =
    "<b>✅ New withdrawal successful\n\n🧒 User : " +
    userName +
    "\n💸 Amount :</b> <code>" +
    amount +
    " " +
    currency +
    "</code>\n<b>🗂️ Address :</b> <code>" +
    wallet +
    "</code>\n\n<b>✔️ Bot : " +
    botLink +
    "</b>"

  Api.sendMessage({
    text: completeText,
    parse_mode: "html"
  })

  

  Api.sendMessage({
    chat_id: alertsChannel,
    text: completeText,
    parse_mode: "html"
  })

  var adminText =
    "<b>✅ New withdrawal successful\n\n🧒 User : " +
    userName +
    "\n🆔 User ID :</b> <code>" +
    userID +
    "</code>\n<b>👉 Username : " +
    username +
    "\n💸 Amount :</b> <code>" +
    amount +
    " " +
    currency +
    "</code>\n<b>🗂️ Address :</b> <code>" +
    wallet +
    "</code>\n\n<b>✔️ Bot : " +
    botLink +
    "</b>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })
}

