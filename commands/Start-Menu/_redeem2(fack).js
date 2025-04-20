/*CMD
  command: /redeem2(fack)
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id });

var ont = User.getProperty("myk11");
var botc = Bot.getProperty("botc");

let code = message.trim();

if (!code || code.includes(" ")) {
  var text = "<b>Please enter a valid gift code only</b>";
  var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  let gift = Bot.getProperty("giftcode_" + code);

  if (!gift) {
    var text = "<b>❌ Invalid</b> or <b>expired</b> gift code.";
    var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
  } else {
    if (gift.claimedUsers.includes(user.telegramid)) {
      var text = "⚠️ You’ve already <b>claimed</b> this gift";
      var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
      Api.editMessageText({
        text: text,
        message_id: ont,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
      });
    } else {
      if (gift.claimedUsers.length >= gift.maxClaims) {
        var text = "⛔ Gift code amount almost finished!";
        var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
        Api.editMessageText({
          text: text,
          message_id: ont,
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: buttons }
        });
      } else {
        
        gift.claimedUsers.push(user.telegramid);
        gift.totalClaimed += gift.amount;
        Bot.setProperty("giftcode_" + code, gift, "json");

        let balance = Libs.ResourcesLib.userRes("balance");
        balance.add(gift.amount);
        let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
        withdrawable.add(gift.amount);

        
let time = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
var history_line = "🧧 " + time + ": " + gift.amount + " "+botc+" by " + code + " (gift_redeemed) - completed";

let oldHistory = User.getProperty("history");
if (!oldHistory) {
  oldHistory = "";
}
let updatedHistory = history_line + "\n" + oldHistory;
User.setProperty("history", updatedHistory, "string");

        var text = "🎉 Successfully claimed " + gift.amount + " " + botc + "\nEnjoy!";
        var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
        Api.editMessageText({
          text: text,
          message_id: ont,
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: buttons }
        });
      }
    }
  }
}
