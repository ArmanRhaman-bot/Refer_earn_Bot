/*CMD
  command: /cut_bal2
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

  var cut_bal = message

    Bot.setProperty("cut_bal", cut_bal, "integer")

    var text =
      "<b>🪪 UserID:</b> <code>" + cut_bal +"</code>\n\n<b>💰 Send Balance remove amount</b>"
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
Bot.runCommand("/cut_bal3")
