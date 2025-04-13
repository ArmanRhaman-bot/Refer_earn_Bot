/*CMD
  command: onWebhookVerify
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

if (!content) return;

let data = JSON.parse(content);
let user_hash = data.results.user_hash;
let captcha = data.results.captcha;
let vpn = data.results.vpn;

if (User.getProperty("verify") === "ok") return;

// VPN Detected
if (vpn === "yes") {
  Bot.sendMessage("🚨 *VPN Detected!*\n\nYou are not allowed to verify using VPN.", { parse_mode: "Markdown" });
  Bot.blockChat(chat.id);
  return;
}

// Check duplicate
let hashs = Bot.getProperty("hashs", []);
if (hashs.includes(user_hash)) {
  Bot.sendMessage("❌ *Multiple Accounts Detected!*\nYou are banned.", { parse_mode: "Markdown" });

  let verifyMsgID = User.getProperty("verifyMsgID");
  if (verifyMsgID) {
    Api.deleteMessage({
      chat_id: chat.chatid,
      message_id: verifyMsgID
    });
  }

  Bot.blockChat(chat.id);
  return;
}

// Captcha Pass → Success
if (captcha === "ok") {
  hashs.push(user_hash);
  Bot.setProperty("hashs", hashs, "json");
  User.setProperty("verify", "ok", "string");

  let verifyMsgID = User.getProperty("verifyMsgID");
  if (verifyMsgID) {
    Api.deleteMessage({
      chat_id: chat.chatid,
      message_id: verifyMsgID
    });
  }

  Api.sendMessage({
    text: "✅ *Verification Successful!*\n\nYou now have full access."
  });
}
