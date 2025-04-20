/*CMD
  command: /pay_request
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

let request_id = message;
let data = Bot.getProperty(request_id);

if (!data || !data.active) {
  return Bot.sendMessage("❌ This payment request is invalid or already paid.");
}

if (user.telegramid !== data.receiver_id) {
  return Bot.sendMessage("❌ This request was not sent to you.");
}

let payer_balance = Libs.ResourcesLib.userRes("balance");
if (payer_balance.value() < data.amount) {
  return Bot.sendMessage("⚠️ You don't have enough balance to make this payment.");
}

let receiver_balance = Libs.ResourcesLib.anotherUserRes("balance", data.sender_id);

payer_balance.remove(data.amount);
receiver_balance.add(data.amount);

data.active = false;
Bot.setProperty(request_id, data, "json");

Bot.sendMessage("✅ Payment sent successfully!");

Api.sendMessage({
  chat_id: data.sender_id,
  text: `✅ You received *${data.amount}* credits from [User](tg://user?id=${user.telegramid})!`,
  parse_mode: "Markdown"
});
