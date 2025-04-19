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
        let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
        balance.add(gift.amount);
        withdrawable.add(gift.amount);

        let time = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        let history_line = "🧧 " + time + ": " + gift.amount + " " + botc + " by " + code + " (gift_redeemed) - completed";

        let oldHistory = User.getProperty("history");
        if (!oldHistory) oldHistory = "";
        let updatedHistory = history_line + "\n" + oldHistory;
        User.setProperty("history", updatedHistory, "string");

        // Notify the gift code creator
        if (gift.creator && gift.creator !== user.telegramid) {
          let currentClaims = gift.claimedUsers.length;
          let msg = "🎉 Your gift code *" + code + "* has just been claimed!\n\n" +
                    "*👤 Claimed by:* [" + user.first_name + "](tg://user?id=" + user.telegramid + ")\n" +
                    "*✅ Total Claims:* " + currentClaims + "/" + gift.maxClaims;
          Bot.sendMessageToChatWithId(gift.creator, msg, { parse_mode: "markdown" });
        }

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