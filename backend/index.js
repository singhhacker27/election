const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Anthropic = require('@anthropic-ai/sdk');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Security Headers
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: messages,
      system: "You are VoteIQ, a friendly and knowledgeable AI assistant specializing in the Indian election system. Your goal is to educate users about the voting process, eligibility, the role of the Election Commission of India (ECI), and other electoral concepts in a simple, engaging manner. Use a conversational tone and explain complex terms easily.",
    });

    res.json(response);
  } catch (error) {
    console.error('Claude API Error:', error);
    res.status(500).json({ error: 'Failed to fetch response from Claude' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
