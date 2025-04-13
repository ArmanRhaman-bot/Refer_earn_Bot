/*CMD
  command: /support2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

if (message.length < 5 || message.length > 10000) {
  var text = "❗Please describe in detail what the problem is or what help you need. Don't leave a short message, write in detail.\n\n❌ Avoid Hi, Hello text";
  var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
}else{
var support = message
var admin = admin
var userName = user.first_name
var userID = user.telegramid
var username = "@" + user.username
var userText =
  "<b>📞 Your message sent to our support team please wait few times, Thank You.\n\n📝 Your Message:</b>\n<blockquote expandable>" +
  support +
  "</blockquote>"
var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
Api.editMessageText({
    text: userText,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: buttons
    }
  });

Bot.setProperty("replyID", userID, "integer")

var adminText =
  "<b>🆕 New support message 📞\n\n🧑 User : " +
  userName +
  "\n👉 Username : " +
  username +
  "\n🆔 User ID :</b> <code>" +
  userID +
  "</code>\n\n<b>📞 Support Message :</b>\n<blockquote expandable>" +
  support +
  "</blockquote>"
var button = [[{text: "Reply to " + userName,
      callback_data: "/reply " + userID}]]

if (!request.data) {
  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: button }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    chat_id: admin,
    text: adminText,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: button }
  })
     }
        }
