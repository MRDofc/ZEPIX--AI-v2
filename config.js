module.exports = {
  // === Gemini AI Settings ===
  geminiApiKey: 'YOUR_GEMINI_API_KEY_HERE', // Google AI Studio key
  aiModel: 'gemini-1.5-flash', // Or 'gemini-pro'

  // === Bot Settings ===
  botName: 'Gemini Bot',
  sessionPath: './session',
  usePairingCode: true,
  defaultPhoneNumber: '94771234567', // Default, web form එකෙන් override

  // === Auto React ===
  autoReactMessages: true,
  messageReactEmojis: ['👍', '❤️', '😂', '😲', '😢', '😠'],

  // === Status React ===
  autoReactStatus: true,
  statusReactEmoji: '❤️',

  // === Notifications ===
  sendConnectNotification: true,
  connectNotifyMessage: 'Gemini Bot is now ONLINE!',

  // === AI Reply ===
  aiReplyToStatus: true
};
