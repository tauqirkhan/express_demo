const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById);
// authorRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   const { query } = req.query;
//   res.send(`Author ID: ${authorId} & query: ${query || "none"}`);
// });

module.exports = authorRouter;
