/*CMD
  command: /add_bal3
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

  var add_bal = Bot.getProperty("add_bal")
  var botc = Bot.getProperty("botc")
  var withdrawable = Libs.ResourcesLib.anotherUserRes("withdrawable", add_bal)
var amount = message
Bot.setProperty("amount", amount, "string")
withdrawable.add(parseFloat(amount))
    var text =
      "<b>💰 Balance Add Successful 💰</b>\n\n<b>🆔 UserID:</b> "+add_bal+"\n<b>💸 Amount:</b> "+message+" "+botc+""
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

var txt = "<b>🔔 Balance Deposited</b>\n\n<b>💰 Amount:</b> "+amount+" "+botc+""
var inlkey = [
  [{ text: "💸 Balance Chcek", callback_data: "/account" }]]
  
  if (!request.data) {
  Api.sendMessage({
    chat_id: add_bal,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    chat_id: add_bal,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
}
