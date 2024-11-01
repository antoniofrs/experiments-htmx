import BOOKS_DATA from "../data/data.js";
import bookRow from "./book-row.js";


const getBookList = () => /*html*/`
  <ul>
    ${BOOKS_DATA.map((book) => bookRow(book)).join('')}
  </ul>
`;

export default getBookList;