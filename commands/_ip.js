/*CMD
  command: /ip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let userId = user.telegramid;

// STEP 1: Check if this user was already registered
let existingUsers = Bot.getProperty("registered_users", []);

// STEP 2: Block if multiple accounts with same device/phone (optional - use custom logic here)

if (existingUsers.includes(userId)) {
  Bot.sendMessage("✅ You're already verified!");
} else {
  // Save new user
  existingUsers.push(userId);
  Bot.setProperty("registered_users", existingUsers, "json");

  Bot.sendMessage("✅ Welcome! You're verified.");
}
