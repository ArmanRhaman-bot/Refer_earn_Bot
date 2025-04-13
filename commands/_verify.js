/*CMD
  command: /verify
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

// STEP 1: Generate a unique device ID (can be a mix of userId + random code)
function generateDeviceID(userId) {
  return "device_" + userId + "_" + Math.floor(Math.random() * 1000000);
}

let userId = user.telegramid;
let deviceList = Bot.getProperty("device_list", {});  // deviceID => userID
let userDevice = Bot.getProperty("user:" + userId + ":device");

if (userDevice) {
  // User already has a verified device
  Bot.sendMessage("✅ You are already verified with device:\n<code>" + userDevice + "</code>", { parse_mode: "HTML" });
} else {
  // Now check if this deviceID is already used
  let newDevice = generateDeviceID(userId);

  // Check if this device already used (simulate by checking if same deviceID used for another user)
  let deviceUsed = false;

  for (let key in deviceList) {
    if (deviceList[key] == userId) continue; // allow same user

    if (key === newDevice) {
      deviceUsed = true;
      break;
    }
  }

  if (deviceUsed) {
    Bot.sendMessage("⚠️ Multiple account usage detected!\nYou're not allowed to use multiple accounts from the same device.");
    return;
  }

  // Save device
  deviceList[newDevice] = userId;
  Bot.setProperty("device_list", deviceList, "json");
  Bot.setProperty("user:" + userId + ":device", newDevice, "string");

  Bot.sendMessage("✅ Device Verified Successfully!\nYour device ID:\n<code>" + newDevice + "</code>", { parse_mode: "HTML" });
}
