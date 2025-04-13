/*CMD
  command: /statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var botc = Bot.getProperty("botc")
var stat = Libs.ResourcesLib.anotherChatRes("status", "global");
var newu = Libs.ResourcesLib.anotherChatRes("newu", "global");
var click = Libs.ResourcesLib.anotherChatRes("click", "global");
var totalWithdrawn = Libs.ResourcesLib.anotherChatRes("totalWithdrawn", "global");
var pending = Libs.ResourcesLib.anotherChatRes("pending", "global");
var totalManWithdrawn = Libs.ResourcesLib.anotherChatRes("totalManWithdrawn", "global");
var pending_man = Libs.ResourcesLib.anotherChatRes("pending_man", "global");
var invited_you = Libs.ResourcesLib.anotherChatRes("invited_you", "global");
var non_invited = Libs.ResourcesLib.anotherChatRes("non_invited", "global");
var verified_device = Libs.ResourcesLib.anotherChatRes("verified_device", "global");
var blocked_device = Libs.ResourcesLib.anotherChatRes("blocked_device", "global");


var txt =
"<b>📊 Bot Statistics</b>\n\n<blockquote><b>👥 Total Users:</b> "+stat.value()+"\n<b>➕ New Today:</b> "+newu.value()+"</blockquote>\n\n<b>🤖 Auto Payment</b>\n<blockquote><b>💰 Total Rewards Sent:</b> "+totalWithdrawn.value()+" "+botc+"\n<b>⏳ Pending:</b> "+pending.value()+" "+botc+"\n<b>⚡ Processing Time:</b> 6.4s</blockquote>\n\n<b>💥 Manually Payment</b>\n<blockquote><b>💸 Total Rewards Sent:</b> "+totalManWithdrawn.value()+" "+botc+"\n<b>🔃 Pending:</b> "+pending_man.value()+" "+botc+"\n<b>⚡ Processing Time:</b> 12h</blockquote>\n\n<blockquote><b>👥 Invited: "+invited_you.value()+"</b>\n<b>👎 Non Invited:</b> "+non_invited.value()+"</blockquote>\n<blockquote><b>📲 Verified Devices: "+verified_device.value()+"</b>\n<b>⛔ VPN Blocked:</b> "+blocked_device.value()+"</blockquote>\n\n<b>Tap below to get started & show up in the stats!</b>"

var inlkey = [
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
});
