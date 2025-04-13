/*CMD
  command: /MRbroadcast
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


var text = "💭 Enter your broadcast <b>messages</b>, <b>Picture</b>, <b>Audio</b>, <b>Video</b>, <b>File</b>, <b>Stickers</b>, <b>Animation</b>, <b>Poll</b> etc..";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "🔙 Back", callback_data: "/a_back" }
  ]
];

User.setProperty("myk11", message_id, "string");

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});

Bot.runCommand("/broadcast2");
