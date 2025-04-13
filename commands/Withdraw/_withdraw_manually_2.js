/*CMD
  command: /withdraw_manually_2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/



var buttons = [[{ text: "❌ Cancel", callback_data: "/cancel" }]]
var text = "*💰 Send the amount, you want to withdraw.*"

var message_id = request.message.message_id

var ont = User.getProperty("myk11")

  User.setProperty("myk11", message_id, "string")


Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown",reply_markup: {
    inline_keyboard: buttons
  }
})
Bot.runCommand("/withdraw_manually_3")
