/*CMD
  command: /confirm_verification
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

// 4. ভেরিফিকেশন কনফার্ম করা
function confirm_verification() {
    var currentCode = User.getProperty("verification_code");
    
    if (currentCode === "expired") {
        Bot.sendMessage("❌ Verification code expired. Please try again.");
        return;
    }
    
    // IP সেভ করুন এবং ভেরিফাইড মার্ক করুন
    User.setProperty("verified_ip", request.ip, "string");
    User.setProperty("is_verified", "true", "string");
    
    Bot.sendMessage({
        text: "✅ <b>VERIFICATION SUCCESSFUL!</b>\n\n" +
              "Your device/IP has been authorized.\n" +
              "▸ IP: <code>" + request.ip + "</code>\n\n" +
              "You can now access all features.",
        parse_mode: "HTML"
    });
    
    Bot.runCommand("/earn_menu");
}

// 5. অ্যাক্সেস ডিনাই মেসেজ
function showAccessDenied() {
    Bot.sendMessage({
        text: "🚫 <b>ACCESS DENIED</b>\n\n" +
              "Multiple account usage detected!\n" +
              "▸ Your IP: <code>" + request.ip + "</code>\n" +
              "▸ Authorized IP: <code>" + User.getProperty("verified_ip") + "</code>\n\n" +
              "Contact support if this is a mistake.",
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: [[
            { text: "🆘 Contact Support", url: "t.me/your_support" }
        ]]}
    });
}


