const db = require("../db");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }

    res.send(`Author Name: ${author.name}`);
  } catch (err) {
    console.error("Error retrieving author:", err);
    res.status(505).send("Internal server error");
  }
}

module.exports = { getAuthorById };
