/*CMD
  command: /trivia_question
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

var gp = Libs.ResourcesLib.userRes("gp");
var botc = Bot.getProperty("botc", "USDT");

if (gp.value() < 0.1) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ Not enough GP to start trivia round. You need 0.1 GP!",
    show_alert: true
  });
  return;
}

gp.remove(0.1);

// Random trivia question set
var trivia = [
  {
    question: "What has to be broken before you can use it?",
    options: ["A promise", "An egg", "A heart", "A code"],
    answer: "An egg"
  },
  {
    question: "What is the only letter not appearing in the periodic table of elements?",
    options: ["J", "Q", "X", "Z"],
    answer: "J"
  },
  {
    question: "Who was the first person to win two Nobel Prizes in different scientific fields?",
    options: ["Niels Bohr", "Linus Pauling", "Marie Curie", "Albert Einstein"],
    answer: "Marie Curie"
  },
  {
    question: "Which novel starts with the line, “It was the best of times, it was the worst of times”?",
    options: ["The Great Gatsby", "A Tale of Two Cities", "Moby Dick", "Pride and Prejudice"],
    answer: "A Tale of Two Cities"
  },
  {
    question: "What is the only even prime number?",
    options: ["3", "1", "5", "2"],
    answer: "2"
  },
  {
    question: "Who was the first person to win two Nobel Prizes in different scientific fields?",
    options: ["Niels Bohr", "Linus Pauling", "Marie Curie", "Albert Einstein"],
    answer: "Marie Curie"
  },
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    options: ["Echo", "Wind", "Ghost", "Silence"],
    answer: "Echo"
  }
];

let q = trivia[Math.floor(Math.random() * trivia.length)];

User.setProperty("trivia_answer", q.answer, "string");

let btns = q.options.map(opt => [{ text: opt, callback_data: "/trivia_check " + opt }]);

var txt = "<b>🧠 Trivia Challenge</b>\n\n" +
"<i>" + q.question + "</i>\n\n" +
"Answer correctly to win <b>50 " + botc + "</b>!\nYou have only 1 chance.";

Api.editMessageText({
  message_id: options.result.message_id,
  text: txt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: btns }
});
