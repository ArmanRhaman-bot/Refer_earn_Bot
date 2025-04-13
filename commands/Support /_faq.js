/*CMD
  command: /faq
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var txt = "<b>Frequently Asked Questions</b> (FAQ)\n\n<b>1. What does this bot do?</b>\n\n<b>Answer:</b>\n<blockquote expandable>This bot is a Refer-and-Earn system where users can earn bonuses and income by sharing their referral links. Users can view their balance, track referrals, request withdrawals, and check the leaderboard.</blockquote>\n\n<b>2. How can I get my referral link?</b>\n\n<b>Answer:</b>\n<blockquote expandable>You can get your personal referral link by clicking on the Referral Link button in the Main Menu. Share this link to earn referrals.</blockquote>\n\n<b>3. Will I earn rewards if someone joins using my referral link?</b>\n\n<b>Answer:</b>\n<blockquote expandable>Yes! When someone joins using your referral link, you will earn bonuses or referral rewards. The more people you refer, the more rewards you get.</blockquote>\n\n<b>4. How can I withdraw my earnings?\n\nAnswer:</b>\n<blockquote expandable>You can withdraw your earnings by clicking the Withdraw button in the Main Menu. The process is automatic, and your funds will be transferred to your wallet after your request is processed.</blockquote>\n\n<b>5. Will I know if my withdrawal is pending?</b>\n\n<b>Answer:</b>\n<blockquote expandable>Yes, you can check the Pending Withdrawals section to view the status of your withdrawal request (e.g., Pending or Completed). You will also receive a notification when your withdrawal is successful.</blockquote>\n\n<b>6. How can I check my balance?\n\nAnswer:</b>\n<blockquote expandable>You can check your total balance and referral earnings by clicking on the Balance button in the Main Menu.</blockquote>\n\n<b>7. How can I view my referral ranking\n\nAnswer:</b>\n<blockquote expandable>You can view your ranking and referral earnings by clicking on the Leaderboard button in the Main Menu. You can see the top 10 users here.</blockquote>\n\n<b>8. How can I update my wallet?</b>\n\n<b>Answer:</b>\n<blockquote expandable>You can update your wallet by clicking on the Profile Settings button in the Main Menu and selecting Wallet Update. Here you can update your wallet address or other necessary details.</blockquote>\n\n<b>9. What should I do if I face any issues?</b>\n\n<b>Answer:</b>\n<blockquote expandable>You can check the FAQ / Help section for common solutions. If the problem persists, you can contact our Support team via the Support button.</blockquote>\n\n<b>11. Can I use multiple accounts?\n\nAnswer:</b>\n<blockquote expandable>A user can only use one account. Our security policy prevents the use of multiple accounts to avoid scams or fake accounts.</blockquote>\n\n<b>12. What should I do if I can’t withdraw my funds?</b>\n\n<b>Answer:</b>\n<blockquote expandable>Check the Withdraw Status to see if there is any issue with your request. If there is still a problem, you can contact our Support team for assistance.</blockquote>\n\n<b>13. Can I use the bot without making any payments?\n\nAnswer:</b>\n<blockquote expandable>Yes, you can use the bot for free. However, you can earn more by sharing your referral link.</blockquote>"
var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
});
