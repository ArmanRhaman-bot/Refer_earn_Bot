/*CMD
  command: /p_api2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal Settings

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

  var setPayoutApiKey = message

    Bot.setProperty("setPayoutApiKey", setPayoutApiKey, "string")
    Libs.OxaPayLib.setPayoutApiKey(setPayoutApiKey)

    var text =
      "<b>🔧 Payout API Seted:</b> <code>" + setPayoutApiKey + "</code>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/w_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

