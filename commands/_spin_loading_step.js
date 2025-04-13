/*CMD
  command: /spin_loading_step
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

let index = options.index;
var loadingPhases = [
  "▰▱▱▱▱ Loading 20%",
  "▰▰▱▱▱ Loading 40%",
  "▰▰▰▱▱ Loading 60%",
  "▰▰▰▰▱ Loading 80%",
  "▰▰▰▰▰ Loading 100%\n\n✅ Ready!"
];

if (index >= loadingPhases.length) {
  Bot.runCommand({ "/game",
    options: { message_id: options.message_id }
  });
  return;
}

Api.editMessageText({
  message_id: options.message_id,
  text: "<b>🎰 Spin & Win Zone</b>\n\n" + "<code>" + loadingPhases[index] + "</code>",
  parse_mode: "html"
});

index++;
Bot.Bot.runCommand({ "/spin_loading_step",
  options: {
    message_id: options.message_id,
    index: index
  },
  run_after: 1
});
