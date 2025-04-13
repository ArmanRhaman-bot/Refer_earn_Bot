/*CMD
  command: /add_bal2
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

  var add_bal = message

    Bot.setProperty("add_bal", add_bal, "integer")

    var text =
      "<b>🪪 UserID:</b> <code>" + add_bal +"</code>\n\n<b>💰 Send Balance add Amount</b>"
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
Bot.runCommand("/add_bal3")
