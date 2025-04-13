/*CMD
  command: /confirm2
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



if (!options) {
Bot.sendMessage("❌ Options data not received!");
return;
}

try {
var wallet = User.getProperty("wallet");
var amount = options.amount;
var currency = options.currency;
var network = "TON";
var status = options.status;
var userName = user.first_name || "Unknown";
var userID = user.telegramid;
var username = user.username ? "@" + user.username : "Not set";
var botLink = bot.name; // Remove @
var alertsChannel = Bot.getProperty("alertsChannel");
var admin = Bot.getProperty("admin");
var withdrawable = Libs.ResourcesLib.userRes("withdrawable");
var totalWithdrawn = Libs.ResourcesLib.anotherChatRes("totalWithdrawn", "global");
var history = User.getProperty("history") || "";

var time = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

var maskedWallet = wallet.slice(0, 6) + "****" + wallet.slice(-4); // Fixed here

if (status === "Confirming") {
var confirmingText =
"<b>⁉️ Your withdrawal is processing....</b>\n\n" +
"<b>💸 Amount :</b> <code>" + amount + " " + currency + "</code>\n" +
"<b>💳 Address :</b> <code>" + maskedWallet + "</code>";

Api.sendMessage({  
  text: confirmingText,  
  parse_mode: "html"  
});

} else if (status === "Complete") {
withdrawable.remove(parseFloat(amount));
totalWithdrawn.add(parseFloat(amount));

history += "\n📤 " + time + ": " + amount + " " + currency + " for " + maskedWallet + "\n(withdrawal) - completed";  
User.setProperty("history", history, "string");  

Api.sendMessage({  
  text: "<b>💵 Withdraw</b>\n" + amount + " " + currency + " for " + maskedWallet + " has been Completed",  
  parse_mode: "html"  
});  

var completeText =  
  "<b>📤 New withdrawal Transaction</b>\n\n" +  
  "<b>👤 Receiver:</b> <code>" + userName + "</code>\n" +  
  "<b>🪪 UserID:</b> <code>" + userID + "</code>\n" +  
  "<b>💰 Amount:</b> <code>" + amount + " " + currency + "</code>\n" +  
  "<b>💳 Address:</b> <code>" + maskedWallet + "</code>\n" +  
  "<b>⏳ Time:</b> " + time + "\n" +  
  "------------------------------------\n" +  
  "✅ Status: <b>Confirmed</b>";  

var inkey = [[{ text: "🤖 Now your turn", url: "https://t.me/" + botLink }]];  

if (alertsChannel) {  
  Api.sendMessage({  
    chat_id: alertsChannel,  
    text: completeText,  
    parse_mode: "html",  
    reply_markup: { inline_keyboard: inkey }  
  });  
}  

if (admin) {  
  var adminText =  
    "<b>✅ New withdrawal successful</b>\n\n" +  
    "<b>🧒 User:</b> " + userName + "\n" +  
    "<b>🆔 User ID:</b> <code>" + userID + "</code>\n" +  
    "<b>👉 Username:</b> " + username + "\n" +  
    "<b>💸 Amount:</b> <code>" + amount + " " + currency + "</code>\n" +  
    "<b>🗂️ Address:</b> <code>" + wallet + "</code>";  

  Api.sendMessage({  
    chat_id: admin,  
    text: adminText,  
    parse_mode: "html"  
  });  
}

}

} catch (error) {
Bot.sendMessage("❌ Error occurred:\n" + error.message);
}


