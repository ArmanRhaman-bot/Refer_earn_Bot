Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

User.setProperty("payment_request_step", "awaiting_user_id", "string");

let step = User.getProperty("payment_request_step");

if (step == "awaiting_user_id") {
  User.setProperty("target_user_id", message, "string");
  User.setProperty("payment_request_step", "awaiting_amount", "string");
  var text =
      "<b>💰 Enter the amount you want to request </b>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/giftBox" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});
}
  Bot.runCommand("/req_pay")