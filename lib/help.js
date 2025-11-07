// lib/help.js
const fs = require('fs');
const path = require('path');

module.exports = async (sock, jid) => {
  const pluginDir = path.join(__dirname);
  const files = fs.readdirSync(pluginDir).filter(f => f.endsWith('.js') && f !== 'index.js');
  const pluginList = files.map(f => `• /${path.basename(f, '.js')}`).join('\n');

  const helpText = `*Available Commands:*\n${pluginList}\n\n_Reply with any command!_`;

  const buttons = [
    { buttonId: 'weather', buttonText: { displayText: 'Weather' }, type: 1 },
    { buttonId: 'joke', buttonText: { displayText: 'Joke' }, type: 1 }
  ];

  await sock.sendMessage(jid, { text: helpText, buttons });
};
