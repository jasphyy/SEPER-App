// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  id : {
    type: Integer, 
    required: true
  },
  
    title: {
    type: String,
    required: true
  },

  authors: {
    type: String,
    required: true
  },

  source: {
    type: String,
    required: true
  },

  published_year: {
    type: Date,
    required: true
  },

  doi: {
      type: String
  },

  claim: {
      type: String,
      required: true
  },

  evidence_level: {
      type: String,
      required: true
  }
  
});

module.exports = Article = mongoose.model('article', ArticleSchema);