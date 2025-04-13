/*CMD
  command: /send_final_message
  help: 
  need_reply: false
  auto_retry_time: 
  folder: del

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage({
  text: "✅ <b>Conversion Successful!</b>\n\n" +
        "▸ <b>Amount Sent:</b> 10 TON\n" +
        "▸ <b>Received:</b> 9.85 USDT\n" +
        "▸ <b>TXID:</b> <code>0x87yyg08AM61l8y</code>\n\n" +
        "<i>Funds credited to your wallet</i>",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📌 View Transaction", url: "https://tonscan.org/tx/0x87yyg08AM61l8y" }],
      [{ text: "🔄 New Conversion", callback_data: "/cx_menu" }]
    ]
  }
});
