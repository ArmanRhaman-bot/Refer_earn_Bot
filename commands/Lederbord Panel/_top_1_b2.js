/*CMD
  command: /top_1_b2
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

  var top_1 = message

    Bot.setProperty("top_1", top_1, "string")

    var text =
      "<b>✅ Top-1 Reward Set:</b> <code>" + top_1 + " "+botc+"</code>"
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

