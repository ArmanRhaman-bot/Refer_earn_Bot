/*CMD
  command: /wlc_bonus_set2
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
  var wlc_bonus = message

    Bot.setProperty("wlc_bonus", wlc_bonus, "string")

    var text =
      "<b>✅ Welcome Bonus Set:</b><code> " + wlc_bonus + " "+botc+"</code>"
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

