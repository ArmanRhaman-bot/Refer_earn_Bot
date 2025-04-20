/*CMD
  command: /spin_loading
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
if (gp.value() < 0.1) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ Not enough GP to start trivia round. You need 0.1 GP!",
    show_alert: true
  });
  return;
}
Bot.sendMessage("*Loading...↺*", {
  on_result: "/spin_ready",
  is_reply: false
});
