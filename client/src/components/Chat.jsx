import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaMicrophone } from 'react-icons/fa';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const chatPanelRef = useRef(null);
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();

  // Set default voice for speech
  useEffect(() => {
    const interval = setInterval(() => {
      const voices = synth.getVoices();
      if (voices.length > 0) {
        msg.voice = voices.find(voice => voice.lang === 'en-US') || voices[0];
        clearInterval(interval);
      }
    }, 200);
  }, []);

  // Scroll to bottom on message update
  useEffect(() => {
    chatPanelRef.current?.scrollTo(0, chatPanelRef.current.scrollHeight);
  }, [messages]);

  // Welcome message on load
  useEffect(() => {
    const welcome = "🌱🌾 Welcome to Krishi AI !! 🌾🌱 Hi there! I'm Krishi AI, your virtual assistant for Agriculture. How can I assist you today?";
    appendMessage(welcome, false);
  }, []);

  const appendMessage = (text, isUser) => {
    setMessages(prev => [...prev, { text, isUser }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    appendMessage(input, true);
    setInput('');
    setIsTyping(true);

    try {
      const res = await axios.post('http://localhost:5000/ask', new URLSearchParams({ messageText: input }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const reply = res.data.answer;
      appendMessage(reply, false);

      if (voiceEnabled && 'speechSynthesis' in window) {
        msg.text = reply;
        synth.speak(msg);
      }
    } catch (err) {
      console.error(err);
      appendMessage('❌ Error: Could not connect to server.', false);
    } finally {
      setIsTyping(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('⚠️ Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setInput(result);
      setTimeout(handleSend, 300);
    };

    recognition.onerror = (event) => {
      console.error('Speech error:', event.error);
      appendMessage('⚠️ Could not capture voice input.', false);
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div id="/chat" className="chat-container w-[470px] h-[650px] bg-green-200 bg-opacity-90 rounded-2xl shadow-xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="chat-header bg-teal-400 text-white p-4 flex items-center">
        <div className="logo-circle w-[43px] h-[43px] bg-white rounded-full flex justify-center items-center mr-3">
          <img src="/robo.png" alt="Logo" className="w-[90%] h-[90%] object-contain" />
        </div>
        <h1 className="text-xl font-medium">Krishi AI</h1>
      </div>

      {/* Messages */}
      <div ref={chatPanelRef} className="chat-messages flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message max-w-[80%] p-3 rounded-2xl text-sm break-words ${
              msg.isUser ? 'bg-teal-400 text-white self-end ml-auto' : 'bg-green-100 text-gray-800 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator bg-green-100 text-gray-800 p-3 rounded-2xl text-sm flex gap-1">
            <span className="animate-bounce w-2 h-2 bg-teal-400 rounded-full"></span>
            <span className="animate-bounce w-2 h-2 bg-teal-400 rounded-full delay-150"></span>
            <span className="animate-bounce w-2 h-2 bg-teal-400 rounded-full delay-300"></span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="chat-input p-4 bg-gray-100 flex items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <button
          onClick={handleSend}
          className="ml-2 w-10 h-10 bg-teal-400 text-white rounded-full flex items-center justify-center hover:bg-teal-500"
        >
          <FaPaperPlane />
        </button>
        <button
          onClick={handleVoiceInput}
          className="ml-2 w-10 h-10 bg-teal-400 text-white rounded-full flex items-center justify-center hover:bg-teal-500"
        >
          <FaMicrophone />
        </button>
      </div>

      {/* Footer */}
      <div className="chat-footer p-3 bg-gray-100 flex justify-between items-center">
        <button
          onClick={() => setMessages([])}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Clear Chat
        </button>
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            className="mr-2"
            checked={voiceEnabled}
            onChange={(e) => {
              setVoiceEnabled(e.target.checked);
              if (!e.target.checked && synth.speaking) synth.cancel();
            }}
          />
          Enable voice reading
        </label>
      </div>
    </div>
    </div>
  );
};

export default Chat;
