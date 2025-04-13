/*CMD
  command: /withdraw2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

var wallet = User.getProperty("wallet")

if (wallet === undefined) {
  var txt =
    "<i>⚠️ Your Wallet not set</i>"

  var inlkey = [
  [{ text: "🔙 Back", callback_data: "/wallet" }]]
  Api.editMessageText({
  text: txt,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});
  return
}

var withdrawable = Libs.ResourcesLib.userRes("withdrawable")
var amount = parseFloat(message);
var minWithdraw = parseFloat(Bot.getProperty("minimumWithdraw"))
var botc = Bot.getProperty("botc")

if (amount < minWithdraw) {
  var Mintxt =
    "<i>Minimum Withdraw is "+minWithdraw+" "+botc+"</i>"

  var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
  text: Mintxt,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});

  return
}

var maximumWithdraw = parseFloat(Bot.getProperty("maximumWithdraw"))

if (amount > maximumWithdraw) {
  var greaterText =
    "<i>⚠️ Maximum withdraw is :</i> <code>" +
    maximumWithdraw +
    " " +
    botc +
    "</code>"

    var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
  text: greaterText,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});

  return
}

if (amount > withdrawable.value()) {
  var txt =
    "<i>⚠️ You haven't this amount balance</i>"

  var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
  text: txt,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});

  return
}

User.setProperty("amount", amount, "string")

var txt =
  "<b>⁉️ Withdrawal confirmation\n\n💸 Amount :</b> <code>" +
  amount +
  " " +
  botc +
  "</code>\n<b>🗂️ Wallet :</b> <code>" +
  wallet +
  "</code>\n\n<b>✅ Click the button below to confirm or cancel 👇</b>"

  var inlkey = [[{ text: "❎ Cancel", callback_data: "/cancel" },
  { text: "✅ Confirm", callback_data: "/withdraw3" }]]
  Api.editMessageText({
  text: txt,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: inlkey
  }
});

