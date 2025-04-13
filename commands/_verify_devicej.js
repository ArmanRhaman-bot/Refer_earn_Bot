/*CMD
  command: /verify_devicej
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

function generateDeviceID(userId) {
  return "device_" + userId + "_" + Math.floor(Math.random() * 1000000);
}

let userId = user.telegramid;
let deviceList = Bot.getProperty("device_list", {});  // deviceID => userID
let userDevice = Bot.getProperty("user:" + userId + ":device");

if (userDevice) {
  Bot.sendMessage({
    text: "✅ <b>You are already verified!</b>\n\n<b>Device ID:</b>\n<code>" + userDevice + "</code>",
    parse_mode: "HTML"
  });
} else {
  let newDevice = generateDeviceID(userId);

  let deviceUsed = false;

  for (let key in deviceList) {
    if (deviceList[key] == userId) continue;

    if (key === newDevice) {
      deviceUsed = true;
      break;
    }
  }

  if (deviceUsed) {
    Bot.sendMessage("⚠️ Multiple account usage detected! You cannot use multiple accounts from the same device.");
    return;
  }

  // Save device info
  deviceList[newDevice] = userId;
  Bot.setProperty("device_list", deviceList, "json");
  Bot.setProperty("user:" + userId + ":device", newDevice, "string");

  Bot.sendMessage({
    text: "✅ <b>Device Verified Successfully!</b>\n\n<b>Your Device ID:</b>\n<code>" + newDevice + "</code>",
    parse_mode: "HTML"
  });
}
