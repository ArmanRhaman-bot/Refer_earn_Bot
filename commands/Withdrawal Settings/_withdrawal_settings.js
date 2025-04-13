/*CMD
  command: /withdrawal_settings
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdrawal Settings

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /w_back
  group: 
CMD*/

var w_mode = Bot.getProperty("w_mode"," ❌")
var admin = Bot.getProperty("admin")
var alertsChannel = Bot.getProperty("alertsChannel","not_set")
var setPayoutApiKey = Bot.getProperty("setPayoutApiKey","API not set")

var txt = "<b>📥 Control here all withdrawal settings</B>\n\n–––––––––––––––––––––\n\n▪️<b>Withdrawal Mode:</b> "+w_mode+"\n\n▪️<b>Payout API:</b> "+setPayoutApiKey+"\n\n▪️<b>Admin ID:</b> "+admin+"\n\n▪️<b>Payout announced:</b> "+alertsChannel+""
var inlkey = [
  [{ text: "Withdrawal Mode: "+w_mode, callback_data: "/w_mode" }],
  [{ text: "Withdrawal Channel", callback_data: "/w_channel" }],[{ text: "Payout API", callback_data: "/p_api" }],[{ text: "Payout API", callback_data: "/cur" }],
  [{ text: "🔙 Back", callback_data: "/important_settings" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
