/*CMD
  command: onWebhook2
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

if (!content) return

let data = JSON.parse(content)
let ip = data.results.ip.split(".").slice(0, 3).join(".")
let captcha = data.results.captcha
let vpn = data.results.vpn

if (User.getProperty("verify")) return


if (vpn === "yes") {
  Bot.sendMessage("🚫 You are banned for using VPN!")
  Bot.blockChat(chat.id)
  return
}


let ips = Bot.getProperty("ips", { list: {} })
if (ips.list[ip]) {
  Bot.sendMessage("❌ Multiple Account Detected! You are banned.")
  let verifyMsgID = User.getProperty("verifyMsgID")
  if (verifyMsgID) {
    Api.deleteMessage({
      chat_id: chat.chatid,
      message_id: verifyMsgID
    })
  }
  Bot.blockChat(chat.id)
  var blocked_device = Libs.ResourcesLib.anotherChatRes("blocked_device", "global")
blocked_device.add(1);
  return
}


if (captcha === "ok") {
  
  ips.list[ip] = true
  Bot.setProperty("ips", ips, "json")
  User.setProperty("verify", "ok", "string")

  
  let verifyMsgID = User.getProperty("verifyMsgID")
  if (verifyMsgID) {
    Api.deleteMessage({
      chat_id: chat.chatid,
      message_id: verifyMsgID
    })
  }
var verified_device = Libs.ResourcesLib.anotherChatRes("verified_device", "global")
verified_device.add(1);
  Bot.runCommand("/master")
}
