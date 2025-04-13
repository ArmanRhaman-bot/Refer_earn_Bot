/*CMD
  command: /unban2
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

  var unbanID = message

    Bot.setProperty(unbanID, "Unban")

    var text =
      "<b>♥️ UnBaned UserID:</b> <code>" + unbanID +"</code>"
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

