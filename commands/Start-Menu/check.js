/*CMD
  command: check
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

var m_channel = Bot.getProperty("m_channel","No_Channel_Set ❌")
let status = options.result.status

var getChatMember =
  (status == "member") | (status == "administrator") | (status == "creator")

if (getChatMember) {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "👍 Thanks, for joined with us!",
  show_alert: true
})
  Bot.runCommand("/getip")

} else {
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "⚠️ At first Join our official channel!",
  show_alert: true
})
  var text = 
    "*❌ Please, Join our channel.*\n\n*✅ Step 1:* [Join Official Channel](t.me/"+m_channel+")\n\n🚀 After hit the button again..."
var buttons = [[{ text: "Yes, I am Joined 🖤", callback_data: "/joined" }]]

var message_id = request.message.message_id


  

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown",reply_markup: {
    inline_keyboard: buttons
  }
})
  
}
