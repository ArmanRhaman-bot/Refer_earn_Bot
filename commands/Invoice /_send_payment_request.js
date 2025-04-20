/*CMD
  command: /send_payment_request
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

var botc = Bot.getProperty("botc");
let target = User.getProperty("target_user_id");
let amount = User.getProperty("amount_to_request");


User.setProperty("payment_request_step", "", "string");
User.setProperty("target_user_id", "", "string");
User.setProperty("amount_to_request", "", "float");

if (!target || !amount) {
    var wrong = [
        [{ text: "🔙 Back", callback_data: "/earn_menu" }]
    ];
    Api.editMessageText({
        message_id: request.message.message_id,
        text: "❌ Missing information. Please start again.",
        parse_mode: "html",
        reply_markup: { inline_keyboard: wrong }
    });
    return;
}

// 1. First confirm to sender
var inlkey = [
    [{ text: "🔙 Back", callback_data: "/earn_menu" }]
];
Api.editMessageText({
    message_id: request.message.message_id,
    text: "✅ Payment request sent to user ID: `" + target + "`",
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inlkey }
});


var Rinlkey = [
    [{ text: "✅ Send Payment", callback_data: "/confirm_payment " + user.telegramid + "|" + amount },
    { text: "Cancel ❌", callback_data: "/cancel " }]
];
var Rtxt = "💸 *You received a payment request!*\n\n" +
    "👤 From: [" + user.first_name + "](tg://user?id=" + user.telegramid + ")\n" +
    "💰 Amount: *" + amount + " "+botc+"*";


Api.sendMessage({
    chat_id: target,
    text: Rtxt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: Rinlkey }
});
