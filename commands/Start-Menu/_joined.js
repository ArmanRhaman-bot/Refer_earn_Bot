/*CMD
  command: /joined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var m_channel = Bot.getProperty("m_channel")
var ban = Bot.getProperty(user.telegramid)
var support_id = Bot.getProperty(support_id)
if (ban === "Ban") {

var txt = "<i>🚫 You're banned.</i>"
var inlkey = [
  [{ text: "Support Team", url: "t.me/"+support+"" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
  return
}
  let channel = "@"+m_channel+"";
  let id = user.telegramid
  Api.getChatMember({ 
    chat_id : channel,
    user_id : id,
    on_result :"check"
  })


