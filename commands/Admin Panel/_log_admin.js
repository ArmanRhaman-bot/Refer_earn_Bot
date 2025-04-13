/*CMD
  command: /log_admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 6791487279
var users = user.telegramid
if (users === admin) {
  Bot.setProperty("admin", admin, "integer")
  Bot.runCommand("/log_panel")
} else {
var txt = "*❌ You are not our Bot admin*"
var inlkey = [
  [{ text: "🔙 Back", callback_data: "/panel" }]];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
})}
