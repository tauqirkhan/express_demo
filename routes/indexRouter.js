const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("We are at index router"));

module.exports = indexRouter;
