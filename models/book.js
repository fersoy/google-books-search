const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const books = require('google-books-search');

const options = {
  key: SECRET_KEY,
  title: "",
  description: "",
  image: "",
  link: ""
};
books.search("Professional JavaScript for Web Developers", options, function (error, results, apiResponse) {
  if (!error) {
    console.log(results);
  } else {
    console.log(error);
  }
});

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
