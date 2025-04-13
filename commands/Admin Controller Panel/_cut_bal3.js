/*CMD
  command: /cut_bal3
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

  var cut_bal = Bot.getProperty("cut_bal")
  var botc = Bot.getProperty("botc")
  var withdrawable = Libs.ResourcesLib.anotherUserRes("withdrawable", cut_bal)
var amount = message
Bot.setProperty("amount", amount, "string")
withdrawable.remove(parseFloat(amount))
    var text =
      "<b>💰 Balance remove Successful 💰</b>\n\n<b>🆔 UserID:</b> "+cut_bal+"\n<b>💸 Amount removed:</b> "+message+" "+botc+""
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

var txt = "<b>🔔 Balance Cuted</b>\n\n<b>💰 Amount:</b> -"+amount+" "+botc+""
var inlkey = [
  [{ text: "💸 Balance Chcek", callback_data: "/account" }]]
  
  if (!request.data) {
  Api.sendMessage({
    chat_id: cut_bal,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    chat_id: cut_bal,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
}
