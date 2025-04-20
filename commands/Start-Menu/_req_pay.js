Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

let step = User.getProperty("payment_request_step");

if (step == "awaiting_amount") {
  let amount = parseFloat(message);

  if (!amount || amount <= 0) {
    var txt = "❌ Invalid amount. Please enter a valid number.";
    var buttons = [
      [{ text: "🔙 Back", callback_data: "/giftBox" }]
    ];
    Api.editMessageText({
      text: txt,
      message_id: ont,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: buttons
      }
    });
  } else {
    User.setProperty("amount_to_request", amount, "float");
    User.setProperty("payment_request_step", "awaiting_confirmation", "string");

    let target = User.getProperty("target_user_id");
    var txt = "📨 You're about to send a payment request:\n\n" +
              "👤 To User ID: " + target + "\n" +
              "💵 Amount: " + amount + "\n\n" +
              "Do you want to proceed?";
    
    var buttons = [[{ text: "❌ Cancel", callback_data: "/cancel" },{ text: "Confirm ✅", callback_data: "/send_payment_request" }]];
    Api.editMessageText({
      text: txt,
      message_id: ont,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: buttons
      }
    });
  }
} else {
  Bot.sendMessage("⚠️ Unexpected step. Please start the request again.");
}