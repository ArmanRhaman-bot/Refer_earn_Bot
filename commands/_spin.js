/*CMD
  command: /spin
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

if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}
Bot.sendMessage("*⏳ Loading...*", {
  parse_mode: "Markdown",
  on_result: "/spin2",
  is_reply: false
});
