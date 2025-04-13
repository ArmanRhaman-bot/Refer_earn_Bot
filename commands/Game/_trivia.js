/*CMD
  command: /trivia
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

Bot.sendMessage("*Loading Trivia...*", {
  on_result: "/trivia_question",
  is_reply: false
});
