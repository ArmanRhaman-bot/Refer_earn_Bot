/*CMD
  command: /botc2
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
  var botc = message

    Bot.setProperty("botc", botc, "string")

    var text =
      "<b>✅ Welcome Bonus Set:</b><code> "+botc+"</code>"
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

