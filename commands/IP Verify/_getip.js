/*CMD
  command: /getip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IP Verify

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var bbadmin = 6300579647;
var users = user.telegramid;

if (users === bbadmin) {
Bot.runCommand("/ipadmin")
  return
}
var ip_verify = Bot.getProperty("ip_verify")

if (ip_verify === "Off") {
  Bot.runCommand("/men")
  return
}
Bot.runCommand("/getip2")
