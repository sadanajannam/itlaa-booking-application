const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  const { customerName, message } = req.body;

  try {
    // Save message to the database
    const newMessage = new Message({
      customerName,
      message,
    });
    await newMessage.save();

    // Send a mock reply
    res.status(200).json({
      reply: 'Thank you for your message. Our team will get back to you soon.',
      customerMessage: message,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { sendMessage };
