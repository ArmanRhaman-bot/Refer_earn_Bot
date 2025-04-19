# ⭐ Refer & Earn Bot (REB) - Public Template

A powerful & production-ready Telegram bot for **Refer & Earn systems**, built using **BotScripter (BB Engine)**.  
Designed specifically to meet all requirements of the **BB Refer & Earn Bot Competition**.

---

## ✨ Key Features

### 👤 User Interface

- 🔒 **Mandatory Channel Subscription**
- 🎉 One-time **Welcome Bonus** *(recorded in History)*
- 💼 **Balance Overview**
  - Total / Referral / Withdrawable Balance
  - See how much more to earn to unlock Withdraw
- 🔗 **Wallet Binding** with **live format validation**
- 💸 **Withdraw Options**
  - Auto Withdraw to any crypto wallet (5 sec processing)
  - Manual Withdraw with Admin Approval flow
- 👥 **Invite Friends** with Rank-Based Bonuses & Progress Bar
- 🌳 **Referral Tree**: Visual & Bonus tracking of your team
- 🏆 **Leaderboard**
  - Top 10 referrers
  - Auto reward distribution by admin-set date
- 📜 **Transaction History** (last 20 entries)

---

### 💳 Payment Request System

Allow users to **send payment requests** to other bot users. This system supports peer-to-peer microtransactions within the bot ecosystem.

#### 📤 Requesting a Payment

- Users can send a **payment request with amount** to another user's ID
- Receiver gets a **confirm button** to accept the request
- Requested amount must be available in the receiver’s balance

#### ✅ Accepting a Request

- Receiver’s withdrawable balance is **deducted**
- Requester’s balance is **increased**
- Both users get a **success message**
- Requester’s **transaction history** is updated:


#### ❌ Rejection or Insufficient Balance

- Auto validation for available balance
- Requests are **one-time only** and can’t be re-used

---

### 🧧 Redeem & Create Code

#### 🛠️ Admin Features (Create)

- Admins can create codes **without amount limits**
- Any **code name** allowed (no restrictions)
- Codes can be posted directly to a **redeem channel**

#### 👥 User Features (Create)

- Users can generate codes using **their balance**
- Cost = `amount × max claims`
- One unique name per code
- Created codes can be **shared to others**
- Users receive **notification** when someone claims their code

#### 🎁 Redeem Features

- Admins can redeem any code (self-redeem has no alert)
- Invalid or expired codes show **"Incorrect Code"**
- Each user can claim each code **only once**
- On success, claimed amount is **added to user's balance**

---

### 🛠️ Admin Control Panel

- Toggle **Auto/Manual Withdraw** mode
- Review & Act on **Withdraw Requests**
- Set **Welcome Bonus**, **Min Withdraw**, and **Referral Rewards**
- Maintenance mode On/Off broadcast 
- Withdraw Mode On/Off broadcast 
- Schedule **Leaderboard Rewards**
- Run **Broadcasts** (Text / Media / Forwards)
- Access live **User Stats**, **Growth Logs**, and more

---

## ✅ BB Competition Compatibility

This bot fulfills **all rules & scoring criteria** for the contest.

### Compliance Checklist:

- [x] Channel Join Enforcement  
- [x] Welcome Bonus (Logged)  
- [x] Invite with Rank-Based Bonus  
- [x] Wallet & Balance Validation  
- [x] Manual + Auto Withdraw Systems  
- [x] Admin Panel with All Controls  
- [x] Leaderboard + Referral Tree  
- [x] Transaction History Logging  
- [x] Broadcast Tools  
- [x] BB-Ready Clean Code  
- [x] Peer-to-Peer Payment Requests  

---

### 🔐 Captcha & IP Verification

- Intelligent **Captcha system** triggered via `/verify`
- Checks for **real user IP** and blocks **VPN / multi-account abuse**
- Ensures only **real users** can access the bot's core functions
- **Admin users** automatically bypass captcha & verification for seamless control

---

## 🧪 Live Demo (Screenshots)

- **User Panel & Admin Panel:** [View All Screens](https://bit.ly/4cDjF2C)

---

## 🧑‍💻 Developer

**[@arman_rhaman](https://t.me/arman_rhaman)**  
Feel free to fork, contribute, or connect!

---

## ⚖️ License

Open-source and free to use. Attribution appreciated.

---

## 🛠️ Technology Used

- **Bot Business Scripting (BJS)**  
Custom JavaScript-like scripting language used in [BotScripter](https://botscripter.com) and [Bot Business](https://botbusiness.io), designed specifically for building Telegram bots.

- **No External Frameworks**  
Fully built using native BJS without relying on any third-party libraries, ensuring optimal performance within the Bot Business ecosystem.

- **Modular Design**  
Structured into reusable `commands`, `conditions`, and `callbacks` to maintain clean and scalable code.