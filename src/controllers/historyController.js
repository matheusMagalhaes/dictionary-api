const prisma = require("../globals/prisma");

const getDictionaryHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await prisma.word_history.findMany({
      where: {
        user_id: userId,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getDictionaryHistory };
