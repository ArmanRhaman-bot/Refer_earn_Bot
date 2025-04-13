/*CMD
  command: /rd2
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

  var rd = message

    Bot.setProperty("rd", rd, "string")

    var text =
      "<b>✅ Top-1 Reward Set:</b> <code>" + rd + "</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/log_panel" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

