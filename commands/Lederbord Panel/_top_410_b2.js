/*CMD
  command: /top_410_b2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Lederbord Panel

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

  var top_4_10 = message

    Bot.setProperty("top_4_10", top_4_10, "string")

    var text =
      "<b>✅ Top- 4 to 10 Reward Set:</b> <code>" + top_4_10 + " "+botc+"</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/LD_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

