
const express = require("express");
const router = express.Router();
const Article = require("../../models/Article");



router.get("/test", (req, res) => res.send("article route testing!"));

router.get("/", (req, res) => {
  Article.find() // mongoose method gets lists of articles in mongoDB atlas database and returns in json format
    .then((articles) => res.json(articles)) //returns articles in json format
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

router.post("/add", (req, res) => {
  const id = 0;
  const title = req.body.title;
  const authors = req.body.authors;
  const source = req.body.source;
  const published_year = req.body.published_year;
  const doi = req.body.doi;
  const claim = req.body.claim;
  const evidence_level = req.body.evidence_level;

  const newArticle = new Article({
    id,
    title,
    authors,
    source,
    published_year,
    doi,
    claim,
    evidence_level,
  });

  newArticle
    .save()
    .then(() => res.json("Article added!"))
    .catch((err) => res.status(404).json("Error " + err));
});

module.exports = router;
