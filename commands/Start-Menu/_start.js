/*CMD
  command: /start
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


var fullBotUsers = Bot.getProperty("wholeUsers",[])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
var already = User.getProperty("already")};

var m_channel = Bot.getProperty("m_channel","No_Channel_Set ❌")
var n_notifaction = Bot.getProperty("n_notifaction","No Notification Picker admin/channel set")
Api.sendMessage({
  text: "*🚀 Welcome to* ["+bot.name+"](t.me/"+bot.name+") – *Your Referral Rewards Hub!*\n\n*Hey there, *["+user.username+"](t.me/"+user.username+")! 👋\n\nTo start earning *exclusive rewards*, bonuses, and cash prizes, you’ll need to *join our official channel* first.\n\n✅ *Step 1:* Join [Official Channel](t.me/"+m_channel+")\n✅ *Step 2:* Come back & hit \n*I am Joined 🖤* again to unlock rewards!\n\nOnce you’re in, you’ll get:\n✨ *Your unique referral link*\n💰 *Bonus for every successful referral*\n🎁 *Exclusive perks for top referrers*\n\n*Don’t miss out!* Join now & start earning. 🚀",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "I am Joined 🖤", callback_data: "/joined" }]
    ]
  }
});


var usernameDisplay = user.username ? "[@" + user.username + "]" : "";

function touchingOwnLink() {
  Bot.sendMessage("*❌ Stop Clicking Your Own Link*");
}

function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: `<b>🫂 You Got a New </b><a href='tg://user?id=${user.telegramid}'>Referral</a>`,
    parse_mode: "html",
    disable_web_page_preview: true
  });
}

function alreadyStarted() {
  Bot.sendMessage();
}


var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted,
  linkPrefix: 'ref_'
};

RefLib.track(tracks);


if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean");
  var stat = Libs.ResourcesLib.anotherChatRes("status", "global");
  stat.add(1);
  var newu = Libs.ResourcesLib.anotherChatRes("newu", "global")
newu.add(1);
  
  Api.sendMessage({
    chat_id: ""+n_notifaction+"",
    text: 
      "➕ *New User Notification* ➕\n\n*🔸 User:* ["+user.first_name+"](t.me/"+user.username+")\n*🔸 User ID:* `"+user.telegramid+"`\n*🔸Total User's Count:* "+stat.value()+"",
    parse_mode: "markdown",
    disable_web_page_preview: true
  });
}
