const axios = require('axios')
const parfUrl = "https://models.dobro.ai/gpt2/medium/";

module.exports = {
  fetchData: async (data, length= 30, num_samples= 4) => {
    return axios.post(parfUrl, {
        prompt: data,
        length: length,
        num_samples: num_samples,
      },
      {
        headers: {
          'User-Agent': 'insomnia/2020.3.3',
        },
        timeout: 10000,
      })
  }
}