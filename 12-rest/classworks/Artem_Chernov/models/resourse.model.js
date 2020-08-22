const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Article = new Schema({
  description: String,
});

const Tagline = new Schema({
  description: String,
});

const Interview = new Schema({
  question: String,
  answer: String,
});

mongoose.model("Article", Article);
mongoose.model("Tagline", Tagline);
mongoose.model("Interview", Interview);
