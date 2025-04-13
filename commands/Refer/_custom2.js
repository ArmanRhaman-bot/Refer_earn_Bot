/*CMD
  command: /custom2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

  var invLink = User.setProperty("invLink", message, "string")
  
    var text =
      "<b>⛓️‍💥 Your New Custom Link:</b> <code>https://t.me/" + bot.name +"?start=ref_" + invLink + "</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/invite" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

