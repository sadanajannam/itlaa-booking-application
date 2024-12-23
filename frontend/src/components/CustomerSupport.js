import React, { useState } from 'react';
import axios from 'axios';

const CustomerSupport = () => {
  const [customerName, setCustomerName] = useState('');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Send the message to the backend API
      const response = await axios.post('http://localhost:5000/api/support', {
        customerName,
        message,
      });

      // Update chat history with customer message and support reply
      setChatHistory([...chatHistory, { user: 'customer', text: message }, { user: 'support', text: response.data.reply }]);
      setMessage('');
    } catch (err) {
      setError('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="support-chat">
      <h2>Customer Support</h2>
      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`message ${chat.user}`}>
            <p>{chat.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CustomerSupport;
