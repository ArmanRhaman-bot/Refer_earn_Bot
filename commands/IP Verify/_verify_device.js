/*CMD
  command: /verify_device
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IP Verify

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mip
  group: 
CMD*/

let verify = User.getProperty("verify");
if (verify) {
  Bot.sendMessage("🙄 *You have already been verified.*", { parse_mode: "Markdown" });
  return;
}

// Bot ID (fixed value, or get via /getMe)
let bot_id = 8081688846; // ← Replace with your actual bot ID

let webhook = Libs.Webhooks.getUrlFor({
  command: "onWebhookVerify",
  user_id: user.id
});

let webPage = `https://api.jobians.top/telegram/verify?webhookUrl=${encodeURIComponent(webhook)}&botId=${bot_id}`;

var keys = [[{ text: "✍️ Register", web_app: { url: webPage } }]];

Api.sendMessage({
  text: "💻 Register Your Device To Gain Access",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: keys }
});
