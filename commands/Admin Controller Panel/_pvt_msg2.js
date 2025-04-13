/*CMD
  command: /pvt_msg2
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

var admin = 6791487279
var users = user.telegramid
if (users === admin) {
Bot.run({ 
command: "/pvt_msg3",
options: { tgid : message }
})
}
