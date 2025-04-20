/*CMD
  command: /broadcast2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Start-Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id });

var ont = User.getProperty("myk11");


var fullBotUsers = Bot.getProperty("user_list", []);

var text = "<b>💥 Broadcast Sent to all users</b>";
var buttons = [[{ text: "🔙 Back", callback_data: "/a_back" }]];

Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});


var usrname = user.username
  ? "@" + user.username
  : '<a href="tg://user?id=' + user.telegramid + '">' + user.first_name + "</a>";


function sendToAllUsers(sendFunc) {
  for (var i in fullBotUsers) {
    var uid = fullBotUsers[i];
    sendFunc(uid);
  }
}

//POLL
if (request.poll) {
  sendToAllUsers(function (uid) {
    Api.forwardMessage({
      chat_id: uid,
      from_chat_id: user.telegramid,
      message_id: request.message.message_id
    });
  });
  return;
}

// VOICE
if (request.voice) {
  sendToAllUsers(function (uid) {
    Api.sendVoice({
      chat_id: uid,
      voice: request.voice.file_id,
      caption: request.caption || undefined,
      parse_mode: "HTML"
    });
  });
  return;
}

// VIDEO
if (request.video) {
  sendToAllUsers(function (uid) {
    Api.sendVideo({
      chat_id: uid,
      video: request.video.file_id,
      caption: request.caption || undefined,
      parse_mode: "HTML"
    });
  });
  return;
}

// DOCUMENT
if (request.document) {
  sendToAllUsers(function (uid) {
    Api.sendDocument({
      chat_id: uid,
      document: request.document.file_id,
      caption: request.caption || undefined,
      parse_mode: "HTML"
    });
  });
  return;
}

// AUDIO
if (request.audio) {
  sendToAllUsers(function (uid) {
    Api.sendAudio({
      chat_id: uid,
      audio: request.audio.file_id,
      caption: request.caption || undefined,
      parse_mode: "HTML"
    });
  });
  return;
}

// PHOTO
if (request.photo && request.photo[0]) {
  sendToAllUsers(function (uid) {
    Api.sendPhoto({
      chat_id: uid,
      photo: request.photo[0].file_id,
      caption: request.caption || undefined,
      parse_mode: "HTML"
    });
  });
  return;
}

// STICKER
if (request.sticker) {
  sendToAllUsers(function (uid) {
    Api.sendSticker({
      chat_id: uid,
      sticker: request.sticker.file_id
    });
  });
  return;
}

// ANIMATION
if (request.animation) {
  sendToAllUsers(function (uid) {
    Api.sendAnimation({
      chat_id: uid,
      animation: request.animation.file_id
    });
  });
  return;
}

// Message too long check
if (message && message.length > 10000) {
  Bot.sendMessage("Message Too Big.");
  return;
}

// Text Message
if (message) {
  sendToAllUsers(function (uid) {
    Api.sendMessage({
      chat_id: uid,
      text: message,
      parse_mode: "HTML"
    });
  });
}
