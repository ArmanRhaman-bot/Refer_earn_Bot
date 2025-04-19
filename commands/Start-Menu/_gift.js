var messageID = request.message_id;
var deleteAfter = 0;

User.setProperty("messageID", messageID, "string");

Bot.run({
  command: "/delete",
  run_after: deleteAfter
});
var botc = Bot.getProperty("botc");
var ont = User.getProperty("myk11");

let parts = message.split(" ");

if (parts.length < 4) {
  var text = "Usage: /giftcode CODE AMOUNT MAX_CLAIMS\n\nExample: /giftcode EID2025 100 10";
  var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  let code = parts[1];
  let amount = parseFloat(parts[2]);
  let maxClaims = parseInt(parts[3]);

  if (isNaN(amount) || isNaN(maxClaims) || amount <= 0 || maxClaims <= 0) {
    var text = "❌ Invalid amount or max claims. Please enter valid numbers.";
    var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
    return;
  }

  let existing = Bot.getProperty("giftcode_" + code);
  if (existing) {
    var text = "⚠️ *This gift code already exists!*\nPlease choose a different code name.";
    var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "markdown",
      reply_markup: { inline_keyboard: buttons }
    });
    return;
  }

  let totalCost = amount * maxClaims;
  let withdrawable = Libs.ResourcesLib.userRes("withdrawable");

  if (withdrawable.value() < totalCost) {
    var text = "❌ *Balance not enough!*\n\nYou need *" + totalCost + " " + botc + "* to create this gift code.";
    var buttons = [[{ text: "🔙 Back", callback_data: "/account" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  } else {
    withdrawable.remove(totalCost);

    let gift = {
      amount: amount,
      maxClaims: maxClaims,
      claimedUsers: [],
      totalClaimed: 0,
      creator: user.telegramid
    };

    Bot.setProperty("giftcode_" + code, gift, "json");
    User.setProperty("lastGiftCode", code, "string");

    var text = "*🧧 Gift code created:* `" + code + "`\n*💸 Amount per claim:* " + amount + " " + botc + "\n*👥 Max Claims:* " + maxClaims + "\n*💰 Total Deducted:* " + totalCost + " " + botc;
    var buttons = [
      [{ text: "✨ Share in GiftCode Channel", callback_data: "/sharecode2" }],
      [{ text: "🔙 Back", callback_data: "/account" }]
    ];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  }
}