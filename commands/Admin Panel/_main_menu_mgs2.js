/*CMD
  command: /main_menu_mgs2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

  var main_menu_mgs = message

    Bot.setProperty("main_menu_mgs", main_menu_mgs, "string")

    var text =
      "<b>✅ Main Menu Message Set:</b> <blockquote expandable>" + main_menu_mgs + "</blockquote>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/l_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

