/*CMD
  command: /invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var support_id = Bot.getProperty("support_id")
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var txt = "<i>🚫 You're banned.</i>";
  var inlkey = [[{ text: "Support Team", url: "t.me/"+support_id+"" }]];
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}


var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🛠️ Bot is under maintenance, please come back after some time.",
  show_alert: true
})
  var txt = "<i>🛠️ Bot is under maintenance, please come back after some time.</i>";
  
  var inlkey = [[{ text: "🤖 Go to Menu", callback_data: "/earn_menu" }]];
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}



var refbonus = Bot.getProperty("refbonus","0")
var currentLevelProp = User.getProperty("currentLevel") || "Rookie";
var botc = Bot.getProperty("botc", "USDT");
let referrer = Libs.ReferralLib.getAttractedBy();
referrer = referrer ? referrer.telegramid : "No Inviter";

const referrals = RefLib.getRefCount();
let myTelegramId = user.telegramid;

let invLink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","ref_");

let qrBase = "https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=";
let qrLink = qrBase + encodeURIComponent(invLink);

var inlkey = [
  [
    {
      text: "📲 QR",
      web_app: {
        url: qrLink
      }
    }
  ]
];

const LEVELS = {
  "Overlord": { min: 500, reward: 10000, emoji: "👑", next: "MAX" },
  "Diamond": { min: 100, reward: 3000, emoji: "💎", next: "Overlord" },
  "Platinum": { min: 50, reward: 1500, emoji: "🔥", next: "Diamond" },
  "Gold": { min: 20, reward: 800, emoji: "🏆", next: "Platinum" },
  "Silver": { min: 5, reward: 350, emoji: "⭐", next: "Gold" },
  "Rookie": { min: 0, reward: 100, emoji: "😎", next: "Silver" }
};


let currentLevel, nextLevel, remainingRefs, rewardAmount;
for (const [level, config] of Object.entries(LEVELS)) {
  if (referrals >= config.min) {
    currentLevel = level;
    nextLevel = LEVELS[level].next;
    remainingRefs = LEVELS[nextLevel] ? LEVELS[nextLevel].min - referrals : 0;
    rewardAmount = config.reward;
    break;
  }
}


function getProgressBar(current, nextMin) {
  const totalBars = 10;
  let progress = 0;
  
  if (nextLevel === "MAX") {
    progress = 1; 
  } else {
    const currentLevelMin = LEVELS[currentLevel].min;
    const nextLevelMin = LEVELS[nextLevel].min;
    progress = (referrals - currentLevelMin) / (nextLevelMin - currentLevelMin);
  }
  
  const filledBars = Math.round(progress * totalBars);
  const emptyBars = totalBars - filledBars;
  
 
  let progressBar = '▓'.repeat(filledBars) + '░'.repeat(emptyBars);
  

  const percentage = Math.round(progress * 100);
  
  return `${progressBar} ${percentage}%`;
}

const progressBar = getProgressBar(currentLevel, LEVELS[nextLevel]?.min || 0);


if (currentLevel !== currentLevelProp) {
  if (currentLevelProp !== "Rookie") { 
    let balance = Libs.ResourcesLib.userRes("balance");
    let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
    
    balance.add(rewardAmount);
    withdrawable.add(rewardAmount);
    
    
    var history = User.getProperty("history") || "";
    history += `\n🏆 ${new Date().toLocaleString()}: ${rewardAmount} ${botc} (${currentLevel} level reward)`;
    User.setProperty("history", history, "string");
    
    
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: `🎉 Level Up Reward!\n\n` +
            `🆙 New Level: ${currentLevel} ${LEVELS[currentLevel].emoji}\n` +
            `💰 Reward: ${rewardAmount} ${botc} added to your balance!`,
      show_alert: true
    });
  }
  User.setProperty("currentLevel", currentLevel, "string");
}


var motivationTip = "";
if (nextLevel === "MAX") {
  motivationTip = "🌟 You've reached the pinnacle! Maintain your position.";
} else {
  motivationTip = `Need <b>${remainingRefs}</b> more referrals to reach ` +
                 `<b>${nextLevel} ${LEVELS[nextLevel]?.emoji || ""}</b> level!`;
}

var lvlrewards = `<b>🎁 Level Up Reward:</b> `;
if (nextLevel !== "MAX") {
  lvlrewards += `Reach <b>${nextLevel}</b> to get <b>${LEVELS[nextLevel].reward} ${botc}</b>`;
} else {
  lvlrewards += "You've unlocked all rewards!";
}


var txt = `
<b>📊 Your Referral Status:</b>\n\n<blockquote><b> ▸ Current Level:</b> <code>${currentLevel} ${LEVELS[currentLevel].emoji}</code>
 <b>▸ Next Target:</b> <code>${nextLevel} ${LEVELS[nextLevel]?.emoji || ""}</code>
 <b>▸ Progress:</b> <code>${progressBar}</code>
 <b>▸ Total Invited:</b> <code>${referrals}/${LEVELS[nextLevel]?.min || LEVELS[currentLevel].min}</code>
 <b>▸ Your Inviter:</b> <code>${referrer}</code></blockquote>

🔗 <b>Your Invite Link:</b> 
<code>${invLink}</code>

<blockquote><b>🎁 Referral Bonus:</b> <code>${refbonus} ${botc} </code></blockquote>

<b>💡 Pro Tip:</b> <i>${motivationTip}</i>

<b>🗓 Level Rewards:</b>
<blockquote expandable> Rookie 😎 → 0 refs → 100 ${botc}
 Silver ⭐ → 5 refs → 350 ${botc}
 Gold 🏆 → 20 refs → 800 ${botc}
 Platinum 🔥 → 50 refs → 1500 ${botc}
 Diamond 💎 → 100 refs → 3000 ${botc}
 Overlord 👑 → 500 refs → 10000 ${botc}</blockquote>`;

var inlkey = [
  [
    {
      text: "📓 Save QR Code",
      web_app: {
        url: qrLink
      }
    }
  ],
  [{ text: "COPY LINK", copy_text: {text: ""+invLink+""}},
   { text: "SHARE", switch_inline_query: "**💸 Passive income unlocked!**\n__😎 No investment - just share & earn:__\n\n**✅ Join with link:** "+invLink+""}],
  [{ text: "🌲 My Referrals Trees", callback_data: "/my_ref" }],
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]
];



Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
});