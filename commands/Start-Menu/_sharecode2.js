let giftcode = User.getProperty("lastGiftCode");
let gift = Bot.getProperty("giftcode_" + giftcode);
let botc = Bot.getProperty("botc");
let giftcodechannel = "@Rcodeclaim";  

if (!giftcode || !gift) {
  return Bot.sendMessage("❌ No recent gift code found. Please create one first.");
}

let totalCost = gift.amount * gift.maxClaims;

let shareTxt =
  "🎁 *New Gift Code!* 🎁\n\n" +
  "*🧧 Code:* `" + giftcode + "`\n" +
  "*💸 Amount per Claim:* " + gift.amount + " " + botc + "\n" +
  "*👥 Max Claims:* " + gift.maxClaims + "\n" +
  "*💰 Total Cost:* " + totalCost + " " + botc + "\n" +
  "*👤 Created by:* [" + user.first_name + "](tg://user?id=" + user.telegramid + ")\n\n" +
  "Use the code now in the bot to claim your reward!";

var keyboard = [[{ text: "🎁 Redeem Gift", url: "https://t.me/"+bot.name+"" }]]
Api.sendMessage({
  chat_id: giftcodechannel,
  text: shareTxt,
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: keyboard }
});

var txt = "✅ *Your gift code* `" + giftcode + "` *has been posted to* @" + giftcodechannel.replace("@", "") + "!";
var inlkey = [[{ text: "🔙 Back", callback_data: "/account" }]];
Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: inlkey }
});