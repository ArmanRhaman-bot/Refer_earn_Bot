/*CMD
  command: /check_bal2
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
var botc = Bot.getProperty("botc");

    var balance = 
Libs.ResourcesLib.anotherUserRes("balance",message)
var refearn = 
Libs.ResourcesLib.anotherUserRes("refearn",message)
var withdrawable = 
Libs.ResourcesLib.anotherUserRes("withdrawable",message)

    var text =
      "<b>🔍 Searchable UserID:</b> <code>" + message +"</code>\n\n<b>💰 Total Earnings:</b> <code>"+balance.value().toFixed(3)+" "+botc+"</code>\n<b>🔥 Referrals Earnings:</b> <code>"+refearn.value().toFixed(3)+" "+botc+"</code>\n<b>💳 withdrawable Earnings:</b> <code>"+withdrawable.value().toFixed(3)+" "+botc+"</code>"
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

