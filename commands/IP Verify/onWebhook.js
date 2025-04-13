/*CMD
  command: onWebhook
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

if (!content) {
  return
}
var data = JSON.parse(content)
var ip = data.results.ip.split(".").slice(0,3).join(".")
var captcha = data.results.captcha
var vpn = data.results.vpn

var verify = User.getProperty("verify")
if(verify){
return}

if(vpn == "yes"){
Bot.sendMessage("🚨 You Are Ban For Using VPN!")
Bot.blockChat(chat.id);
return}

var ips = Bot.getProperty("ips", { list: {} })
if(ips.list[ip]){
  Bot.sendMessage("❌ You Have Been Banned For Using Multiple Account");
  Bot.blockChat(chat.id);
  return
}

if(captcha == "ok"){
var ips = Bot.getProperty("ips", { list: {} });
ips.list[ip] = true;
Bot.setProperty("ips", ips, "json");
User.setProperty("verify","ok","string")
Bot.runCommand("/master")
}
