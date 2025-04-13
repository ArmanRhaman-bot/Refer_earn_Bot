/*CMD
  command: /pvt_msg4
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

var tgid = options.tgid

Api.sendMessage({
chat_id: tgid,
text: ""+message+"",
parse_mode: "markdown" })
var text =
      "<b>📝 Message sent to</b> <code>" + tgid +"</code>\n\n"+message+""
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

