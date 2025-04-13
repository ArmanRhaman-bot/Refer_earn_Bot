/*CMD
  command: /withdraw3
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


Bot.runCommand("/earn_menu");

var currency = Bot.getProperty("currency");
var p_api = Bot.getProperty("p_api");
var wallet = User.getProperty("wallet");
var amount = User.getProperty("amount");


let options = {
  url: "api/send",
  fields: {
    amount: amount,
    currency: currency,
    network: "TON",
    address: wallet,
    onCallback: "/confirm2"
  },
  onSuccess: "/confirm3 " + amount + " " + currency
};

Libs.OxaPayLib.apiCall(options);
