import express from 'express';
import createHomepageTemplate from './views/index.js';
import getBookList from './views/book-list.js'
import BOOKS_DATA from './data/data.js';
import bookRow from './views/book-row.js';

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get("/books", (req, res) => {
  res.send(getBookList())
})

app.post("/books", (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();
  const book = {id,title,author}

  BOOKS_DATA.push(book)

  res.send(bookRow(book))
})

app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
  BOOKS_DATA.splice(idx, 1);

  res.send();
});


app.listen(3000, () => {
  console.log('App listening on port 3000');
});