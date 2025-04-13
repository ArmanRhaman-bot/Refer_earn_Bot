/*CMD
  command: /ip_verify2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

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
  var ip_verify = message

  if (ip_verify === "On" || ip_verify === "Off") {
    Bot.setProperty("ip_verify", ip_verify, "string")

    var text =
      "<b>🤖 IP Checker mode status set to :</b> <code>" + ip_verify + "</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/l_back" }]]
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
  [{ text: "🔙 Back", callback_data: "/l_back" }]]
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
  [{ text: "🔙 Back", callback_data: "/l_back" }]];

Api.editMessageText({
    message_id: ont,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
})
}

