const axios = require("axios");
const { saveSearch } = require("../services/history.service");

const getWordDefinition = async (req, res) => {
  const word = req.params.word;
  console.log(req.user)
  const userID = req.user.id;

  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   
    await saveSearch(word, userID);

    res.json(response.data);
  } catch (error) {
    if(error.response && error.response.status === 404){
        return res.status(404).json({error:"Sorry pal, we couldn't find definitions for the word you were looking for" });
    }

    console.log(error);
    res.status(500).json({error: "Internal server error"})
  }
};




module.exports = { getWordDefinition };
