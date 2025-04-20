/*CMD
  command: /rqr
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

function generateReferralQR() {
    var refCode = User.getProperty("ref_code");
    if (!refCode) {
        refCode = user.telegramid; // fallback
    }

    var referralLink = "https://t.me/ReferEarnBBs_bot?start=" + refCode;
    var webAppUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + 
                   encodeURIComponent(referralLink);
    
    return {
        text: "📲 <b>Share Your Referral QR Code</b>",
        link: referralLink,
        buttons: [
            [{ 
                text: "🔄 Generate QR Code", 
                web_app: { url: webAppUrl }
            }],
            [{
                text: "📤 Share Link",
                switch_inline_query: "Join with my referral: " + referralLink
            }]
        ]
    };
}
