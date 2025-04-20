/*CMD
  command: /decline#3
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

if(request.data){
  Api.deleteMessage({ message_id: request.message.message_id });
}

let parts = request.data.split(" ");
let telegramid = parts[1];
let txID = parts[2];

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Declined & user notified",
  show_alert: true
});

Bot.setProperty("withdrawStatus_" + txID, "Cancelled", "string");

Api.sendMessage({
  chat_id: telegramid,
  text: "*🔔 Payment Notifier*\n\n❌ Your withdrawal (TxID: `#" + txID + "`) has been *declined by admin*.",
  parse_mode: "Markdown"
});
