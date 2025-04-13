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

Api.deleteMessage({chat_id: chat.chatid, message_id: request.message_id});
var ont = User.getProperty("myk11");

var fullBotUsers = Bot.getProperty("wholeUsers")
var text =
      "<b>💥 Broadcast Sent to all users</b>"
var buttons = [
  [{ text: "🔙 Back", callback_data: "/a_back" }]]
    Api.editMessageText({
  text: text,
  message_id: ont,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: buttons
  }
});


var usrname = "Admin"
if (!user.username) {
  var usrname =
    '<a href="tg://user?id=' + user.telegramid + '">' + user.first_name + "</a>"
}

if (request.poll) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    Api.forwardMessage({
      chat_id: info,
      from_chat_id: user.telegramid,
      message_id: request.message_id
    })
  }
  return
}



if (request.voice) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    if (!request.caption) {
      Api.sendVoice({ chat_id: info, voice: request.voice.file_id })
    }
    if (request.caption) {
      Api.sendVoice({
        chat_id: info,
        voice: request.voice.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}


if (request.video) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    if (!request.caption) {
      Api.sendVideo({ chat_id: info, video: request.video.file_id })
    }
    if (request.caption) {
      Api.sendVideo({
        chat_id: info,
        video: request.video.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}


if (request.document) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    if (!request.caption) {
      Api.sendDocument({ chat_id: info, document: request.document.file_id })
    }
    if (request.caption) {
      Api.sendDocument({
        chat_id: info,
        document: request.document.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}


if (request.audio) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    if (!request.caption) {
      Api.sendAudio({ chat_id: info, audio: request.audio.file_id })
    }
    if (request.caption) {
      Api.sendAudio({
        chat_id: info,
        audio: request.audio.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}

if (request.photo[0]) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    if (!request.caption) {
      Api.sendPhoto({ chat_id: info, photo: request.photo[0].file_id })
    }
    if (request.caption) {
      Api.sendPhoto({
        chat_id: info,
        photo: request.photo[0].file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}


if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id })
  }
  return
}

var promo = "Important"
if (request.entities[0]) {
  if (request.entities[0].type == "url") {
    var promo = "Promotional"
  }
}

if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendMessage({
      chat_id: info,
      text: ""
    })
    Api.sendAnimation({ chat_id: info, animation: request.animation.file_id })
  }
  return
}

if (message.length > 1000) {
  Bot.sendMessage("Message Too Big.")
  return
}
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text:
      "" +
      message +
      "",
    parse_mode: "HTML"
  })
}

