/*CMD
  command: /reply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Support 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var text = "*📝 Enter the solution here to send a reply message to the user...*";
var message_id = request.message.message_id;
var buttons = [
  [
    { text: "❌ Cancel", callback_data: "/rep_can" }]
];


User.setProperty("myk11", message_id, "string");


Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: buttons
  }
});


Bot.runCommand("/reply2");
