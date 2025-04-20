/*CMD
  command: /confirm_payment
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Invoice 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  Api.deleteMessage({
    message_id: request.message.message_id
  });

  var botc = Bot.getProperty("botc");
  let parts = request.data.split(" ");
  let [target_id, amount, sender_id] = parts[1].split("|");  // এখন sender_id নিচ্ছি

  let sender_balance = Libs.ResourcesLib.userRes("withdrawable");

  if (sender_balance.value() < amount) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "❌ You don't have enough balance.",
      show_alert: true
    });
  } else {
    let receiver_withdrawable = Libs.ResourcesLib.anotherUserRes("withdrawable", target_id);
    let receiver = Libs.ResourcesLib.anotherUserRes("balance", target_id);
    
    sender_balance.add(-amount);
    receiver.add(+amount);
    receiver_withdrawable.add(+amount);

    Bot.sendMessage("✅ Payment of *" + amount + " " + botc + "* sent successfully!", { parse_mode: "Markdown" });

    Api.sendMessage({
      chat_id: target_id,
      text: "✅ *You received a payment of* `" + amount + " " + botc + "` *from* [" + user.first_name + "](tg://user?id=" + user.telegramid + ")",
      parse_mode: "Markdown"
    });

    var history = User.getProperty("history", "string", target_id);
    if (!history) history = "";

    var reward = amount;
    var datetime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    history += "\n🦋 " + datetime + ": " + reward + " " + botc + "\n(invoice_accept) - completed";

    User.setProperty("history", history, "string", target_id);
  }
}
