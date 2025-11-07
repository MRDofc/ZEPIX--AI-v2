const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { startBot, isConnected } = require('./bot');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'html'); // For simple HTML

// Serve web interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Generate Pairing Code
app.post('/generate-code', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone number required' });

    // Start bot with phone (auto connects after link)
    await startBot(phone);
    // Note: Code is logged in bot.js, but for web: simulate/return placeholder (actual code in console/webhook if needed)
    // In practice, use a global var or event emitter to capture code
    res.json({ code: '12345678' }); // Placeholder - integrate event for real code
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Status Check
app.get('/status', (req, res) => {
  res.json({ connected: isConnected });
});

// Start Bot on Server Start (with default phone if no env)
startBot();

// Listen
app.listen(PORT, () => {
  console.log(`Web server on port ${PORT}`);
});
