const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  authors: {
    type: String,
    required: true,
  },

  source: {
    type: String,
    required: true,
  },

  published_year: {
    type: String,
    required: true,
  },

  doi: {
    type: String,
  },

  claim: {
    type: String,
    required: true,
  },

  evidence_level: {
    type: String,
    required: true,
  },
});
const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;
