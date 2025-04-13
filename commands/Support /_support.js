/*CMD
  command: /support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var support_id = Bot.getProperty(support_id)
var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {

var txt = "<i>🚫 You're banned.</i>"
var inlkey = [
  [{ text: "Support Team", url: "t.me/"+support_id+"" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

var inlkey = [
  [{ text: "🤖 Go to Menu", callback_data: "/earn_menu" }]]
  
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}

var text = "*❓ Hello, how can I help you?*";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/earn_menu" },
    { text: "FAQ 🔍", callback_data: "/faq" }
  ]
];


User.setProperty("myk11", message_id, "string");

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: buttons
  }
});


Bot.runCommand("/support2");
