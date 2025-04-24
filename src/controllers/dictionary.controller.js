const axios = require("axios");

const getWordDefinition = async (req, res) => {
    const word = req.params.word;

  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: response.data.message });
  }
  
};

module.exports = { getWordDefinition };
    // const word = req.param.word;
    // console.log(word);
