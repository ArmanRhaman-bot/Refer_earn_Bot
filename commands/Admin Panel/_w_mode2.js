/*CMD
  command: /w_mode2
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
  var w_mode = message

  if (w_mode === "Auto" || w_mode === "Manually") {
    Bot.setProperty("w_mode", w_mode, "string")

    var text =
      "<b>📤 Withdrawal mode status set to :</b> <code>" + w_mode + "</code>"
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
      "<b>⚠️ Send only:</b> <code>Auto</code> <b>or</b> <code>Manually</code> mode"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/a_mode" }]]
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

