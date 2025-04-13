/*CMD
  command: /bm2
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

var wallet = User.getProperty("wallet"); // বা যেখান থেকে wallet address আসছে
var maskedWallet = wallet.slice(0, 5) + "****" + wallet.slice(-5); // শুরু ৫টা, শেষে ৫টা, মাঝখানে ****

var msg = "<b>🔐 Wallet:</b> " + maskedWallet;

Api.sendMessage({
  text: msg,
  parse_mode: "html",
  disable_web_page_preview: true
});
