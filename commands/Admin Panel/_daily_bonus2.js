/*CMD
  command: /daily_bonus2
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
var botc = Bot.getProperty("botc");

  var daily_bonus = message

    Bot.setProperty("daily_bonus", daily_bonus, "string")

    var text =
      "<b>✅ Daily Bonus Set:</b> <code>" + daily_bonus + " "+botc+"</code>"
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

