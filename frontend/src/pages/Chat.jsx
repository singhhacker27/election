import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, Loader2, Info } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! I am VoteIQ, your Indian Election Guide. How can I help you understand our democratic process today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const quickQuestions = [
    "How do I register to vote?",
    "What is an EVM?",
    "What is the Model Code of Conduct?",
    "Tell me about the counting process.",
    "How can I check my name in the voter list?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (directMessage = null) => {
    const messageText = directMessage || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    if (!directMessage) setInput('');
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage].map(msg => ({ role: msg.role, content: msg.content }))
        }),
      });

      const data = await response.json();
      if (data.content && data.content[0]) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content[0].text }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'I am sorry, I encountered an error. Please make sure the backend is running and the API key is configured.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col h-[80vh]">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-navy-blue">VoteIQ Assistant</h1>
        <p className="text-gray-500">Ask anything about ECI, Voting, or Election Rules</p>
      </div>

      <div className="flex-grow bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Messages area */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6 scroll-smooth"
        >
          {messages.length === 1 && (
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-400 mb-3 text-center uppercase tracking-widest">Suggested Topics</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="px-4 py-2 bg-saffron/5 border border-saffron/20 rounded-full text-sm text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`shrink-0 h-10 w-10 rounded-2xl flex items-center justify-center shadow-lg ${msg.role === 'user' ? 'bg-navy-blue text-white' : 'bg-saffron text-white'}`}>
                  {msg.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
                </div>
                <div className={`p-4 rounded-[1.5rem] shadow-sm ${msg.role === 'user' ? 'bg-navy-blue text-white rounded-tr-none' : 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100'}`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <Loader2 className="h-5 w-5 text-saffron animate-spin" />
                <span className="text-sm text-gray-500 font-medium">VoteIQ is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about voter ID, EVMs, or polling process..."
              className="w-full bg-white p-5 pr-16 rounded-2xl shadow-inner border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all text-lg"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`absolute right-2 top-2 h-12 w-12 rounded-xl flex items-center justify-center transition-all ${input.trim() ? 'bg-saffron text-white shadow-lg hover:bg-saffron-dark' : 'bg-gray-200 text-gray-400'}`}
            >
              <Send className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <Info className="h-3 w-3" />
            Powered by Claude 3.5 Sonnet. Information is for educational purposes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
