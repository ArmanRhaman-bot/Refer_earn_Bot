/*CMD
  command: /withdraw_manually_3
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

try {
  Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id });

  var ont = User.getProperty("myk11");
  var wallet = User.getProperty("wallet");
  var botc = Bot.getProperty("botc");
  var minWithdraw = Bot.getProperty("minWithdraw");
  var alertsChannel = Bot.getProperty("alertsChannel");
  var admin = Bot.getProperty("admin");
  var totalManWithdrawn = Libs.ResourcesLib.anotherChatRes("totalManWithdrawn", "global");

  var withdrawable = Libs.ResourcesLib.userRes("withdrawable");
  var maskedWallet = wallet.slice(0, 5) + "****" + wallet.slice(-5);
  var amount = parseFloat(message); 
  let history = User.getProperty("history") || "";

  if (!minWithdraw) {
    Bot.sendMessage("⚠️ minWithdraw not set in bot properties!");
    return;
  }

  if (amount < minWithdraw) {
    var text = "❎ Minimum Withdraw " + minWithdraw + " " + botc;
    var buttons = [[{ text: "❌ Cancel", callback_data: "/cancel" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  } else if (amount > withdrawable.value()) {
    var text = "👀 Your Maximum Balance is " + withdrawable.value().toFixed(3) + " " + botc;
    var buttons = [[{ text: "❌ Cancel", callback_data: "/cancel" }]];
    Api.editMessageText({
      text: text,
      message_id: ont,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons }
    });
  } else {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    function generateString(length) {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }

    var txID = generateString(7);
    let time = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    var text = "📤 Your *Withdrawal* request created of *" + amount + " " + botc + "* for `" + maskedWallet + "`\n------------------------------------\n*🆔 TxID:* `#W" + txID + "`\n*🔍 Status:* `Pending...`";
    var buttons = [[{ text: "🔙 Back", callback_data: "/earn_menu" }]];
    Api.editMessageText({
      text: text,
      message_id: ont, 
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons }
    });

    withdrawable.add(-amount);
    totalManWithdrawn.add(+amount);
    let botLink = bot.name;
    let alertText =
      "<b>📤 New withdrawal Transaction</b>\n\n" +
      "<b>👤 Receiver:</b> <code>" + user.username + "</code>\n" +
      "<b>🪪 UserID:</b> <code>" + user.telegramid + "</code>\n" +
      "<b>💰 Amount:</b> <code>" + amount + " " + botc + "</code>\n" +
      "<b>💳 Address:</b> <code>" + maskedWallet + "</code>\n" +
      "<b>⏳ Time:</b> " + time + "\n" +
      "------------------------------------\n" +
      "<b>🆔 TxID:</b> <code>#W"+txID+"</code>\n✅ Status: <b>Confirmed</b>";

    let inkeyA = [[{ text: "🤖 Now your turn", url: "https://t.me/" + botLink }]];

    if (alertsChannel) {
      Api.sendMessage({
        chat_id: alertsChannel,
        text: alertText,
        parse_mode: "html",
        reply_markup: { inline_keyboard: inkeyA }
      });
    }
    
    let completeText =
      "<b>📤 New withdrawal Transaction</b>\n\n" +
      "<b>👤 Receiver:</b> <code>" + user.username + "</code>\n" +
      "<b>🪪 UserID:</b> <code>" + user.telegramid + "</code>\n" +
      "<b>💰 Amount:</b> <code>" + amount + " " + botc + "</code>\n" +
      "<b>💳 Address:</b> <code>" + wallet + "</code>\n" +
      "<b>⏳ Time:</b> " + time + "\n" +
      "------------------------------------\n" +
      "✅ Status: <b>Pending</b>";

    let inkey = [[{ text: "🤖 Now your turn", url: "https://t.me/" + botLink }]];

    history += "\n💸 " + time + ": " + amount + " " + botc + " for " + maskedWallet + "\n(manual_withdrawal) - completed";
    User.setProperty("history", history, "string");

    if (admin) {
      Bot.setProperty("pendingWithdraw_" + txID, JSON.stringify({
        userId: user.telegramid,
        username: user.username,
        amount: amount,
        wallet: wallet,
        maskedWallet: maskedWallet,
        txID: txID,
        time: time
      }), "string");

      Api.sendMessage({
        chat_id: admin,
        text: completeText,
        parse_mode: "html",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "✅ Approve", callback_data: "/approve " + user.telegramid},
              { text: "❌ Decline", callback_data: "/decline " + user.telegramid }
            ]
          ]
        }
      });
    }
  }

} catch (error) {
  Bot.sendMessage("❌ Error occurred:\n" + error.message);
}
