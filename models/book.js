const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const books = require('google-books-search');

const options = {
  key: "AIzaSyA_TejxGq9qzWoYy9Me5Pyx38Wr3ft48dg",
  field: 'title',
  offset: 0,
  limit: 10,
  type: 'books',
  order: 'relevance',
  lang: 'en'
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
