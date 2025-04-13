/*CMD
  command: /wallet2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Wallet 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

if (message.length < 15 || message.length > 50) {
  var txt = "❌ _Your Wallet address is not valid_";
  var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
  Api.editMessageText({
    text: txt,
    message_id: ont,
    parse_mode: "markdown",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
} else {
var wallet = User.setProperty("wallet", message, "string");
  var text = "<b>🎉 Your wallet address is:</b> <code>" + message + "</code>";
  var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
}
