/*CMD
  command: /reply2
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

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");
var admin = Bot.getProperty("admin")

var userName = user.first_name
var userID = user.telegramid
var username = "@" + user.username

if (userID === admin) {
  var replyID = Bot.getProperty("replyID")
  var reply = message
  var userText = "<b>📞 Reply from support team\n\n👉 Reply :</b> <blockquote expandable>" + reply + "</blockquote>\n\n☺️ We hope you are very satisfied with our reply. If you do not get the correct answer in the reply, please try again. Thank you."

Api.sendMessage({
    chat_id: replyID,
    text: userText,
    parse_mode: "html"
  })
  var txt = "<b>You Replied:</b>\n\n<blockquote expandable>"+message+"</blockquote>"
  var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
Api.editMessageText({
    text: txt,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: buttons
    }
  });
}else{
var txt = "Who are you 😒"
  var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]]
Api.editMessageText({
    text: txt,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: buttons
    }
  })};
