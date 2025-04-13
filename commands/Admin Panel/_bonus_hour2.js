/*CMD
  command: /bonus_hour2
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

  var bonus_hour = message

    Bot.setProperty("bonus_hour", bonus_hour, "string")

    var text =
      "<b>✅ Bonus hours set:</b> <code>" + bonus_hour +" Hours</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/Iam_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

