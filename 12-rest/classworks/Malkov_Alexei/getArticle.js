const axios = require('axios');
const parfUrl = 'https://models.dobro.ai/gpt2/medium/';

const getArticle = async (prompt) => {
  try {
    const res = await axios.post(parfUrl, {
      prompt,
      length: 30,
      num_samples: 1,
    },
    {
      headers: {
        //'Host': 'models.dobro.ai',
        'User-Agent': 'insomnia/2020.3.3',
        'Content-Type': 'text/plain;charset=UTF-8',
        'Accept': '*/*',
        // 'Content-Length': 58
      },
      timeout: 10000,
    });
    return res;
  } catch(e) {
    console.log(e)
  };
};

module.exports = getArticle;