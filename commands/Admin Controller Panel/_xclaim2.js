/*CMD
  command: /xclaim2
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

var botclaim = message

    Bot.setProperty("botclaim", botclaim, "string")
    
    var text =
      "<b>☠️ Bot Sent: "+botclaim+"</b>"
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

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})


