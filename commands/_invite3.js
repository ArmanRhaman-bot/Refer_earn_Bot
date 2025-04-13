/*CMD
  command: /invite3
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

// 1. Ban Check
var ban = Bot.getProperty(user.telegramid);
if (ban === "Ban") {
  var txt = "<i>🚫 You're banned.</i>";
  var inlkey = [[{ text: "Support Team", url: "t.me/arman_rhaman" }]];
  Api.editMessageText({
    message_id: request.message.message_id,
    text: txt,
    parse_mode: "html",
    reply_markup: { inline_keyboard: inlkey }
  });
  return;
}

// 2. Maintenance Check
var maintenanceStatus = Bot.getProperty("maintenanceStatus");
if (maintenanceStatus === "On") {
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

// 3. Level Reward System
var refbonus = Bot.getProperty("refbonus","0")
var currentLevelProp = User.getProperty("currentLevel") || "Rookie";
var botc = Bot.getProperty("botc", "USDT");
let referrer = Libs.ReferralLib.getAttractedBy();
referrer = referrer ? referrer.telegramid : "No Inviter";

const referrals = RefLib.getRefCount();
const invLink = RefLib.getRefLink(bot.name, "ref_"); 

// Level Configuration
const LEVELS = {
  "Overlord": { min: 500, reward: 5, emoji: "👑", next: "MAX" },
  "Diamond": { min: 100, reward: 1, emoji: "💎", next: "Overlord" },
  "Platinum": { min: 50, reward: 0.8, emoji: "🔥", next: "Diamond" },
  "Gold": { min: 20, reward: 0.5, emoji: "🏆", next: "Platinum" },
  "Silver": { min: 5, reward: 0.2, emoji: "⭐", next: "Gold" },
  "Rookie": { min: 0, reward: 0, emoji: "😎", next: "Silver" }
};

// Determine current level
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

// Check for level up and award bonus
if (currentLevel !== currentLevelProp) {
  if (currentLevelProp !== "Rookie") { // Skip initial level
    let balance = Libs.ResourcesLib.userRes("balance");
    let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
    
    balance.add(rewardAmount);
    withdrawable.add(rewardAmount);
    
    // Add to history
    var history = User.getProperty("history") || "";
    history += `\n🏆 ${new Date().toLocaleString()}: ${rewardAmount} ${botc} (${currentLevel} level reward)`;
    User.setProperty("history", history, "string");
    
    // Send reward notification
    Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: `🎉 Level Up Reward!\n\n` +
      `🆙 New Level: ${currentLevel} ${LEVELS[currentLevel].emoji}\n` +
      `💰 Reward: ${rewardAmount} ${botc} added to your balance!`,
  show_alert: true
},
      { parse_mode: "HTML" }
    );
  }
  User.setProperty("currentLevel", currentLevel, "string");
}

// Prepare display text
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

// Build message
var txt = `
<b>📊 Your Referral Status:</b>\n\n<blockquote><b> ▸ Current Level:</b> <code>${currentLevel} ${LEVELS[currentLevel].emoji}</code>
 <b>▸ Next Target:</b> <code>${nextLevel} ${LEVELS[nextLevel]?.emoji || ""}</code>
 <b>▸ Target Refers:</b> <code>${LEVELS[nextLevel]?.min || ""}</code>
 <b>▸ Total Invited:</b> <code>${referrals}</code>
 <b>▸ Your Inviter:</b> <code>${referrer}</code></blockquote>

🔗 <b>Your Invite Link:</b> 
<code>${invLink}</code>

<blockquote><b>🎁 Referral Bonus:</b> <code>${refbonus} ${botc} </code></blockquote>

<b>💡 Pro Tip:</b> <i>${motivationTip}</i>

<b>🗓 Level Rewards:</b>
<blockquote expandable> Rookie 😎 → 0 refs → 0 ${botc}
 Silver ⭐ → 5 refs → 0.1 ${botc}
 Gold 🏆 → 20 refs → 0.2 ${botc}
 Platinum 🔥 → 50 refs → 0.3 ${botc}
 Diamond 💎 → 100 refs → 0.5 ${botc}
 Overlord 👑 → 500 refs → 1 ${botc}</blockquote>`;

var inlkey = [[{ text: "COPY LINK", copy_text: {text: ""+invLink+""}},{ text: "SHARE", switch_inline_query: "**💸 Passive income unlocked!**\n__😎 No investment - just share & earn:__\n\n**✅ Join with link:** "+invLink+""}],
  [{ text: "👥 My Referrals", callback_data: "/my_ref2" },{ text: "Invite 2", callback_data: "/invite2" }],
  [{ text: "🔙 Back", callback_data: "/earn_menu" }]
];

Api.editMessageText({
  message_id: request.message.message_id,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
});
