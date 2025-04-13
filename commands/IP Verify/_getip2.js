/*CMD
  command: /getip2
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


var verify = User.getProperty("verify")
if (verify) {
Bot.runCommand("/men")
return}

var url2 = Libs.Webhooks.getUrlFor({
  command: "onWebhook2",
  user_id: user.id
})
var webPage =
  "https://api.jobians.top/captcha/verify?webhookUrl=" +
  encodeURIComponent(url2)

const text =
  "✅️ Please Verify Yourself By Clicking Below Button\n\n⚠️ Don't Use VPN\n\n⚠️ Don't Create Multiple Accounts"
const inlkey = [[{ text: "🤖 VERIFY ME", web_app: { url: webPage } }]
    ]
if (!request.data) {
  Api.sendMessage({
    text: text,
    parse_mode: "markdown",
    on_result: "/delete_ipverify",
    reply_markup: { inline_keyboard: inlkey }
  })
  } else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "markdown",
    on_result: "/delete_ipverify",
    reply_markup: { inline_keyboard: inlkey }
  })
}

