/*CMD
  command: /trivia_check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Game

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let userAnswer = params;
let correct = User.getProperty("trivia_answer");
let botc = Bot.getProperty("botc", "USDT");

var txt, reward = 0;

if (userAnswer == correct) {
  txt = "✅ Correct! You earned <b>100 " + botc + "</b>!";
  reward = 100;
  
  var history = User.getProperty("history");
    if (history === undefined || history === null) {
      history = "";
    }

    history += "\n🧠 " + new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}) + ": " + reward + " " + botc + "\n (trivia_rewards) - completed";

    User.setProperty("history", history, "string");
    
    var rewardHis= User.getProperty("rewardHis");
    if (rewardHis === undefined || rewardHis === null) {
      rewardHis = "";
    }

    rewardHis += "\n🧠 " + new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"}) + ": " + reward + " " + botc + "\n (trivia_rewards) - completed";

    User.setProperty("rewardHis", rewardHis, "string");


  let balance = Libs.ResourcesLib.userRes("balance");
  let withdrawable = Libs.ResourcesLib.userRes("withdrawable");
  balance.add(reward);
  withdrawable.add(reward);
} else {
  txt = "❌ Wrong answer!\n\nCorrect Answer was: <b>" + correct + "</b>";
}

var inlkey = [[
  { text: "🔄 Play Again", callback_data: "/trivia" },
  { text: "🔙 Back", callback_data: "/game" }
]];

Api.editMessageText({
  message_id: request.message.message_id,
  text: "<b>🧠 Trivia Result</b>\n\n" + txt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: inlkey }
});
