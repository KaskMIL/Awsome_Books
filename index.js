import Book from './modules/book.js';
import {getLi as getLi, addLi as addLi, deleteLi as deleteLi, removeFromList as removeFromList} from './modules/DOMelements.js';
//import {storeData as storeData, loadData as loadData} from './modules/localStorage.js';
//import {setBorder as setBorder, setStyles as setStyles} from './modules/styles.js';

//DOM variables
const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const allBooks = document.getElementById('all-books');
let bookData = [];

//Load localStorage
//window.addEventListener('load', loadData());

addBook.addEventListener('click', () => {
  if(newTitle.value && newAuthor.value) {
    const id = bookData.length == 0 ?  1 : bookData.length + 1;
    const book = new Book(`"${newTitle.value}"`, `by ${newAuthor.value}`, `book${id}`, bookData);
    book.addBook();
    addLi(bookList, getLi(book));
    //setBorder(allBooks);
    //storeData();
    //setStyles();
  }
  newTitle.value = '';
  newAuthor.value = '';
  console.log(bookData);
})

bookList.addEventListener('click', e => {
  if(e.target.nodeName == 'BUTTON') {
    deleteLi(e.target.parentNode.id);
    bookData = [...removeFromList(e.target.parentNode.id, bookData)]
  }
  console.log(bookData)
})

