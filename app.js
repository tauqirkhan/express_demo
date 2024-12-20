const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

const links = [
  { href: "/", text: "Home" },
  { href: "/author", text: "Author" },
];

const users = ["Rose", "Cake", "Biff"];

const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/author", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.get("/ejs", (req, res) => {
  res.render("index", { links: links, users: users });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - http://localhost:${PORT}/`);
});
