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

Bot.sendMessage("*Loading...↺*", {
  on_result: "/spin_ready",
  is_reply: false
});
