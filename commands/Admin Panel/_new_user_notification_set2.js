/*CMD
  command: /new_user_notification_set2
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

  var n_notifaction = message

    Bot.setProperty("n_notifaction", n_notifaction, "string")

    var text =
      "<b>🔔 Notification picker channel or admin set :</b> <code>" + n_notifaction + "</code>"
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

