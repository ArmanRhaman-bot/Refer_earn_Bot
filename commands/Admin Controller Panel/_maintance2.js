/*CMD
  command: /maintance2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Controller Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var maintenanceStatus = message

  if (maintenanceStatus === "On" || maintenanceStatus === "Off") {
    Bot.setProperty("maintenanceStatus", maintenanceStatus, "string")

    var text =
      "<b>🤖 Bot Maintenance mode set to :</b> <code>" + maintenanceStatus + "</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/a_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

  } else {
    var text =
      "<b>⚠️ Send only:</b> <code>On</code> <b>or</b> <code>Off</code> mode"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/a_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

  }
} else {
  var txt = "*❌ You are not our Bot admin*"
var inlkey = [
  [{ text: "🔙 Back", callback_data: "/a_back" }]];

Api.editMessageText({
    message_id: ont,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
})
}

