/*CMD
  command: /m_channel2
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

  var m_channel = message

    Bot.setProperty("m_channel", m_channel, "string")

    var text =
      "<b>✅ Joining channel set :</b> <code>@" + m_channel + "</code>"
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

