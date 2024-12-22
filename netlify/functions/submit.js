const axios = require('axios');

exports.handler = async (event, context) => {
  console.log("Request received:", event.body); // Log incoming data
  const body = JSON.parse(event.body);
  const message = body.message;

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Message is required.' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  const BOT_TOKEN = '7268474710:AAEKnDq7vcix_xUGrqI5gBU5Yp4C27T82Pk';
  const CHAT_ID = '6390370714';

  try {
    const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });

    if (response.data.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: 'Failed to send message.' }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Error sending message.' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
