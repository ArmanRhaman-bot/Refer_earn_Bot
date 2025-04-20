/*CMD
  command: /gift_code
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

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
  var text = "*ex:* `/gift_code CODE AMOUNT MAX_CLAIMS`\n*ex:* `/gift_code EID2025 1 10`";
  var buttons = [[{ text: "🔙 Back", callback_data: "/a_back" }]];
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  let code = parts[1];
  let amount = parseFloat(parts[2]);
  let maxClaims = parseInt(parts[3]);

  let gift = {
    amount: amount,
    maxClaims: maxClaims,
    claimedUsers: [],
    totalClaimed: 0
  };

  Bot.setProperty("giftcode_" + code, gift, "json");

  // Store last created gift code info to user-specific property
  User.setProperty("lastGiftCode", code, "string");

  var text = "*🧧 Gift code created:* `" + code + "`\n*💸 Amount:* " + amount + " " + botc + "\n*👥 Max Claims:* `" + maxClaims + "`";
  var buttons = [
    [{ text: "✨ Share in GiftCode Channel", callback_data: "/sharecode" }],
    [{ text: "🔙 Back", callback_data: "/a_back" }]
  ];
  Api.editMessageText({
    text: text,
    message_id: ont,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: buttons }
  });
}
