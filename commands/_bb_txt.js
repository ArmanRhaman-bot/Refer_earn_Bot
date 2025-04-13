/*CMD
  command: /bb_txt
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

var txt = "Hey, <b>"+user.username+"</b> Welcome to my Bot 🤩\n\nThank You, admin to visit my bot\n\n<blockquote>@"+bot.name+" I created the bot to participate in the BB Refer&Earn contest. I am bringing all the benefits and rules to participate in the contest to the bot. Lets me tell you about each feature.</blockquote>\n\nA powerful Telegram bot for Refer & Earn systems, built with BotScripter/BB Engine. Fully meets the specifications of the BB Refer & Earn Competition.\n\n<blockquote>Features</blockquote>\n<b>User Side:</b>\n<blockquote expandable>– Mandatory Channel Subscription\n– Welcome Bonus after joining channels (logged in History)\n– Balance Menu\n– Total Balance\n– Referral Balance\n– Withdrawable Balance\n– Earn Remaining to Reach Minimum Withdraw\n– Update Wallet with live validation (detects wrong format)\n– Withdraw Menu\n– Auto Withdraw (Crypto)\n– Manual Withdraw (sent to admin for approval)\n– Invite Friends (Rank System)\n– Dynamic rank progress tracking\n– Referral Tree\n– See all referred users and earned bonuses\n– Leaderboard\n– Top 10 referrers with automatic rewards\n– Transaction History (latest 20 shown)</blockquote>\n\n<b>Admin Panel:</b>\n<blockquote expandable>– Withdraw On/Off \n– Minimum Withdraw \n– Withdraw Mode Auto/Manually \n– Withdrawal Notifications Channel Set\n– Payout API Set (using oxpay gateway)\n– Daily Bonus Set\n– Bonus Time Set\n– Invite Bonus Set\n– Leaderboard Rewards Distribution Date Set\n– leaderboard Rewards Distribution complete with one click \n– Top 10 Leaderboard Rewards set & etc...</blockquote><b>Contest Compatibility</b>\n\nThis template fully matches the Technical Specification for REB Competition and follows all rules outlined in the BB Contest Rules:"
var inlkey = [[{ text: "💥 Go user menu", callback_data: "/gm" }]]

if (!request.data) {
  Api.sendMessage({
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  })
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
  })
}
