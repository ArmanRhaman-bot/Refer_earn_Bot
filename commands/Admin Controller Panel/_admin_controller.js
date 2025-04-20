/*CMD
  command: /admin_controller
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Controller Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /a_back
  group: 
CMD*/

var w_mode = Bot.getProperty("w_mode"," ❌")
let newu = Libs.ResourcesLib.anotherChatRes("newu", "global");
var minWithdraw = Bot.getProperty("minWithdraw","0")
var withdrawStatus = Bot.getProperty("withdrawStatus","❌")
var maintenanceStatus = Bot.getProperty("maintenanceStatus","❎")
var botc = Bot.getProperty("botc")

var txt = "<b>💥 Welcome to bot admin control panel</b>\n\n–––––––––––––––––––––\n\n<b>▪️Minimum Withdraw: </b>"+minWithdraw+" "+botc+"\n\n<b>▪️Withdrawal Status:</b> "+withdrawStatus+"<b>\n\n▪️Bot Maintenance: </b>"+maintenanceStatus+"\n\n▪️<b>Withdrawal Mode:</b> "+w_mode+"\n\n"
var inlkey = [
  [{ text: "⛔ Ban", callback_data: "/ban" },
  { text: "♥️ Unban", callback_data: "/unban" }],[{ text: "➕ Add Balance", callback_data: "/add_bal" },{ text: "➖ Cut Balance", callback_data: "/cut_bal" }],[{ text: "🔍 Chcek User Balance", callback_data: "/check_bal" }],[{ text: "📨 Bot clone", callback_data: "/no_Xclaim" },{ text: "👀 Minimum Withdraw", callback_data: "/min_withdraw" }],
  [{ text: "🔊 Broadcast", callback_data: "/MRbroadcast" },{ text: "📞 Support ID", callback_data: "/supportID" }],[{ text: "📤 Withdrawal Status", callback_data: "/withdrawalStatus" },{ text: "🤖 Maintenance", callback_data: "/maintance" }],
   [{ text: "⚙️ Withdrawal Mode: "+w_mode, callback_data: "/w_mode" }],[{ text: "🆕 New User Reset ("+newu.value()+")", callback_data: "/new_u_reset" }],[{ text: "🧧 Make Gift Card", callback_data: "/gift_create" }],
  [{ text: "🔙 Back", callback_data: "/l_back" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
});
