/*CMD
  command: /track
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

let parts = message.split(" ");

if (parts.length < 2) {
  Bot.sendMessage("❓ Please provide your transaction ID\n\nExample: `/track #WABC1234`", { parse_mode: "Markdown" });
  return;
}

let txID = parts[1].replace("#", ""); // Remove '#' if included
let status = Bot.getProperty("withdrawStatus_" + txID);

if (!status) {
  Bot.sendMessage("❌ Transaction ID `#" + txID + "` not found.\nPlease check and try again.", { parse_mode: "Markdown" });
} else {
  let displayStatus = "";

  if (status == "Pending") {
    displayStatus = "⏳ *Pending* - Your withdrawal request is under review.";
  } else if (status == "Successful") {
    displayStatus = "✅ *Successful* - Your withdrawal has been approved and paid.";
  } else if (status == "Cancelled") {
    displayStatus = "❌ *Declined* - Your withdrawal was declined.";
  }

  Bot.sendMessage("*Status for:* `#" + txID + "`\n" + displayStatus, { parse_mode: "Markdown" });
}
