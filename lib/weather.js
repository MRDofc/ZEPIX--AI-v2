// lib/weather.js
module.exports = async (sock, jid, args = '') => {
  const city = args.trim() || 'Colombo';
  const response = `Weather in ${city}: Sunny, 30°C (Demo)`;

  const buttons = [
    { buttonId: 'weather_colombo', buttonText: { displayText: 'Colombo' }, type: 1 },
    { buttonId: 'weather_ny', buttonText: { displayText: 'New York' }, type: 1 },
    { buttonId: 'menu', buttonText: { displayText: 'Back to Menu' }, type: 1 }
  ];

  await sock.sendMessage(jid, {
    text: response,
    buttons
  });
};
