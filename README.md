# ⭐ Refer & Earn Bot (REB) - Public Template

A powerful Telegram bot for Refer & Earn systems, built with **BotScripter/BB Engine**.  
Fully meets the specifications of the **BB Refer & Earn Competition**.

---

## ✨ Features

### 👥 User Side

- ✅ Mandatory **Channel Subscription**
- 🎁 **Welcome Bonus** after joining channels *(logged in History)*
- 💰 **Balance Menu**
  - Total Balance
  - Referral Balance
  - Withdrawable Balance
  - Earn Remaining to Reach Minimum Withdraw
- 🧾 **Update Wallet** with live format validation
- 💸 **Withdraw Menu**
  - Auto Withdraw *(Crypto)*
  - Manual Withdraw *(sent to admin for approval)*
- 📨 **Invite Friends** *(Rank System with progress tracking)*
- 🌳 **Referral Tree**
  - Shows referred users & earned bonuses
- 🏆 **Leaderboard**
  - Top 10 referrers with auto rewards
- 📖 **Transaction History**
  - Latest 20 shown

---

### 🛠️ Admin Panel

- ✅ Enable/Disable **Auto Withdraw**
- ✅ Approve/Decline **Manual Withdraws**
- ✅ Set **Welcome Bonus** & **Min Withdraw**
- ⏰ Schedule **Leaderboard Rewards**
- 📢 **Broadcast System** *(Text / Media / Forwards)*
- 📊 Real-time **Stats & User Insights**

---

## ⚔️ Contest Compatibility

This template fully matches the **Technical Specification** of the REB Competition and follows all **BB Contest Rules**.

### ✅ Rule-Based Compliance Checklist:

- [✓] Channel Subscription Logic  
- [✓] One-time Welcome Bonus with logging  
- [✓] Referral with bonus tracking & rewards  
- [✓] Withdrawal System with Admin Flow  
- [✓] Referral Tree Visualizer  
- [✓] Rank-based Invite Bonus  
- [✓] Leaderboard with Auto Rewarding  
- [✓] Admin Interface with all controls  
- [✓] Transaction Logging  
- [✓] Broadcast System  

---

## ⚙️ How to Use

1. Clone or Download the repo  
2. Import into **BotScripter / Bot Business**  
3. Update your **channel, wallet, and admin settings**  
4. Launch the bot and start promoting!

---

## ⚖️ License

Free to use and modify. Attribution appreciated.

---

## 🖼️ Demo Bot UI

- **User Panel: [See Here](https://ibb.co/kgcVmd4Q)**
- **Balance Menu: [See Here](https://ibb.co/nqftRfdn)**  
- **Referral Menu: [See Here](https://ibb.co/fYCG8Hpr)**
- **Transaction History: [See Here](https://ibb.co/Bhgbws4)**
- **Admin Panel: [See Here](https://ibb.co/HpYVhLkf) [See Here](https://ibb.co/4gVZZNbk) [See Here](https://ibb.co/Myfr9YZX) [See Here](https://ibb.co/KzrxyP8q) [See Here](https://ibb.co/HDZnfn4X)** 

---


# bbrebcontestbot - chat bot
It is repository for chat bot: [@bbrebcontestbot](https://t.me/bbrebcontestbot)

## What it is?
This repository can be imported to [Bots.Business](https://bots.business) as a worked chat bot.

[Bots.Business](https://bots.business) - it is probably the first CBPaaS - Chat Bot Platform as a Service.

A CBPaaS is a cloud-based platform that enables developers to create chatbots without needing to build backend infrastructure.

## Create your own bot for Telegram from this Git repo

How to create bot?
1. Create bot with [@BotFather](https://telegram.me/BotFather) and take Secret Token
2. Create bot in App and add Secret Token
3. Add Public Key from App as [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) with read access (and write access for bot exporting if you need it)
4. Do import for this git repo

Now you can talk with yours new Telegram Bot

See [more](https://help.bots.business/getting-started)

## Commands - in commands folder
File name - it is command name (Bot it can be rewritten in command description)

Command can have: `name`, `help`, `aliases` (second names), `answer`, `keyboard`, `scnarios` (for simple logic) and other options.

### Command description
It is file header:

    /*CMD
      command: /test
      help: this is help for ccommand
      need_reply: [ true or false here ]
      auto_retry_time: [ time in sec ]
      answer: it is example answer for /test command
      keyboard: button1, button2
      aliases: /test2, /test3
    CMD*/

See [more](https://help.bots.business/commands)

### Command body
It is command code in JavaScript.
Use Bot Java Script for logic in command.

For example:
> Bot.sendMessage(2+2);

See [more](https://help.bots.business/scenarios-and-bjs)


## Libraries - in libs folder
You can store common code in the libs folder. File name - it is library name.

For example code in myLib.js:

    function hello(){ Bot.sendMessage("Hello from lib!") }
    function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

    publish({
      sayHello: hello,
      sayGoodbyeTo: goodbye
    })

then you can run in any bot's command:

    Libs.myLib.hello()
    Libs.myLib.sayGoodbyeTo("Alice")

See [more](https://help.bots.business/git/library)

## Other bots example
See other bots examples in the [github](https://github.com/bots-business?utf8=✓&tab=repositories&q=&type=public&language=javascript) or in the [Bot Store](https://bots.business/)


## Other help
[Help.bots.business](https://help.bots.business)

## API
See [API](https://api.bots.business/docs#/docs/summary)


![](https://bots.business/images/web-logo.png)
