/*CMD
  command: /log_panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /l_back
  group: 
CMD*/

var cd = "<b>DOGS:</b>\nMinimum: 5 DOGS (0.0006$)\nFees: 100 DOGS (0.01$)\n\n––––––––\n<b>POL:</b>\nMinimum: 0.001 POL (0.00016$)\nFees: 0.01 POL (0.001$)\n\n––––––––\n<b>TON:</b>\nMinimum: 0.05 TON (0.15$)\nFees: 0.0008 TON (0.022$)"
var ip_verify = Bot.getProperty("ip_verify","❓")
var m_channel = Bot.getProperty("m_channel","No_Channel_Set ❌")
var n_notifaction = Bot.getProperty("n_notifaction","No Notification Picker admin/channel set")
var rd = Bot.getProperty("rd","0000-00-00 00:00")
var main_menu_mgs = Bot.getProperty("main_menu_mgs"," 🎉 Welcome to the Refer & Earn Bot! \n\nHey there! 👋 We’re thrilled to have you here. Get ready to earn amazing rewards just by inviting your friends! 🚀  \n\n<b>🔹 Share your referral link  \n🔹 Friends Joined & complete actions  \n🔹 You both get bonuses! 💰</b>\n\nStart sharing now and watch your rewards grow! 🌟 ")
var wlc_bonus = Bot.getProperty("wlc_bonus","No Wlc Bonus set ❌")
var botc = Bot.getProperty("botc","No currency set ❌")

var txt = "<b>💥 Welcome to bot admin panel</b>\n\n–––––––––––––––––––––\n\n<b>▪️Join Channel: </b>@"+m_channel+"\n\n<b>▪️Notification Picker: </b>"+n_notifaction+"<b>\n\n▪️Menu Message: </b><blockquote expandable>"+main_menu_mgs+"</blockquote>\n\n<b>▪️Welcome Bonus:</b> "+wlc_bonus+" "+botc+"\n\n<b>▪️Bot Currency:</b> "+botc+"\n\n<b>▪️Distribution:</b> "+rd+"\n\n<b>▪️IP Checker:</b> "+ip_verify+"\n\n<b>▪️Low Fees Currency:</b>\n<blockquote expandable>"+cd+"</blockquote>"
var inlkey = [
  [{ text: "Join Channel Set", callback_data: "/m_channel" }],
  [{ text: "New user notification Set", callback_data: "/new_user_notification_set" }],[{ text: "Menu Message Set", callback_data: "/main_menu_mgs" }],[{ text: "Welcome Bonus Set", callback_data: "/wlc_bonus_set" }],[{ text: "Bot Currency", callback_data: "/botc" }],[{ text: "📅 Reward Distribute Date", callback_data: "/rd" }],[{ text: "🔥 Leaderboard Rewards Distribute", callback_data: "/distribute_rewards" }],[{ text: "🤖 IP Checker: "+ip_verify, callback_data: "/ip_verify" }],[{ text: "🎮 Admin Controller", callback_data: "/admin_controller" }],
  [{ text: "⚙️ Important Settings", callback_data: "/important_settings" }],
  [{ text: "🔙 Back", callback_data: "/panel" }]
];

Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: inlkey }
});
