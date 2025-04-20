/*CMD
  command: /approve#2
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
let telegramid = parts[1];  // user.telegramid
let txID = parts[2];        // withdraw TxID

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Approved & user notified",
  show_alert: true
});

Bot.setProperty("withdrawStatus_" + txID, "Successful", "string");

Api.sendMessage({
  chat_id: telegramid,
  text: "*🔔 Payment Notifier*\n\n✅ Your withdrawal (TxID: `#" + txID + "`) has been *approved and paid*!",
  parse_mode: "Markdown"
});
