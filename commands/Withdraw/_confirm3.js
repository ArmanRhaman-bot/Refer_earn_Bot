/*CMD
  command: /confirm3
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

if (!options) {
return
}

var result = options.result
var amount = params
var trackID = options.trackId
var failed = options.message
let pending = Libs.ResourcesLib.anotherChatRes("pending", "global");
if (result === 100) {
var processingText =
"<b>📦 Your withdrawal request of</b> " +
amount +
" <b>is pending....\n\n✅ Wait for withdraw to be processed</b>"

Api.sendMessage({
text: processingText,
parse_mode: "html"
})
pending.add(parseFloat(amount));
} else {
var failedText = "<b>☹️ Withdrawal failed :</b>\n<i>" + failed + "</i>"

var inlkey = [[{ text: "🔙 Back", callback_data: "/account" }]]
if (!request.data) {
Api.sendMessage({
text: failedText,
parse_mode: "html",
reply_markup: { inline_keyboard: inlkey }
})
} else {
Api.editMessageText({
message_id: request.message.message_id,
text: failedText,
parse_mode: "html",
reply_markup: { inline_keyboard: inlkey }
})
}}

var status = options.status

if (status === "complete") {
var text = "<b>✔️ Your withdrawal is successful.</b>"

Api.sendMessage({
text: text,
parse_mode: "html"
})
}


